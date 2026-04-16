# Deploy To Vercel

This website is ready to be published on Vercel.

## Files to keep together

Keep these files in the same project folder:

- `index.html`
- `count-on-me.html`
- `golden-huntrx.html`
- `style.css`
- `script.js`
- `vercel.json`

## Option 1: Deploy with GitHub and Vercel

This is the best option if you want to update the site later.

### Step 1: Create a GitHub repository

1. Go to `https://github.com`
2. Sign in
3. Click `New repository`
4. Give it a name like `english-with-songs`
5. Create the repository

### Step 2: Upload this project to GitHub

Open PowerShell in this folder and run:

```powershell
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with the link GitHub gives you.

Example:

```powershell
git remote add origin https://github.com/yourname/english-with-songs.git
```

### Step 3: Import into Vercel

1. Go to `https://vercel.com`
2. Sign in with GitHub
3. Click `Add New...`
4. Click `Project`
5. Choose your repository
6. Click `Deploy`

Vercel should publish it automatically.

## Option 2: Upload directly in Vercel

If you do not want to use GitHub yet:

1. Go to `https://vercel.com`
2. Create an account
3. Create a new project
4. Upload this folder

GitHub is still better if you want easy updates later.

## Updating the website later

If your project is connected to GitHub:

1. Edit the files
2. Run:

```powershell
git add .
git commit -m "Update website"
git push
```

3. Vercel will publish the new version automatically

## Homepage and pages

- Home page: `index.html`
- Song page 1: `count-on-me.html`
- Song page 2: `golden-huntrx.html`
