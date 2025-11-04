# 🎯 Knit by Machine - Workspace Guide

## ✅ Everything is Now in One Place!

You can edit BOTH the admin dashboard AND the Astro website from this single Replit workspace.

---

## 📂 File Organization

### Admin Dashboard (React App)
These files manage your content through a web interface:

```
client/src/pages/
  ├── ana-form.tsx          ← Create/edit ANA entries
  ├── ana-list.tsx          ← View all ANA entries
  ├── blog-form.tsx         ← Create/edit blog posts
  ├── workshop-form.tsx     ← Create/edit workshops
  └── categories.tsx        ← Manage categories
```

### Astro Website (Public Site)
These files are what visitors see on knitbymachine.com:

```
src/
  ├── pages/
  │   ├── ana-catalog.astro       ← ANA catalog page (/ana-catalog)
  │   └── ana/
  │       └── [slug].astro        ← Individual ANA pages (/ana/dropped)
  │
  ├── layouts/
  │   ├── BaseLayout.astro        ← Main layout with header/footer
  │   └── layout.astro            ← Simple wrapper layout
  │
  ├── components/
  │   ├── header.astro            ← Site header (logo, nav)
  │   └── footer.astro            ← Site footer
  │
  └── styles/
      └── global.css              ← Global styles
```

---

## 🚀 How to Make Changes

### Option 1: Edit Content (Use Admin Dashboard)
1. Access admin at the Replit URL (e.g., https://your-replit.replit.dev/ana)
2. Create/edit ANA entries, blog posts, workshops
3. Changes save directly to GitHub
4. Netlify auto-deploys to knitbymachine.com

### Option 2: Edit Pages/Layouts (Edit Astro Files)
1. Open files in Replit editor:
   - Header: `src/components/header.astro`
   - Footer: `src/components/footer.astro`  
   - ANA Catalog: `src/pages/ana-catalog.astro`
   - Individual ANA: `src/pages/ana/[slug].astro`
2. Make your changes and save
3. Replit auto-commits to GitHub
4. Netlify auto-deploys

---

## 🔄 Deployment Flow

```
Edit in Replit → Save → Auto-commit to GitHub → Netlify builds → Live on knitbymachine.com
```

**Timeline:** Changes appear on knitbymachine.com within 2-3 minutes after saving.

---

## 💡 Common Tasks

### Add a New Page
1. Create new `.astro` file in `src/pages/`
2. Example: `src/pages/about.astro`
3. Access at: `https://knitbymachine.com/about`

### Edit Header Navigation
1. Open `src/components/header.astro`
2. Find the `<nav>` section
3. Add/edit menu items
4. Save → GitHub → Netlify → Live!

### Change Footer Links
1. Open `src/components/footer.astro`
2. Edit the footer columns
3. Save → GitHub → Netlify → Live!

### Update ANA Catalog Layout
1. Open `src/pages/ana-catalog.astro`
2. Edit the layout/styles
3. Save → GitHub → Netlify → Live!

---

## ⚠️ Important Notes

- **No more copying files!** Everything is in Replit now
- **No Desktop folder needed!** All edits happen here
- **Auto-saves to GitHub** when you edit files
- **Header & Footer** are shared across all pages via BaseLayout.astro

---

## 🆘 Need Help?

Just ask! Common questions:
- "How do I add a new page?"
- "How do I change the header?"
- "How do I edit the ANA catalog design?"

Everything can be done right here in this workspace!
