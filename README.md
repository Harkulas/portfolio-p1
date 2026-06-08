[README.md](https://github.com/user-attachments/files/28713589/README.md)
# Harka Saud — Portfolio Website

A fully static, production-grade personal portfolio site deployable on **GitHub Pages**.

---

## 🚀 Deploy to GitHub Pages

1. Create a new GitHub repo named `harkasaud.github.io` (or any name).
2. Upload `index.html` to the root of the repo.
3. Go to **Settings → Pages → Source → Deploy from branch → main → / (root)**.
4. Your site will be live at `https://harkasaud.github.io/` within 1–2 minutes.

---

## ✅ TODO — Replace Placeholder Links

### Projects (in `index.html`)
Search for `<!-- TODO: Replace # with actual project URL -->` and update each `href="#"`:

| Project | Link to replace |
|---|---|
| Healthcare Integration Platform | `🔗 View Project` + `⭐ GitHub` |
| Enterprise Automation Software | `🔗 View Project` + `⭐ GitHub` |
| High-Performance Reporting Engine | `🔗 View Project` + `⭐ GitHub` |

### Certifications
Search for `<!-- TODO: Replace # with actual certification URL -->` and update each `href="#"`:

| Cert Card | Replace with |
|---|---|
| Microsoft Certified | Credly / Microsoft Learn URL |
| AWS Certification | AWS Credly badge URL |
| Agile / Scrum Certification | Credly / issuer URL |
| Docker / DevOps | Credly / issuer URL |

> Also **rename the cert cards** with your actual certification names (e.g., "AZ-900: Microsoft Azure Fundamentals").

### Footer GitHub Link
Search for `<!-- TODO: Replace # with GitHub profile URL -->` and update with your GitHub URL.

### OpenGraph Image
Replace `https://harkasaud.github.io/og-image.png` in the `<head>` with a real screenshot or preview image (1200×630px).

### Canonical URL
Update `<link rel="canonical" href="https://harkasaud.github.io/" />` if your GitHub Pages URL differs.

---

## 🎨 Features Included

- **Dark / Light mode** toggle (saves to localStorage)
- **3 color palettes**: Cyan, Emerald, Amber (saves to localStorage)
- **Animated hero**: gradient mesh, floating orbs, dot grid
- **Scroll progress bar** at top
- **Scroll reveal** animations on all sections
- **Sticky navbar** that shrinks on scroll + active section highlighting
- **Hamburger menu** for mobile
- **Contact form** with client-side JS validation + success state
- **SEO**: `<title>`, `<meta description>`, OpenGraph tags, JSON-LD Person schema
- **Accessibility**: ARIA labels, semantic HTML5, keyboard navigation, `role` attributes
- **Fully responsive**: mobile-first, tablet, desktop

---

## 📁 File Structure

```
harka-saud-portfolio/
└── index.html    ← entire site (single file, no dependencies)
```

No build step required. No npm. No bundler. Pure HTML/CSS/JS.
