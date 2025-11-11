{
  pkgs,
  unstable-pkgs,
}:

pkgs.mkShell {
  buildInputs =
    (with pkgs; [
      # Node.js for frontend development
      nodejs_22
      nodePackages.npm

      uv
      # General utilities
      ripgrep

      # General utilities
      curl
      jq
      git

      # Language servers for IDE/editors
      typescript-language-server
      taplo
      ty
    ])
    ++ (with unstable-pkgs; [
      vscode-json-languageserver
    ]);

  shellHook = ''
    # Ensure node modules are available
    export PATH="$PWD/node_modules/.bin:$PATH"
  '';
}
