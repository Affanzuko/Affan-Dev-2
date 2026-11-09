# AFFAN.DEV — Personal Branding & Portfolio Website

> **Owner:** Muhammad Affan Al Ghifari  
> **Brand:** AFFAN.DEV  
> **Headline:** Web Developer & System Developer  
> **Visual Direction:** Dark Modern (`#0B1120`, `#111C30`, `#38BDF8`)  
> **Deployment Target:** Vercel (Static HTML, CSS & Vanilla JS)

---

## 🌟 Overview

**AFFAN.DEV** is a personal branding and developer portfolio website for **Muhammad Affan Al Ghifari**, an Informatics student at **Universitas AMIKOM Yogyakarta** with a strong focus on **Web Development** and **Information Systems**.

The website presents a credible, modern, and evidence-driven profile for recruiters, academic reviewers, collaborators, and clients. It features in-depth case studies for two primary projects:
1. **ConcertTix** — Web-based concert ticket discovery and booking platform.
2. **Niki Frozen** — Point-of-Sale (POS) and inventory management information system for a multi-branch frozen food enterprise.

---

## 🎨 Visual Identity & Design System

The website follows the **Dark Modern** visual specifications:

| Token | Hex / Value | Purpose |
|---|---|---|
| `--color-bg` | `#0B1120` | Main application background |
| `--color-surface` | `#111C30` | Cards, panels, navigation bar |
| `--color-surface-hover` | `#162440` | Interactive card hover states |
| `--color-accent` | `#38BDF8` | Cyan accent, primary actions, highlights |
| `--color-text` | `#F1F5F9` | High-contrast main headings and body copy |
| `--color-muted` | `#94A3B8` | Supporting labels, descriptions, and metadata |
| `--color-border` | `rgba(148, 163, 184, 0.18)` | Clean, restrained border lines |

---

## 📂 Project Architecture

The project is built entirely in **Static HTML5, CSS3, and modern Vanilla JavaScript**, ensuring instantaneous loading, high SEO rankings, accessibility, and zero-configuration deployment to **Vercel** without any PHP backend dependency.

```text
affandev3/
├── index.html                           # Main portfolio landing page (Hero, About, Skills, Projects, Contact)
├── projects/
│   ├── concerttix.html                  # ConcertTix Case Study page
│   ├── concerttix/
│   │   └── index.html                   # Sub-route compatibility for /projects/concerttix/
│   ├── niki-frozen.html                 # Niki Frozen Case Study page
│   └── niki-frozen/
│       └── index.html                   # Sub-route compatibility for /projects/niki-frozen/
├── assets/
│   ├── css/
│   │   └── style.css                    # Design system, responsive layouts & typography
│   ├── js/
│   │   └── main.js                      # Navigation toggle, active spy, lightbox, copy email
│   ├── favicon.svg                      # Custom AFFAN.DEV SVG icon
│   └── images/
│       ├── profile/
│       │   └── foto-affan.png           # Profile photo (Foto Affan.png)
│       ├── concerttix/                  # 7 documented high-fidelity SVG wireframes/placeholders
│       │   ├── landing-page.svg
│       │   ├── concert-listing.svg
│       │   ├── concert-detail.svg
│       │   ├── auth-page.svg
│       │   ├── profile-ticket-history.svg
│       │   ├── payment-page.svg
│       │   └── about-us.svg
│       └── niki-frozen/                 # 9 documented high-fidelity SVG wireframes/placeholders
│           ├── cashier-dashboard.svg
│           ├── gm-dashboard.svg
│           ├── pos-transaction.svg
│           ├── qris-payment.svg
│           ├── barcode-intake.svg
│           ├── batch-expiry.svg
│           ├── financial-report.svg
│           ├── stock-report.svg
│           └── expense-menu.svg
├── Foto Affan.png                       # Source profile picture
├── vercel.json                          # Vercel routing, clean URLs & security headers
├── serve.js                             # Zero-dependency local development server
├── package.json                         # npm start scripts
└── README.md                            # Complete documentation & deployment guide
```

---

## 🚀 Local Development & Running the Website

You can run the website locally using any of the following methods:

### Method 1: Built-in Node.js Server (Recommended)
This requires only Node.js (no `npm install` needed):
```bash
npm start
# or
node serve.js
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

### Method 2: Python HTTP Server
```bash
python -m http.server 3000
```

### Method 3: Direct Browser File Opening
You can directly open `index.html` in Chrome, Firefox, or Edge. All internal links between `index.html`, `projects/concerttix.html`, and `projects/niki-frozen.html` use relative paths and function properly without a web server.

---

## ☁️ Deployment to Vercel

The site is pre-configured for **Vercel** with `vercel.json` providing `cleanUrls: true`:

### Option A: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option B: Via GitHub Repository
1. Push this project to your GitHub repository (e.g. `https://github.com/Affanzuko/affan-dev`).
2. Log into [Vercel](https://vercel.com).
3. Click **Add New Project** and select the repository.
4. Leave build settings at default (`Framework Preset: Other`, Output directory: root `./`).
5. Click **Deploy**. Vercel will deploy the site with SSL and clean URLs.

---

## 💼 Featured Case Studies

### 1. ConcertTix
- **Domain:** Web Application / Event & Concert Ticketing
- **Type:** Academic Team Project
- **Tech Stack:** HTML5, CSS3, JavaScript, PHP, MySQL
- **GitHub:** [https://github.com/Affanzuko/ConcertTix](https://github.com/Affanzuko/ConcertTix)
- **Affan's Individual Contributions:**
  - Landing Page & navigation flow
  - Login & Sign Up Pages with music genre preferences
  - 404 Error handling Page
  - About Us Page
  - Profile & Ticket History Page
  - Payment & Checkout summary flow
  - Comprehensive Project Documentation

### 2. Niki Frozen
- **Domain:** Management Information System & Point-of-Sale (POS)
- **Scale:** Multi-branch frozen food retail (2 branches, ~15 team members)
- **Tech Stack:** Laravel, PHP, MySQL, Hardware Barcode Scanner Integration
- **GitHub:** [https://github.com/Affanzuko/Niki-Frozen](https://github.com/Affanzuko/Niki-Frozen)
- **Testing Results:** 64 documented test cases passed (45 positive, 19 negative, 100% scenario pass rate in project report).
- **Affan's Individual Contributions:**
  - Cashier Dashboard development & session active status
  - General Manager Dashboard development (multi-branch KPIs)
  - Payment (Cash & QRIS display) & scanner workflow
  - Product batch & expiry date settings (< 7 days warning threshold)
  - Operational Expense Menu
  - UI/UX Design contributions

---

## 📋 Asset Checklist & Placeholders

- [x] **Profile Photo:** Verified with `Foto Affan.png` and linked as `assets/images/profile/foto-affan.png`.
- [x] **Email Address:** Verified with `affanzuko18@gmail.com` with instant copy-to-clipboard functionality and `mailto:` action.
- [x] **Social Links:** LinkedIn (`https://www.linkedin.com/in/muhammad-affan-al-ghifari-aa963b259/`) and GitHub (`https://github.com/Affanzuko`).
- [x] **ConcertTix Screenshots:** Terkonfigurasi penuh menggunakan aset dari folder `gambar concerttix/` (`thumbnail.svg`, `01-landing-page.svg`, `02-search-listing.svg`, `03-concert-detail.svg`, `04-auth.svg`, `05-profile-history.svg`, `06-payment.svg`, `07-about.svg`).
- [x] **Niki Frozen Screenshots:** Terkonfigurasi penuh menggunakan aset dari folder `gambar niki frozen/` (`thumbnail.svg`, `01-cashier-dashboard.svg`, `02-gm-dashboard.svg`, `03-pos-cart.svg`, `04-payment-qris.svg`, `05-barcode-stock.svg`, `06-batch-expiry.svg`, `07-financial-report.svg`, `08-stock-report.svg`, `09-expense-menu.svg`).

---

## ✅ Quality & Acceptance Verification

- [x] Professional Dark Modern palette implemented (`#0B1120`, `#111C30`, `#38BDF8`).
- [x] No arbitrary percentage ratings for skills (grouped by capability).
- [x] Clear distinction between team/collaborative scope and individual contributions.
- [x] Accessible navigation, focus rings, and `prefers-reduced-motion` compliance.
- [x] Interactive screenshot gallery with Lightbox modal.
- [x] Fully responsive layout on mobile, tablet, and desktop viewports.
- [x] Zero broken links or missing assets verified via automated integrity tests.
