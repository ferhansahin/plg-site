# AI-Assisted Maintenance Guide

This guide is designed for non-technical users who want to maintain this website using AI assistants like Codex with Codexia or Claude Code.

## 🎯 Overview

This website is set up with **MCP (Model Context Protocol) servers** that allow AI assistants to:
- Read and edit files directly
- Commit changes to version control
- Deploy updates to production
- Test the website automatically

No coding knowledge required! Just tell the AI what you want to change.

## 🚀 Getting Started

### First-Time Setup

1. **Install Node.js** (if not already installed):
   - Visit [nodejs.org](https://nodejs.org)
   - Download the LTS version for macOS
   - Install and verify: Open Terminal and run `node --version`

2. **Open the project in Codex/Claude Code**:
   - Launch Codexia or Claude Code
   - Open the project folder (where you cloned/downloaded this repository)
   - The AI will automatically detect the `.mcp.json` configuration

3. **Verify MCP servers are connected**:
   - Type in the AI chat: `/mcp`
   - You should see these servers listed as "connected":
     - ✅ filesystem
     - ✅ git
     - ✅ github (if GitHub token is configured)
     - ✅ playwright

4. **Install dependencies** (first time only):
   - Say to the AI: "Install the project dependencies"
   - Or manually run in Terminal: `npm install`

5. **Start the development server**:
   - Say: "Start the development server"
   - Or manually: `npm run dev`
   - Visit [http://localhost:3000](http://localhost:3000) to see your site

## 💬 Common Tasks & Commands

### Making Content Changes

Just use natural language to describe what you want! Here are examples:

#### Update Contact Information

```
"Change the contact email to ferhan@example.com"
"Update the phone number to +351 123 456 789"
"Change the Calendly link to https://calendly.com/ferhan/30min"
```

#### Modify Text Content

```
"Change the hero headline to 'Product-Led Growth Expert for SaaS'"
"Update the About section to include my experience with AI companies"
"Add a new service called 'AI Integration Strategy' to the services section"
```

#### Update Brand Logos

```
"Add 'Microsoft' to the list of brands I've worked with"
"Remove 'Heinz' from the brands section"
"Reorganize the brands into alphabetical order"
```

#### Modify Case Studies

```
"Update the first case study with new results: retention increased by 45%"
"Add a third case study about a B2B SaaS company"
"Change the metrics in the e-commerce case study"
```

### Testing Changes Locally

```
"Start the development server so I can preview changes"
"Open the site in a browser"
"Run a test to check if all links are working"
```

The dev server runs at [http://localhost:3000](http://localhost:3000)

### Committing Changes

```
"Commit these changes with the message: Updated services section"
"Save all changes to git with message: Updated contact information"
"Create a commit for the brand updates"
```

### Deploying to Production

#### Via Cloudflare Pages (Recommended - Automatic)

Once you've committed and pushed to GitHub, Cloudflare automatically deploys:

```
"Push these changes to GitHub"
```

Cloudflare Pages will automatically:
1. Detect the push
2. Build the site
3. Deploy to production
4. Update your live site in ~2 minutes

#### Manual Deployment

```
"Deploy the site to Cloudflare Pages"
"Build and deploy the production version"
```

## 📝 Workflow Examples

### Example 1: Quick Text Update

**You say**:
> "Change the hero section text to say 'Growth Marketing Leader' instead of 'Growth Partner'"

**AI does**:
1. Opens `pages/index.tsx`
2. Finds the hero section
3. Updates the text
4. Shows you the change

**You verify**:
> "Start the dev server"

**You confirm**:
> "Looks good! Commit with message: Updated hero text"

**You deploy**:
> "Push to GitHub"

Done! Live in ~2 minutes.

### Example 2: Adding a New Service

**You say**:
> "Add a new service to the services section called 'AI-Powered Growth Automation' with description 'Leverage AI tools to automate repetitive growth tasks and scale your efforts.'"

**AI does**:
1. Opens `pages/index.tsx`
2. Finds the services section
3. Adds a new `<Feature>` component with your text
4. Shows you the change

**You verify** and **deploy** as above.

### Example 3: SEO Update

**You say**:
> "Update the meta description to better emphasize SaaS expertise"

**AI does**:
1. Opens `pages/index.tsx`
2. Finds the `<Head>` section
3. Updates the meta description tag
4. Updates OpenGraph description
5. Shows you the changes

### Example 4: Testing the Site

**You say**:
> "Test the site for broken links"

**AI does** (using Playwright MCP server):
1. Starts a headless browser
2. Visits your local site
3. Clicks all links
4. Reports any broken links

## 🔧 Configuration Files

You typically won't need to edit these, but here's what they do:

### `.mcp.json`
Configures AI assistant access to:
- File system (read/write files)
- Git (version control)
- GitHub (deployment triggers)
- Playwright (browser testing)

### `pages/index.tsx`
Main page content. All text, sections, and structure.

### `components/*.tsx`
Reusable UI components (Badge, Feature, Section, etc.)

### `next.config.js`
Next.js configuration for static export.

### `next-sitemap.config.js`
SEO sitemap configuration.

## 🎨 Understanding the Structure

The website has these main sections (all in `pages/index.tsx`):

1. **Navigation** - Top menu bar
2. **Hero** - Main headline and call-to-action
3. **Work/Brands** - Logo grid of companies worked with
4. **Services** - What you offer (6 feature cards)
5. **Method** - Your 4-step process
6. **Case Examples** - Success stories (2 case studies)
7. **About** - Your background and expertise
8. **Contact** - Call-to-action and contact information
9. **Footer** - Copyright and legal links

To modify any section, just reference it by name to the AI.

## 🛡️ Safety & Best Practices

### Always Preview First

Before deploying:
1. Ask AI to start the dev server
2. Visit [http://localhost:3000](http://localhost:3000)
3. Check that your changes look correct
4. Then commit and deploy

### Commit Messages

Use clear, descriptive commit messages:
- ✅ "Updated contact email"
- ✅ "Added new AI services section"
- ✅ "Fixed typo in about section"
- ❌ "Changes"
- ❌ "Update"

### Ask Questions

If you're unsure about something:

```
"What will happen if I change the Calendly URL?"
"Show me where the contact email is used"
"What's the best way to add a new section?"
```

The AI can explain before making changes.

## 🐛 Troubleshooting

### MCP Servers Not Working

**Problem**: AI says "I don't have access to the filesystem"

**Solution**:
1. Check that `.mcp.json` exists in project root
2. Restart Codex/Claude Code
3. Type `/mcp` to verify server status
4. You may need to approve MCP server access (security prompt)

### Development Server Won't Start

**Problem**: `npm run dev` fails

**Solution**:
```
"Delete the .next folder and node_modules, then reinstall dependencies"
```

Or manually:
```bash
rm -rf .next node_modules
npm install
npm run dev
```

### Changes Not Showing

**Problem**: Made changes but don't see them on localhost:3000

**Solution**:
1. Save all files: "Save all changes"
2. Refresh browser (Cmd+R on Mac)
3. Clear browser cache (Cmd+Shift+R)
4. Restart dev server

### Deployment Issues

**Problem**: Pushed to GitHub but site not updating

**Solution**:
1. Check Cloudflare Pages dashboard for build logs
2. Verify build settings:
   - Build command: `npm run build`
   - Output directory: `out`
3. Check for build errors in Cloudflare logs

## 📊 SEO Maintenance

### Updating Meta Tags

```
"Update the meta description to focus on B2B SaaS"
"Add 'product-led growth' to the keywords"
"Change the Open Graph image to /new-og-image.jpg"
```

### Sitemap Updates

The sitemap auto-generates on build. If you add new pages:

```
"Add a new page to the sitemap for /blog"
```

### Structured Data

```
"Update the JSON-LD structured data to include my new services"
```

## 🔄 Regular Maintenance Tasks

### Monthly

```
"Check for broken links on the site"
"Update the copyright year if needed"
"Verify all contact links are working"
```

### When Adding New Work

```
"Add [Company Name] to the brands section"
"Update the case studies with the latest results"
```

### Content Refresh

```
"Update the services section to include [new service]"
"Refresh the about section with recent achievements"
```

## 💡 Pro Tips

### Batch Changes

Instead of multiple requests, batch them:

```
"Make these changes:
1. Update email to ferhan@newdomain.com
2. Add 'Stripe' to the brands list
3. Update the phone number to +351 987 654 321"
```

### Preview Before Commit

Always review:

```
"Show me what changed in the last edit"
"Let me preview the site before committing"
```

### Use Specific Language

Be specific about what you want:
- ✅ "Change the hero headline to [exact text]"
- ❌ "Update the hero"

## 📞 Getting Help

If you're stuck:

1. **Ask the AI**: "How do I [task]?"
2. **Check README.md**: Technical documentation
3. **Review this guide**: Common patterns and examples

## 🎓 Learning More

Want to understand how it works?

```
"Explain how the components are structured"
"Show me where the styling is defined"
"What technologies does this site use?"
```

The AI can teach you as you go!

---

## Quick Reference Card

| Task | Command |
|------|---------|
| Update text | "Change [section] to say [new text]" |
| Add content | "Add [content] to the [section] section" |
| Preview | "Start the development server" |
| Save | "Commit with message: [description]" |
| Deploy | "Push to GitHub" |
| Test | "Check for broken links" |
| Help | "How do I [task]?" |

**Remember**: The AI is here to help! Don't hesitate to ask questions or request clarification before making changes.
