# Retailfluencer Landing Page

A waitlist landing page for **myretail.coupons** — the influencer retail attribution platform.

## 🚀 Quick Start

```bash
# Preview locally
npx serve .

# Or open directly in browser
open index.html
```

## 📁 Project Structure

```
├── index.html      # Main landing page
├── styles.css      # Design system + animations
├── script.js       # Interactions + form handling
├── favicon.svg     # Site favicon
├── _headers        # Cloudflare security + cache headers  
├── _redirects      # Cloudflare URL redirects
├── robots.txt      # Search engine directives
├── sitemap.xml     # SEO sitemap
└── README.md       # This file
```

## ☁️ Deploy to Cloudflare Pages

### Via GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial landing page"
   git push origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
   - Click **Create a project** → **Connect to Git**
   - Select your repository
   - Configure build settings:
     - **Build command**: *(leave empty)*
     - **Build output directory**: `/`
   - Click **Save and Deploy**

3. **Add Custom Domain**
   - In your Pages project → **Custom domains** → **Set up a custom domain**
   - Enter `myretail.coupons`
   - Follow DNS configuration steps
   - Cloudflare will automatically provision SSL

### Manual Deploy (Alternative)

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy . --project-name=myretail-coupons
```

## 🔧 Configuration

### Form Submission

Currently logs to console. To connect to a backend, edit `script.js`:

```javascript
// Replace the simulated API call with:
const response = await fetch('https://your-api.com/waitlist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
});
```

### Social Image

Add an `og-image.png` (1200x630px) for social media previews.

## 🎨 Design System

Based on the Retailfluencer admin portal aesthetic. See `admin-design.md` for full design token reference.

| Token | Value |
|-------|-------|
| Primary BG | `#0a0a0f` |
| Accent | `#7c3aed` → `#a855f7` |
| Font | Inter |

## 📄 License

© 2026 Retailfluencer. All rights reserved.
