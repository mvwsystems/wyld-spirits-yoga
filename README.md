# Wyld Spirits Yoga — Site Documentation

## File Structure

```
wyld-spirits-site/
├── index.html          Home page
├── classes.html        Weekly classes + schedule + pricing
├── events.html         Upcoming events + venue hosting
├── private.html        Private sessions + corporate + parties
├── about.html          Brand story + values + community photos
├── contact.html        Contact form + info
├── css/
│   └── style.css       Shared design system
├── js/
│   └── main.js         Shared JavaScript
├── images/             All site images (replace placeholders)
│   ├── hero.jpg        Hero background (winery class)
│   ├── about.jpg       Instructor photo
│   ├── warrior.jpg     Poolside warrior pose
│   ├── outdoor.jpg     Park / outdoor class
│   ├── school.jpg      School gym session
│   ├── goat.jpg        Goat yoga
│   ├── community1.jpg  Community group photo
│   └── community2.jpg  Community group photo 2
├── netlify.toml        Netlify config
└── README.md           This file
```

## Design System

**Colors:** Sage green (#7a9e7e) as primary accent · Warm blacks/charcoals as background · Cream/light as text
**Fonts:** Cormorant Garamond (display) · Outfit (body) · JetBrains Mono (labels)
**Aesthetic:** Cinematic dark · warm · inclusive · nature-grounded

## Deployment

### GitHub → Netlify (Recommended)

1. Push this folder to a GitHub repo called `wyld-spirits-yoga`
2. Connect repo to Netlify → Site settings → Build & deploy
3. Set publish directory to `.`
4. No build command needed
5. Every `git push` auto-deploys

### Quick Deploy

```bash
git init
git add .
git commit -m "initial build"
git remote add origin https://github.com/YOUR_USERNAME/wyld-spirits-yoga.git
git push -u origin main
```

## TODO Before Launch

- [ ] Replace all placeholder images in `/images/` with real client photos
- [ ] Confirm contact email address in `contact.html` form action
- [ ] Update phone number if different from (972) 600-1947
- [ ] Add real class pricing (check with client)
- [ ] Add real testimonials (replace placeholder quotes)
- [ ] Connect custom domain in Netlify once DNS is ready
- [ ] Test contact form submission end-to-end
- [ ] Add social media links (confirm Instagram/Facebook handles)
- [ ] Update event dates when confirmed

## Contact Form

The contact form uses FormSubmit (free, no backend required).
Currently pointed to: `Wyldspiritsyoga@gmail.com`
To change: update the `action` attribute on the `<form>` tag in `contact.html`.
