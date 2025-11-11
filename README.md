# Ferhan Sahin - Business Website

Fractional Growth Marketing Partner website built with Next.js, deployed on Cloudflare Pages.

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17.0 or higher
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site.

## 📁 Project Structure

```
plg-site/
├── .mcp.json              # MCP server configuration for AI assistants
├── pages/
│   ├── _app.tsx          # App wrapper
│   ├── _document.tsx     # HTML document structure
│   └── index.tsx         # Main landing page
├── components/
│   ├── Section.tsx       # Section wrapper component
│   ├── Container.tsx     # Container component
│   ├── Badge.tsx         # Badge UI component
│   ├── Feature.tsx       # Feature card component
│   ├── NavLink.tsx       # Navigation link component
│   └── Pill.tsx          # Pill/tag component
├── public/               # Static assets
├── styles/
│   └── globals.css       # Global styles with Tailwind
├── next.config.js        # Next.js configuration
├── next-sitemap.config.js # Sitemap generation config
└── package.json          # Dependencies and scripts
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server at localhost:3000

# Build & Export
npm run build        # Build and export static site to /out directory

# Deployment
npm run deploy       # Build and deploy to Cloudflare Pages
```

## 🎨 Customization

### Update Contact Information

Edit the constants at the top of `pages/index.tsx`:

```typescript
const CONTACT_EMAIL = 'your-email@example.com';
const CONTACT_PHONE = '+1 234 567 8900';
const CONTACT_LINKEDIN = 'https://www.linkedin.com/in/yourprofile/';
const CALENDLY_URL = 'https://calendly.com/your-handle/intro';
```

### Update SEO Metadata

Modify the `<Head>` section and JSON-LD structured data in `pages/index.tsx`.

Update sitemap configuration in `next-sitemap.config.js`:

```javascript
module.exports = {
  siteUrl: 'https://yourdomain.com',
  // ... other options
}
```

### Edit Content Sections

All content is in `pages/index.tsx`. Each section is clearly labeled:
- Hero section
- Work/Brands section
- Services section
- Method section
- Case examples
- About section
- Contact section

## 🤖 AI-Assisted Maintenance

This project is configured for AI-assisted maintenance through MCP (Model Context Protocol) servers.

### MCP Servers Configured

Located in `.mcp.json`:

1. **Filesystem Server** - Direct file editing
2. **Git Server** - Version control operations
3. **GitHub Server** - PR and deployment management
4. **Playwright Server** - Browser testing and automation

### Using with Codex/Claude Code

1. Ensure `.mcp.json` is in the project root
2. Start Codex/Claude Code in this directory
3. Use natural language commands:
   - "Update the hero section text"
   - "Change the contact email"
   - "Add a new service to the services section"
   - "Deploy the changes"

### Verify MCP Configuration

```bash
# In Claude Code/Codex
/mcp
```

This shows all connected MCP servers.

## 🌐 Deployment to Cloudflare Pages

### Initial Setup

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Cloudflare Pages**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to Workers & Pages → Create application → Pages → Connect to Git
   - Select your repository
   - Configure build settings:
     - **Framework preset**: Next.js (Static HTML Export)
     - **Build command**: `npm run build`
     - **Build output directory**: `out`
     - **Node version**: 18 or higher

3. **Environment Variables** (in Cloudflare):
   - `SITE_URL`: Your production domain (e.g., `https://ferhansahin.com`)

4. **Deploy**:
   - Cloudflare will automatically build and deploy
   - Future pushes to `main` will trigger automatic deployments

### Manual Deployment (Optional)

If you prefer manual deployment with Wrangler:

```bash
# Install Wrangler CLI globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
npm run deploy
```

## 📊 SEO Features

This site includes comprehensive SEO optimization:

- ✅ Semantic HTML with proper heading hierarchy
- ✅ Meta tags (title, description, keywords, author)
- ✅ Open Graph tags for social media sharing
- ✅ Twitter Card tags
- ✅ JSON-LD structured data (Schema.org)
- ✅ Auto-generated sitemap.xml
- ✅ Auto-generated robots.txt
- ✅ Canonical URLs
- ✅ Mobile-responsive viewport configuration
- ✅ Fast page load times (static site)

### Update SEO Information

1. Edit metadata in `pages/index.tsx` `<Head>` section
2. Update JSON-LD structured data in the same file
3. Configure sitemap in `next-sitemap.config.js`

## 🔒 Security Notes

- `.env.local` is gitignored - never commit secrets
- GitHub token for MCP server should have minimal scopes
- Use `.env.example` as a template for local development

## 📝 Development Workflow

### For AI Assistant Users

1. **Make changes**: "Update the services section with a new feature"
2. **Test locally**: "Start the development server"
3. **Commit changes**: "Commit these changes with message: Updated services"
4. **Deploy**: Push to GitHub, Cloudflare auto-deploys

### For Manual Developers

1. Edit files in `pages/` or `components/`
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Automatic deployment via Cloudflare Pages

## 🐛 Troubleshooting

### Development Server Won't Start

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Start again
npm run dev
```

### Build Errors

- Check that all dependencies are installed: `npm install`
- Verify Node.js version: `node --version` (should be 18.17+)
- Check for TypeScript errors: `npm run lint`

### MCP Servers Not Connecting

1. Verify `.mcp.json` is in project root
2. Restart Claude Code/Codex
3. Check MCP server status: `/mcp` command
4. Ensure Node.js and npx are accessible in PATH

## 📚 Tech Stack

- **Framework**: Next.js 15 (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Hosting**: Cloudflare Pages
- **SEO**: next-sitemap
- **AI Assistance**: MCP Servers

## 📄 License

© 2025 Ferhan Sahin. All rights reserved.

## 🤝 Support

For questions or issues with the website:
- Email: ferhanthenomad@gmail.com
- LinkedIn: [Ferhan Sahin](https://www.linkedin.com/in/ferhansahin/)
