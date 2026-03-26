# Deployment Guide - GitHub & Netlify

This guide will help you deploy your University of Guyana website to GitHub and Netlify.

## Table of Contents
1. [GitHub Setup](#github-setup)
2. [Netlify Setup](#netlify-setup)
3. [Automated Deployment](#automated-deployment)
4. [Manual Deployment](#manual-deployment)
5. [Troubleshooting](#troubleshooting)

---

## GitHub Setup

### 1. Create a GitHub Repository

1. Go to [github.com](https://github.com) and log in or create an account
2. Click **"New"** to create a new repository
3. Name your repository (e.g., `university-of-guyana-website`)
4. Add a description (optional)
5. Choose **Public** or **Private**
6. Click **"Create repository"**

### 2. Connect Your Local Repository to GitHub

Run these commands in your project directory:

```bash
# If not already done, initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: University of Guyana website"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/university-of-guyana-website.git

# Push to GitHub (replace main with your default branch if different)
git branch -M main
git push -u origin main
```

### 3. Verify on GitHub

- Visit your repository URL: `https://github.com/YOUR_USERNAME/university-of-guyana-website`
- You should see all your project files

### 4. Future Updates

After making changes locally:

```bash
# Stage changes
git add .

# Commit with a message
git commit -m "Update hero section layout"

# Push to GitHub
git push origin main
```

---

## Netlify Setup

### Option A: Netlify UI Connection (Recommended)

#### 1. Create a Netlify Account

1. Go to [netlify.com](https://netlify.com)
2. Sign up (you can use your GitHub account for easier login)
3. Click **"Create a new site"**

#### 2. Connect Your GitHub Repository

1. Choose **"Import an existing project"**
2. Select **GitHub** as your provider
3. Authorize Netlify to access your GitHub account
4. Select your `university-of-guyana-website` repository
5. Confirm build settings (they should auto-detect Next.js):
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - Set **Node version** to 18 or higher

6. Click **"Deploy site"**

Netlify will automatically build and deploy your site!

#### 3. Configure Domain (Optional)

1. Go to your site's **Domain settings**
2. Add a custom domain or use Netlify's subdomain

### Option B: Netlify CLI (For Command Line Users)

#### 1. Install Netlify CLI

```bash
npm install -g netlify-cli
```

#### 2. Authenticate with Netlify

```bash
netlify login
```

This opens your browser to authorize the CLI.

#### 3. Connect Your Site

```bash
netlify init
```

Follow the prompts:
- Choose **"Connect this directory to an existing site"** or **"Create and deploy a new site"**
- Select your team
- Give your site a name

#### 4. Deploy

```bash
npm run deploy:netlify
```

---

## Automated Deployment

GitHub Actions workflows have been configured to automatically deploy to Netlify when you push to `main` or `develop` branches.

### Setting Up Automatic Deployments

#### 1. Add Netlify Secrets to GitHub

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Add two secrets:

**Secret 1: NETLIFY_SITE_ID**
- Name: `NETLIFY_SITE_ID`
- Value: Find this in Netlify → Site settings → General → Site ID

**Secret 2: NETLIFY_AUTH_TOKEN**
- Name: `NETLIFY_AUTH_TOKEN`
- Value: Generate at [Netlify → User settings → Applications → Personal access tokens](https://app.netlify.com/user/applications)
  - Click **"New access token"**
  - Name it (e.g., "GitHub CI")
  - Copy the token immediately

#### 2. Verify Your Workflow

1. Go to your GitHub repository
2. Click **Actions** tab
3. You should see a workflow file: `.github/workflows/deploy.yml`
4. Next time you push to `main`, it will automatically build and deploy!

---

## Manual Deployment

### Using npm Scripts

#### Pre-deployment Check
```bash
npm run deploy:check
```
This runs linting and builds to verify everything works.

#### Build Only
```bash
npm run build
```

#### Start Production Server Locally
```bash
npm run start
```

#### Manual Netlify Deploy (if connected via CLI)
```bash
npm run deploy:netlify
```

---

## Troubleshooting

### Error: "Cannot find module"
**Solution:** Run `npm install --legacy-peer-deps`

### Netlify Build Fails
1. Check **Deploys** in Netlify dashboard
2. Review **Deploy log** for specific errors
3. Ensure all environment variables are set
4. Verify Node version (should be 18+)

### GitHub Actions Workflow Not Triggering
1. Check workflow file exists: `.github/workflows/deploy.yml`
2. Verify secrets are set correctly in GitHub Settings
3. Check that you're pushing to `main` or `develop` branch

### Build Succeeds but Site Shows Errors
1. Check **Netlify Functions** logs in dashboard
2. Verify `.next` directory is being deployed (check Netlify settings)
3. Clear cache: **Site settings** → **Clear cache and redeploy**

### "No publish directory found"
- Ensure build command is: `npm run build`
- Ensure publish directory is: `.next`

---

## Environment Variables

If your app needs environment variables:

### For Development
Create a `.env.local` file (not committed to Git):
```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### For Netlify Production
1. Go to **Netlify** → **Site settings** → **Build & deploy** → **Environment**
2. Click **"Edit variables"**
3. Add your environment variables

### For GitHub Actions
1. Go to **GitHub** → **Settings** → **Secrets and variables** → **Actions**
2. Add secrets (they'll be available in workflows)

---

## Useful Links

- [GitHub Docs](https://docs.github.com)
- [Netlify Docs](https://docs.netlify.com)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

## Quick Reference

| Task | Command |
|------|---------|
| Push to GitHub | `git add . && git commit -m "message" && git push` |
| Check before deploy | `npm run deploy:check` |
| Deploy to Netlify (CLI) | `npm run deploy:netlify` |
| View build status | Check GitHub Actions or Netlify Deploys tab |
| View live site | Check Netlify dashboard for site URL |

---

**Ready to deploy?** Start with GitHub Setup, then move to Netlify Setup!
