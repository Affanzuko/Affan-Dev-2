# AFFAN.DEV — Website Build Specification

> **Purpose:** This file is the implementation-oriented companion to `AFFAN_DEV_PRD.docx`. Use both files as the source of truth when building the website.
>
> **Brand:** AFFAN.DEV  
> **Owner:** Muhammad Affan Al Ghifari  
> **Primary language:** English  
> **Visual direction:** Dark Modern, restrained, professional  
> **Site structure:** Single-page personal brand website + dedicated project case-study pages  
> **Motion:** Subtle and purposeful

---

## 1. Instructions for the AI Coding Agent

Build a complete, polished, responsive personal branding and developer portfolio website for **Muhammad Affan Al Ghifari**, branded as **AFFAN.DEV**.

Read the accompanying PRD before implementation. Treat the facts and contribution summaries in the PRD as constraints. Do not invent the owner's employment history, certifications, awards, skill proficiency percentages, client testimonials, project metrics, live deployments, or personal details.

### Non-negotiable requirements

1. The website must feel like a professional personal brand, not a generic template or a project-only gallery.
2. Use a dark navy visual system with cyan accents.
3. The main portfolio must be a single-page experience with anchor navigation.
4. Create two separate project detail pages:
   - `/projects/concerttix`
   - `/projects/niki-frozen`
5. Use real project screenshots when supplied. Until then, create clearly named image placeholders and document exactly which screenshots are needed. Do not present stock or AI-generated images as actual application screenshots.
6. Clearly distinguish team projects from the owner's individual contributions.
7. Make all buttons and links functional. Do not leave decorative controls that look interactive.
8. The website must be responsive, accessible, and easy to maintain.
9. Do not add a backend or database for the first release.
10. Provide setup and deployment instructions in the repository README.

If the repository already contains a framework or starter project, inspect it and work with the existing structure unless there is a strong technical reason not to. Do not overwrite existing work without understanding it.

---

## 2. Brand and Design System

### Brand identity

- Brand wordmark: `AFFAN.DEV`
- Owner: `Muhammad Affan Al Ghifari`
- Main headline: `Web Developer & System Developer`
- Brand statement: `Turning Ideas Into Digital Solutions.`
- Supporting message: `I build websites and digital systems that transform ideas into functional digital solutions.`

### Color tokens

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#0B1120` | Main background |
| `--color-surface` | `#111C30` | Cards and panels |
| `--color-accent` | `#38BDF8` | Accent, links, primary actions |
| `--color-text` | `#F1F5F9` | Main text |
| `--color-muted` | `#94A3B8` | Supporting text |
| `--color-border` | `rgba(148, 163, 184, 0.18)` | Subtle borders |

### Typography

- Prefer Inter, Geist, or a similar modern sans-serif.
- Use a clear hierarchy: large hero heading, compact section labels, readable body text.
- Avoid overly small body text and excessive all-caps content.

### Visual language

- Minimal, confident, clean, technology-oriented.
- Use generous whitespace and consistent spacing.
- Cards should have restrained borders and subtle surface contrast.
- Use cyan for selected words, links, icons, and CTA emphasis.
- Gradients may be used sparingly in the hero background or small decorative accents.
- Avoid excessive neon glow, glassmorphism everywhere, large animated blobs, and visual clutter.
- Use a consistent icon library if icons are needed.
- Use subtle transitions for hover, focus, and reveal. Respect `prefers-reduced-motion`.

---

## 3. Site Map and Routes

### Main portfolio route: `/`

Sections in this order:

1. Navbar
2. Home / Hero
3. About
4. Skills
5. Featured Projects
6. Contact
7. Footer

### Project detail routes

- `/projects/concerttix`
- `/projects/niki-frozen`

Each detail route must include a breadcrumb or back link to Projects, a project hero, project overview, problem/context, solution, features, owner's role, technology stack, screenshot gallery, and repository CTA.

---

## 4. Global Components

Build reusable components. Suggested component list:

- `Navbar`
- `MobileNavigation`
- `SectionHeading`
- `PrimaryButton`
- `SecondaryButton`
- `SocialLinks`
- `TechnologyBadge`
- `ProjectCard`
- `ProjectMeta`
- `ProjectGallery`
- `CaseStudySection`
- `ContactCTA`
- `Footer`

Use a shared data structure for project information so cards and detail pages do not duplicate content.

### Navbar

- Wordmark: `AFFAN.DEV`
- Anchor links: `Home`, `About`, `Skills`, `Projects`, `Contact`
- Primary CTA: `Let's Talk`
- Desktop: horizontal navigation.
- Mobile: accessible menu button and collapsible navigation.
- Navbar may be sticky, but must not obscure anchor targets. Apply scroll offset.

### Footer

- Wordmark and short brand line.
- Links to GitHub and LinkedIn.
- Copyright line with current year generated dynamically.
- Do not show icons without accessible labels.

---

## 5. Main Page Content and Layout

### 5.1 Hero / Home

**Eyebrow:** `HELLO, I'M`

**Name:** `Muhammad Affan Al Ghifari`

**Role:** `Web Developer & System Developer`

**Headline:** `Turning Ideas Into Digital Solutions.`

**Description:**

> I build websites and digital systems that transform ideas into functional digital solutions. I enjoy exploring how technology can solve real-world problems through thoughtful design and development.

**Primary CTA:** `Explore My Projects` → scroll to Projects.

**Secondary CTA:** `Get In Touch` → scroll to Contact.

**Optional visual treatment:**
- Abstract code/editor-inspired panel, subtle grid, or typographic composition.
- Do not invent a personal portrait. If no owner-supplied photo exists, use a monogram `AA` or a restrained abstract visual.
- The hero should remain readable and visually balanced on mobile.

### 5.2 About

**Section label:** `ABOUT ME`

**Heading:** `A little about me.`

**Copy:**

> I'm an Informatics student at Universitas AMIKOM Yogyakarta with a strong interest in Web Development and Information Systems.
>
> I enjoy developing websites and web-based applications that solve real-world problems. My focus is on creating functional, user-friendly, and efficient digital solutions tailored to different business and organizational needs.
>
> Through academic and collaborative projects, I continuously explore new technologies, improve my technical skills, and gain practical experience in software development.
>
> I believe that technology is not just about writing code, but about creating solutions that bring value to people and businesses.

**Profile facts to show:**

- Education: Informatics — Universitas AMIKOM Yogyakarta
- Focus: Web Development & Information Systems
- Base: Indonesia (only if a location label is desired)

Do not infer graduation date, GPA, employment, or additional education details.

### 5.3 Skills

**Section label:** `TECHNICAL SKILLS`

**Heading:** `Tools I work with.`

Display skills as grouped technology badges, not arbitrary progress bars.

Suggested groups:

**Frontend**
- HTML
- CSS
- JavaScript

**Backend**
- PHP
- Laravel

**Database**
- MySQL

**Tools**
- Git
- GitHub
- Visual Studio Code

**Additional areas**
- UI/UX
- Database Design
- Web Application Development

Only show a skill if it is supported by the owner's project experience or confirmed by the owner. Do not assign percentages or proficiency levels.

### 5.4 Featured Projects

**Section label:** `SELECTED WORK`

**Heading:** `Projects I've worked on.`

**Intro:**

> A selection of academic and collaborative projects where I explored how web technologies can be used to build practical digital solutions.

Create two prominent cards. Each card must include:
- Actual project screenshot or an explicit placeholder.
- Project title.
- Short description.
- Project type.
- Technology tags.
- `View Case Study` link.
- `GitHub Repository` external link.

#### Project card: ConcertTix

- Title: `ConcertTix`
- Type: `Concert Ticket Booking Platform`
- Description: `A web-based concert ticket platform that helps users discover events, compare ticket categories, and manage ticket purchases.`
- Tags: `HTML`, `CSS`, `JavaScript`, `PHP`, `MySQL`
- Case study: `/projects/concerttix`
- Repository: `https://github.com/Affanzuko/ConcertTix`

#### Project card: Niki Frozen

- Title: `Niki Frozen`
- Type: `POS & Inventory Management System`
- Description: `An integrated web-based system for managing retail transactions, inventory, financial records, and multi-branch operations for a frozen-food business.`
- Tags: `Laravel`, `PHP`, `MySQL`
- Case study: `/projects/niki-frozen`
- Repository: `https://github.com/Affanzuko/Niki-Frozen`

Do not display project years unless verified from the project records.

### 5.5 Contact

**Section label:** `GET IN TOUCH`

**Heading:** `Let's build something meaningful.`

**Copy:**

> Have an idea or project in mind? I'm open to connecting, collaborating, and exploring opportunities to build useful digital solutions.

Show:
- GitHub: `https://github.com/Affanzuko`
- LinkedIn: `https://www.linkedin.com/in/muhammad-affan-al-ghifari-aa963b259/`
- Email: use a configurable placeholder until the owner supplies a verified professional email. Do not invent an address.

Do not create a non-functional contact form. If a form is implemented, it must have a real delivery mechanism and validation; otherwise use direct email/social links.

---

## 6. Project Case Study: ConcertTix

### Hero

**Category:** `WEB APPLICATION`

**Title:** `ConcertTix`

**Subtitle:** `Concert Ticket Booking Platform`

**Summary:**

> ConcertTix is a web-based concert ticket discovery and booking platform. It was designed to make it easier for users to explore concerts, understand ticket benefits, and manage ticket purchases through one interface.

Show metadata:
- Project type: Academic team project
- Domain: Event / Ticketing
- Repository: `https://github.com/Affanzuko/ConcertTix`

### Problem / Context

The project report identifies several user problems:
- Physical queues during ticket purchases.
- Difficulty understanding differences between ticket facilities.
- Users need clearer information about ticket benefits.
- Ticket quota management by class needs to be handled.

### Solution

> The team developed a concert ticket platform with concert discovery, search and filtering, detailed event information, and three ticket categories: Regular, VIP, and Platinum.

### Key Features

1. **Concert Discovery** — Browse concert listings and discover events.
2. **Search & Filters** — Search by keyword and filter by genre, date, and location.
3. **Ticket Categories** — Compare Regular, VIP, and Platinum ticket benefits.
4. **Authentication** — User registration, login, and genre preferences.
5. **Booking Flow** — Concert detail, cart, checkout/payment, and purchase confirmation.
6. **Ticket History** — View previously purchased tickets in the user profile.
7. **Admin Management** — Manage concert information and ticket classes.

Describe only the flows that are present in the source code. Do not imply that every payment method is connected to a real payment gateway unless verified.

### My Role & Contributions

Clearly state that ConcertTix was a team project.

Use the documented post-midterm task allocation as the primary summary of the owner's contribution:

- Landing Page
- Login Page
- Sign Up Page
- 404 Page
- About Us Page
- Profile Page
- Payment Page
- Project documentation

An earlier task allocation also mentions connecting buttons/pages and search references/suggestions. This can be included as supporting contribution context if useful, but avoid presenting the owner as the sole developer of the full platform.

### Technology Stack

- HTML
- CSS
- JavaScript
- PHP
- MySQL

Verify exact versions from the repository before adding version numbers.

### Gallery

Create a responsive gallery with captions. Required screenshots to request or capture:

1. Landing page
2. Concert listing / search page
3. Concert detail page
4. Login or sign-up page
5. Profile / ticket history page
6. Payment page
7. About page

Use actual application screenshots, crop consistently, and ensure there is no private user data in the images.

### CTA

- `View GitHub Repository` → `https://github.com/Affanzuko/ConcertTix`
- `Back to Projects` → `/#projects`

---

## 7. Project Case Study: Niki Frozen

### Hero

**Category:** `INFORMATION SYSTEM`

**Title:** `Niki Frozen`

**Subtitle:** `POS & Inventory Management System`

**Summary:**

> Niki Frozen is a web-based point-of-sale and management information system developed to integrate retail transactions, inventory management, financial records, and branch-level operations for a frozen-food business.

Show metadata:
- Project type: Collaborative business/system project
- Domain: Retail / Frozen Food
- Repository: `https://github.com/Affanzuko/Niki-Frozen`

### Problem / Context

According to the project report:
- The business operates two branches and has approximately 15 employees.
- Cashier and financial-record workflows previously relied on separate applications.
- The report describes random transaction-recording discrepancies of approximately IDR 6,000–20,000.
- Stock movement was difficult to monitor.
- There was no adequate expiry-warning workflow.

Present these as context documented in the project report, not as independently audited business claims.

### Solution

> The team developed an integrated web-based system that brings cashier operations, inventory, financial records, product promotions, and multi-branch reporting into one platform.

### Key Features

1. **Role-Based Access** — Owner, General Manager, Admin, and Cashier roles.
2. **POS Transactions** — Sales flow with Cash and QRIS payment options.
3. **Cashier Sessions** — Record cashier identity and shift/session.
4. **Barcode Stock Intake** — Scan product barcodes when recording incoming stock.
5. **Expiry Monitoring** — Notify Owner/Admin about products approaching expiry within the documented threshold of fewer than seven days.
6. **Inventory Updates** — Update outgoing stock automatically after successful sales.
7. **Financial & Stock Reports** — Filter by branch, shift, and daily/weekly/monthly periods.
8. **Branch Management** — Separate operational data and permissions by branch.
9. **Pricing & Promotions** — Branch-specific prices and product promotions.

### My Role & Contributions

Clearly state that this was a collaborative project. The owner's documented responsibilities include:

- Cashier dashboard development.
- General Manager dashboard development.
- Payment/scanner-related workflow development.
- Product batch and expiry-date settings.
- Expense menu development.
- UI/UX contribution.

Use concise contribution cards or a focused list. Do not imply sole authorship of the whole application.

### Technology Stack

Confirmed in project documentation:
- Laravel
- MySQL

Potential additional technologies should be verified from the repository before being displayed. The project report contains inconsistent Laravel version references; display `Laravel` without a version until checked in `composer.json`.

Do not claim live QRIS payment-gateway integration unless the implementation confirms it. The documented workflow includes QRIS as a payment option and QR-code display.

### Testing Evidence

The project report records:
- 64 total test cases
- 45 positive test cases
- 19 negative test cases
- 64 marked Pass
- 0 marked Fail
- 100% pass rate for the documented test scenarios

If this is shown visually, label it `Documented Test Results` and clarify that it reflects the report's test scenarios, not a guarantee that no defects exist.

### Gallery

Request or capture genuine screenshots of:

1. Cashier dashboard
2. General Manager dashboard
3. POS transaction / cart
4. Payment / QRIS screen (mask any sensitive data)
5. Barcode stock intake
6. Product batch and expiry management
7. Financial report
8. Stock report
9. Expense menu

### CTA

- `View GitHub Repository` → `https://github.com/Affanzuko/Niki-Frozen`
- `Back to Projects` → `/#projects`

---

## 8. Interaction and Motion

- Smooth scrolling for anchor navigation.
- Mobile menu opens/closes with keyboard and screen-reader support.
- Project cards have subtle hover and focus states.
- Buttons have hover, active, and visible focus states.
- Gallery images can open in a simple accessible lightbox if implemented properly.
- Scroll reveal should be subtle and must not hide content when JavaScript is unavailable.
- Respect `prefers-reduced-motion`.
- External links should be clearly identifiable and use `rel="noopener noreferrer"` when opening a new tab.

Do not add custom cursors, excessive parallax, autoplay video, or distracting background animations.

---

## 9. Responsive Behavior

### Desktop
- Full horizontal navigation.
- Spacious hero with balanced text and visual composition.
- Two-column project cards where appropriate.
- Case-study content with readable maximum width.

### Tablet
- Navigation may remain horizontal if space allows.
- Reduce spacing and card gaps.
- Maintain readable typography and gallery proportions.

### Mobile
- Collapsible navigation.
- Single-column content and project cards.
- Full-width or comfortably sized CTA buttons.
- No horizontal overflow.
- Keep text blocks concise and line lengths readable.
- Ensure touch targets are comfortably sized.

---

## 10. SEO, Accessibility, and Quality

- Set a meaningful page title and meta description for each route.
- Add Open Graph title, description, and image metadata.
- Use semantic `header`, `nav`, `main`, `section`, and `footer` elements.
- Maintain a logical heading order.
- Add descriptive alt text to meaningful screenshots.
- Use empty alt text for purely decorative images.
- Ensure sufficient text/background contrast.
- Ensure all functionality is keyboard accessible.
- Add a favicon using the AFFAN.DEV wordmark or a simple `A`/`AA` monogram.
- Optimize images and use modern formats such as WebP/AVIF where supported.
- Lazy-load non-critical images.
- Avoid unnecessary third-party scripts.

---

## 11. Suggested Project Structure

Adapt to the actual framework selected in the repository. Example structure:

```text
affan-dev/
├── public/
│   ├── images/
│   │   ├── profile/
│   │   ├── concerttix/
│   │   └── niki-frozen/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar
│   │   ├── Footer
│   │   ├── ProjectCard
│   │   ├── TechnologyBadge
│   │   └── SectionHeading
│   ├── data/
│   │   ├── profile
│   │   └── projects
│   ├── pages/
│   │   ├── Home
│   │   └── projects/
│   │       ├── ConcertTix
│   │       └── NikiFrozen
│   ├── styles/
│   └── App
├── README.md
└── package.json
```

The exact filenames/extensions depend on the chosen framework. Keep content separate from presentation where practical.

---

## 12. Required Deliverables from the Coding Agent

1. Complete working source code.
2. Responsive main portfolio page.
3. ConcertTix case-study page.
4. Niki Frozen case-study page.
5. Reusable components and maintainable content structure.
6. SEO metadata and favicon.
7. README with installation, local development, build, and deployment instructions.
8. A list of missing assets/content that the owner must provide.
9. A short test checklist and the results of running the build.
10. No fake screenshots, invented profile facts, dead buttons, or fabricated claims.

---

## 13. Owner-Supplied Items Still Needed

Keep these as clearly documented placeholders until supplied:

- Professional email address.
- Profile photograph (optional).
- Actual ConcertTix screenshots and logo.
- Actual Niki Frozen screenshots and logo.
- Final custom domain (optional).
- Confirmation that business/project screenshots are approved for public display.

The supplied LinkedIn URL is:

`https://www.linkedin.com/in/muhammad-affan-al-ghifari-aa963b259/`

The supplied GitHub profile is:

`https://github.com/Affanzuko`

The project repositories are:

- `https://github.com/Affanzuko/ConcertTix`
- `https://github.com/Affanzuko/Niki-Frozen`

---

## 14. Final Build Checklist

Before considering the site complete, verify:

- [ ] Brand name and owner name are correct.
- [ ] Hero communicates the owner's focus clearly.
- [ ] About and education content is accurate.
- [ ] Skills are based on documented or owner-confirmed experience.
- [ ] ConcertTix and Niki Frozen are both featured.
- [ ] Each project has a dedicated case-study route.
- [ ] Team project status and individual contributions are clearly distinguished.
- [ ] All GitHub and LinkedIn URLs work.
- [ ] Contact method is real and verified.
- [ ] Actual project screenshots are used, or placeholders are clearly marked.
- [ ] Mobile navigation works.
- [ ] No horizontal overflow at mobile widths.
- [ ] Keyboard focus and reduced-motion behavior are supported.
- [ ] No secrets or sensitive business/customer data are exposed.
- [ ] Production build succeeds.
- [ ] README setup and deployment instructions are complete.

**End of specification.**
