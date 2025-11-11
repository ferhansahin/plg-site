{
  description = "Meetball Backend Development Environment with Cloudflare Workers";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.05";
    nixpkgs-unstable.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      nixpkgs-unstable,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        unstable-pkgs = nixpkgs-unstable.legacyPackages.${system};

        # Import the existing shell.nix for the devShell
        shellEnv = import ./shell.nix { inherit pkgs unstable-pkgs; };

        # Development scripts for Vite with different backends
        with-local-backend = pkgs.writeShellScriptBin "with-local-backend" ''
          VITE_API_BASE_URL=http://localhost:8808 vite --host
        '';

        with-dev-backend = pkgs.writeShellScriptBin "with-dev-backend" ''
          VITE_API_BASE_URL=https://dev-api.meetball.fun vite --host
        '';

        with-prod-backend = pkgs.writeShellScriptBin "with-prod-backend" ''
          VITE_API_BASE_URL=https://api.meetball.fun vite --host
        '';

        # Wrangler Pages Functions development scripts
        # Note: wrangler pages dev automatically loads .dev.vars file
        # Frontend uses relative URLs (/api/*) which are proxied by functions/api/[[path]].js
        wrangler-with-local-backend = pkgs.writeShellScriptBin "wrangler-with-local-backend" ''
          set -e

          cleanup() {
            echo ""
            echo "🧹 Cleaning up .dev.vars..."
            rm -f .dev.vars
          }
          trap cleanup EXIT INT TERM

          echo "🔧 Building frontend with relative API URLs..."
          echo "   Setting VITE_API_BASE_URL=/ to use Pages Function proxy"
          VITE_API_BASE_URL=/ npm run build

          echo "📝 Creating .dev.vars for API proxy function..."
          echo "API_BASE_URL=http://localhost:8808" > .dev.vars

          echo "🚀 Starting wrangler pages dev on 0.0.0.0:5173 with live-reload..."
          echo "   Frontend uses: /api/* (relative URLs)"
          echo "   Proxy forwards to: localhost:8808/api/*"
          wrangler pages dev dist --ip 0.0.0.0 --port 5173 --live-reload --log-level=error
        '';

        wrangler-with-dev-backend = pkgs.writeShellScriptBin "wrangler-with-dev-backend" ''
          set -e

          cleanup() {
            echo ""
            echo "🧹 Cleaning up .dev.vars..."
            rm -f .dev.vars
          }
          trap cleanup EXIT INT TERM

          echo "🔧 Building frontend with relative API URLs..."
          echo "   Setting VITE_API_BASE_URL=/ to use Pages Function proxy"
          VITE_API_BASE_URL=/ npm run build

          echo "📝 Creating .dev.vars for API proxy function..."
          echo "API_BASE_URL=https://dev-api.meetball.fun" > .dev.vars

          echo "🚀 Starting wrangler pages dev on 0.0.0.0:5173 with live-reload..."
          echo "   Frontend uses: /api/* (relative URLs)"
          echo "   Proxy forwards to: dev-api.meetball.fun/api/*"
          wrangler pages dev dist --ip 0.0.0.0 --port 5173 --live-reload
        '';

        wrangler-with-prod-backend = pkgs.writeShellScriptBin "wrangler-with-prod-backend" ''
          set -e

          cleanup() {
            echo ""
            echo "🧹 Cleaning up .dev.vars..."
            rm -f .dev.vars
          }
          trap cleanup EXIT INT TERM

          echo "🔧 Building frontend with relative API URLs..."
          echo "   Setting VITE_API_BASE_URL=/ to use Pages Function proxy"
          VITE_API_BASE_URL=/ npm run build

          echo "📝 Creating .dev.vars for API proxy function..."
          echo "API_BASE_URL=https://api.meetball.fun" > .dev.vars

          echo "🚀 Starting wrangler pages dev on 0.0.0.0:5173 with live-reload..."
          echo "   Frontend uses: /api/* (relative URLs)"
          echo "   Proxy forwards to: api.meetball.fun/api/*"
          wrangler pages dev dist --ip 0.0.0.0 --port 5173 --live-reload
        '';

        # Enhanced devShell with additional scripts
        devShell = pkgs.mkShell {
          inputsFrom = [ shellEnv ];
          buildInputs = shellEnv.buildInputs ++ [
            with-local-backend
            with-dev-backend
            with-prod-backend
            wrangler-with-local-backend
            wrangler-with-dev-backend
            wrangler-with-prod-backend
          ];
          shellHook = shellEnv.shellHook;
        };

        # Helper function to create worker deployment scripts
        mkWorkerDeploy =
          {
            name,
            directory,
            description,
          }:
          pkgs.writeShellScriptBin name ''
            set -e
            echo "🚀 ${description}"
            echo "📁 Working directory: ${directory}"

            if [ ! -d "${directory}" ]; then
              echo "❌ Directory ${directory} not found!"
              exit 1
            fi

            cd ${directory}

            # Install dependencies if node_modules doesn't exist
            if [ ! -d "node_modules" ]; then
              echo "📦 Installing dependencies..."
              npm install
            fi

            # Deploy the worker
            echo "☁️  Deploying to Cloudflare..."
             wrangler deploy

            echo "✅ Deployment complete!"
          '';

      in
      {
        # Use the existing shell.nix for devShell
        devShells.default = devShell;

        # Deployment and development apps
        apps = {
          # Landing page worker commands
          deploy-images-slave = {
            type = "app";
            program = "${
              mkWorkerDeploy {
                name = "deploy-images-slave";
                directory = "./cloudflare-images-slave";
                description = "Deploying Images (Slave) Worker";
              }
            }/bin/deploy-images-slave";
          };

          # Database commands
          run-app-dev = {
            type = "app";
            program = "${pkgs.writeShellScriptBin "app-dev" ''
              set -e
              npm install
              npm run dev
              echo "✅ Migrations complete!"
            ''}/bin/migrate";
          };

          # Logto URI synchronization for Cloudflare Pages deployments
          # AIDEV-NOTE: Handles GitHub events to sync branch preview URLs with Logto auth
          # Usage: nix run .#logto-sync (requires GITHUB_* and SOPS_AGE_KEY env vars)
          logto-sync = {
            type = "app";
            program = "${import ./.nix/apps/logto-sync.nix { inherit pkgs; }}/bin/logto-sync";
          };

        };

        # Packages available in the environment
        packages = {
          deploy-images-slave = mkWorkerDeploy {
            name = "deploy-images-slave";
            directory = "./cloudflare-images-slave";
            description = "Deploy Images (Slave) Worker";
          };
        };
      }
    );
}
