# CLAUDE CODE INSTRUCTIONS — Wyld Spirits Yoga Site

## YOUR ONLY JOB
This site is fully built and ready to deploy. Do NOT redesign anything. Do NOT rewrite CSS, JS, or content. Your only job is git setup and Netlify deployment.

---

## WHAT YOU ARE DEPLOYING

A complete 6-page static HTML website for Wyld Spirits Yoga:

```
wyld-spirits-site/
├── index.html          Home
├── classes.html        Classes + schedule + pricing
├── events.html         Upcoming events
├── private.html        Private sessions + corporate
├── about.html          Brand story
├── contact.html        Contact form
├── css/style.css       Shared design system
├── js/main.js          Shared JavaScript
├── images/             Client photos (must be in this folder)
├── netlify.toml        Netlify config (already written)
└── README.md
```

---

## BEFORE YOU START — IMAGE CHECK

Before doing anything else, verify that the `/images/` folder exists and contains the client's photo files:
- hero.jpg
- about.jpg
- warrior.jpg
- outdoor.jpg
- school.jpg
- goat.jpg
- community1.jpg
- community2.jpg

If the images folder is empty or missing files, tell me and wait. Do not proceed without images.

---

## DEPLOYMENT STEPS

### Step 1 — Initialize Git
```bash
cd wyld-spirits-site
git init
git add .
git commit -m "initial build — wyld spirits yoga"
```

### Step 2 — Create GitHub Repo
```bash
gh repo create wyld-spirits-yoga --public --source=. --remote=origin --push
```

If GitHub CLI is not installed:
```bash
brew install gh
gh auth login
```
Then re-run the create command above.

### Step 3 — Confirm Push
Tell me the GitHub repo URL once it's created and pushed.

### Step 4 — Netlify Connection
Instructions for the user:
1. Go to app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub → select "wyld-spirits-yoga"
4. Set publish directory to `.` (a single dot)
5. Leave build command blank
6. Click Deploy

---

## WHAT NOT TO DO

- Do NOT change any HTML, CSS, or JS
- Do NOT redesign or "improve" anything
- Do NOT add frameworks or build tools
- Do NOT change the file structure
- Do NOT modify the netlify.toml

---

## WHEN DONE

Report back:
1. GitHub repo URL
2. Confirmation all files pushed
3. Any issues encountered

The user will handle Netlify connection manually from the GitHub repo.

---

## NOTES FOR CLIENT (pass along after deploy)

- The contact form uses FormSubmit and will send to Wyldspiritsyoga@gmail.com
- Images in /images/ are currently placeholders — swap with real client photos and push again
- To add a new page: duplicate any existing page, update nav links across all pages, commit and push
- Every `git push` auto-deploys to Netlify once connected
