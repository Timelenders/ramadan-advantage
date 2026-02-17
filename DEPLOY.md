# Deploy Ramadan Advantage to GitHub Pages

## Quick Deploy (5 minutes)

### Step 1: Create a GitHub Repository
1. Go to https://github.com/new
2. Name it: `ramadan-advantage` (or any name you like)
3. Set it to **Public**
4. Click **Create repository**

### Step 2: Push the Code
Open your terminal and run these commands from this `app` folder:

```bash
cd /path/to/Ramadan/app
git init
git add .
git commit -m "Ramadan Advantage PWA - initial deploy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ramadan-advantage.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repo on GitHub
2. Click **Settings** > **Pages** (left sidebar)
3. Under "Source", select **Deploy from a branch**
4. Branch: **main**, Folder: **/ (root)**
5. Click **Save**

### Step 4: Access Your App
Your app will be live at:
```
https://YOUR_USERNAME.github.io/ramadan-advantage/
```

It takes 1-2 minutes for the first deploy. After that, anyone can:
- Visit the URL on their phone
- Tap "Install" or "Add to Home Screen"
- Use it like a native app, even offline!

## Share With Others
Just send them the URL. They can install it on:
- **Android**: Chrome shows "Add to Home Screen" automatically
- **iPhone**: Tap Share > "Add to Home Screen"
- **Desktop**: Chrome shows install icon in the address bar

## Custom Domain (Optional)
If you own a domain like `ramadan.timelenders.com`:
1. Add a `CNAME` file to the repo containing your domain
2. Configure DNS as per GitHub's instructions
