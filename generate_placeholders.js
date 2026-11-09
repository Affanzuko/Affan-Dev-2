const fs = require('fs');
const path = require('path');

function createPlaceholderSvg(title, route, type, subtitle, details, badgeColor = '#38BDF8') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="100%" height="100%">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B1120" />
      <stop offset="100%" stop-color="#111C30" />
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#16233B" />
      <stop offset="100%" stop-color="#0F172A" />
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.4" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1200" height="750" fill="url(#bg)"/>

  <!-- Window Chrome -->
  <rect x="30" y="30" width="1140" height="690" rx="16" fill="#111C30" stroke="rgba(148, 163, 184, 0.18)" stroke-width="2" filter="url(#shadow)"/>
  
  <!-- Header Bar -->
  <path d="M30 46 C30 37.16 37.16 30 46 30 L1154 30 C1162.84 30 1170 37.16 1170 46 L1170 85 L30 85 Z" fill="#0B1120"/>
  <line x1="30" y1="85" x2="1170" y2="85" stroke="rgba(148, 163, 184, 0.15)" stroke-width="1.5"/>

  <!-- Window controls -->
  <circle cx="65" cy="58" r="6" fill="#EF4444"/>
  <circle cx="85" cy="58" r="6" fill="#F59E0B"/>
  <circle cx="105" cy="58" r="6" fill="#10B981"/>

  <!-- URL Bar -->
  <rect x="140" y="44" width="460" height="28" rx="6" fill="#1E293B" stroke="rgba(148, 163, 184, 0.2)" stroke-width="1"/>
  <text x="160" y="63" font-family="Inter, -apple-system, sans-serif" font-size="12" fill="#94A3B8">${route}</text>

  <!-- Top Badge -->
  <rect x="940" y="44" width="200" height="28" rx="6" fill="rgba(56, 189, 248, 0.12)" stroke="rgba(56, 189, 248, 0.3)" stroke-width="1"/>
  <text x="1040" y="62" font-family="Inter, -apple-system, sans-serif" font-size="11" font-weight="600" fill="#38BDF8" text-anchor="middle">${type.toUpperCase()}</text>

  <!-- Content Area Mockup -->
  <!-- Top Banner / Placeholder Notice -->
  <rect x="70" y="115" width="1060" height="68" rx="10" fill="rgba(56, 189, 248, 0.08)" stroke="rgba(56, 189, 248, 0.3)" stroke-dasharray="6,4" stroke-width="1.5"/>
  <circle cx="105" cy="149" r="14" fill="rgba(56, 189, 248, 0.2)"/>
  <path d="M105 142 L105 151 M105 154 L105 156" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
  <text x="135" y="144" font-family="Inter, -apple-system, sans-serif" font-size="14" font-weight="700" fill="#F1F5F9">DOCUMENTED ASSET PLACEHOLDER: ${title.toUpperCase()}</text>
  <text x="135" y="165" font-family="Inter, -apple-system, sans-serif" font-size="12" fill="#94A3B8">Spec: Pending actual screenshot extraction from repository. Ready for direct drop-in image replacement.</text>

  <!-- UI Layout Mockup -->
  <rect x="70" y="210" width="700" height="470" rx="12" fill="url(#cardGrad)" stroke="rgba(148, 163, 184, 0.12)" stroke-width="1"/>
  <rect x="795" y="210" width="335" height="470" rx="12" fill="url(#cardGrad)" stroke="rgba(148, 163, 184, 0.12)" stroke-width="1"/>

  <!-- Left Main Panel Wireframe Elements -->
  <rect x="105" y="240" width="160" height="24" rx="4" fill="rgba(56, 189, 248, 0.2)"/>
  <text x="115" y="257" font-family="Inter, -apple-system, sans-serif" font-size="12" font-weight="600" fill="#38BDF8">${subtitle}</text>

  <rect x="105" y="280" width="380" height="18" rx="4" fill="#334155"/>
  <rect x="105" y="310" width="480" height="12" rx="3" fill="#1E293B"/>
  <rect x="105" y="332" width="420" height="12" rx="3" fill="#1E293B"/>

  <!-- Mock Grid Elements inside main panel -->
  <rect x="105" y="375" width="195" height="130" rx="8" fill="#111C30" stroke="rgba(148, 163, 184, 0.15)"/>
  <rect x="320" y="375" width="195" height="130" rx="8" fill="#111C30" stroke="rgba(148, 163, 184, 0.15)"/>
  <rect x="535" y="375" width="195" height="130" rx="8" fill="#111C30" stroke="rgba(148, 163, 184, 0.15)"/>

  <!-- Mock details -->
  <rect x="120" y="395" width="90" height="10" rx="3" fill="#38BDF8" fill-opacity="0.4"/>
  <rect x="120" y="420" width="150" height="8" rx="2" fill="#334155"/>
  <rect x="120" y="438" width="110" height="8" rx="2" fill="#1E293B"/>
  <rect x="120" y="475" width="60" height="16" rx="4" fill="#38BDF8" fill-opacity="0.3"/>

  <rect x="335" y="395" width="90" height="10" rx="3" fill="#38BDF8" fill-opacity="0.4"/>
  <rect x="335" y="420" width="150" height="8" rx="2" fill="#334155"/>
  <rect x="335" y="438" width="110" height="8" rx="2" fill="#1E293B"/>
  <rect x="335" y="475" width="60" height="16" rx="4" fill="#38BDF8" fill-opacity="0.3"/>

  <rect x="550" y="395" width="90" height="10" rx="3" fill="#38BDF8" fill-opacity="0.4"/>
  <rect x="550" y="420" width="150" height="8" rx="2" fill="#334155"/>
  <rect x="550" y="438" width="110" height="8" rx="2" fill="#1E293B"/>
  <rect x="550" y="475" width="60" height="16" rx="4" fill="#38BDF8" fill-opacity="0.3"/>

  <!-- Lower mock table / list -->
  <rect x="105" y="530" width="625" height="120" rx="8" fill="#0B1120" stroke="rgba(148, 163, 184, 0.1)"/>
  <line x1="105" y1="565" x2="730" y2="565" stroke="rgba(148, 163, 184, 0.1)"/>
  <rect x="125" y="545" width="120" height="8" rx="2" fill="#64748B"/>
  <rect x="300" y="545" width="100" height="8" rx="2" fill="#64748B"/>
  <rect x="480" y="545" width="80" height="8" rx="2" fill="#64748B"/>
  <rect x="630" y="545" width="60" height="8" rx="2" fill="#64748B"/>

  <rect x="125" y="585" width="140" height="10" rx="3" fill="#F1F5F9" fill-opacity="0.8"/>
  <rect x="300" y="585" width="90" height="10" rx="3" fill="#94A3B8"/>
  <rect x="480" y="585" width="70" height="10" rx="3" fill="#38BDF8"/>
  <rect x="630" y="582" width="65" height="16" rx="4" fill="rgba(16, 185, 129, 0.2)"/>

  <rect x="125" y="618" width="130" height="10" rx="3" fill="#F1F5F9" fill-opacity="0.8"/>
  <rect x="300" y="618" width="110" height="10" rx="3" fill="#94A3B8"/>
  <rect x="480" y="618" width="60" height="10" rx="3" fill="#38BDF8"/>
  <rect x="630" y="615" width="65" height="16" rx="4" fill="rgba(16, 185, 129, 0.2)"/>

  <!-- Right Sidebar Specs Details -->
  <rect x="820" y="240" width="120" height="14" rx="3" fill="#64748B"/>
  <text x="820" y="280" font-family="Inter, -apple-system, sans-serif" font-size="16" font-weight="700" fill="#F1F5F9">${title}</text>
  <line x1="820" y1="298" x2="1100" y2="298" stroke="rgba(148, 163, 184, 0.15)"/>

  ${details.map((d, i) => `
    <text x="820" y="${330 + i * 46}" font-family="Inter, -apple-system, sans-serif" font-size="11" font-weight="600" fill="#94A3B8">${d.label.toUpperCase()}</text>
    <text x="820" y="${348 + i * 46}" font-family="Inter, -apple-system, sans-serif" font-size="13" font-weight="500" fill="#E2E8F0">${d.value}</text>
  `).join('')}

  <rect x="820" y="590" width="280" height="60" rx="8" fill="#0B1120" stroke="rgba(56, 189, 248, 0.2)"/>
  <text x="840" y="616" font-family="Inter, -apple-system, sans-serif" font-size="11" font-weight="600" fill="#38BDF8">VERIFICATION STATUS</text>
  <text x="840" y="635" font-family="Inter, -apple-system, sans-serif" font-size="11" fill="#94A3B8">PRD & Spec Documented Feature</text>
</svg>`;
}

// Generate ConcertTix placeholders
const concertTixItems = [
  {
    filename: 'landing-page.svg',
    title: 'Landing Page',
    route: 'https://concerttix.local/index.php',
    type: 'ConcertTix UI',
    subtitle: 'Hero & Discovery Banner',
    details: [
      { label: 'Documented Contribution', value: 'Landing Page development by Affan' },
      { label: 'Key Elements', value: 'Concert spotlights, quick genre tags, search' },
      { label: 'Technology', value: 'HTML, CSS, JavaScript, PHP' },
      { label: 'Status', value: 'Team project milestone verified' }
    ]
  },
  {
    filename: 'concert-listing.svg',
    title: 'Concert Search & Filters',
    route: 'https://concerttix.local/search.php',
    type: 'ConcertTix UI',
    subtitle: 'Search, Genre & Date Filtering',
    details: [
      { label: 'Feature', value: 'Keyword search, genre & date filters' },
      { label: 'Database Entity', value: 'Concert schedule & venue lookup' },
      { label: 'Technology', value: 'PHP query builder, MySQL' },
      { label: 'Status', value: 'Documented core feature' }
    ]
  },
  {
    filename: 'concert-detail.svg',
    title: 'Concert Detail & Ticket Classes',
    route: 'https://concerttix.local/detail.php?id=12',
    type: 'ConcertTix UI',
    subtitle: 'Ticket Comparison & Selection',
    details: [
      { label: 'Ticket Classes', value: 'Regular, VIP, and Platinum' },
      { label: 'Benefit Comparison', value: 'Facilities & benefit matrix per tier' },
      { label: 'Quota Handling', value: 'Remaining seat & tier quota check' },
      { label: 'Technology', value: 'PHP, MySQL database binding' }
    ]
  },
  {
    filename: 'auth-page.svg',
    title: 'Authentication & Preferences',
    route: 'https://concerttix.local/login.php',
    type: 'ConcertTix UI',
    subtitle: 'Login, Register & Genre Setup',
    details: [
      { label: 'Documented Contribution', value: 'Login & Sign Up Pages by Affan' },
      { label: 'Personalization', value: 'Music genre preference selection' },
      { label: 'Security', value: 'Session management & credential checks' },
      { label: 'Technology', value: 'PHP Session, MySQL user store' }
    ]
  },
  {
    filename: 'profile-ticket-history.svg',
    title: 'User Profile & Ticket History',
    route: 'https://concerttix.local/profile.php',
    type: 'ConcertTix UI',
    subtitle: 'Order History & Ticket Vouchers',
    details: [
      { label: 'Documented Contribution', value: 'Profile Page development by Affan' },
      { label: 'Feature', value: 'Order receipts, booked ticket classes' },
      { label: 'User Data', value: 'Account details & transaction list' },
      { label: 'Technology', value: 'HTML, CSS, PHP, MySQL' }
    ]
  },
  {
    filename: 'payment-page.svg',
    title: 'Checkout & Payment Summary',
    route: 'https://concerttix.local/payment.php',
    type: 'ConcertTix UI',
    subtitle: 'Order Checkout & Confirmation',
    details: [
      { label: 'Documented Contribution', value: 'Payment Page development by Affan' },
      { label: 'Flow', value: 'Cart verification & invoice summary' },
      { label: 'Payment Channels', value: 'Documented booking checkout flow' },
      { label: 'Technology', value: 'PHP, JavaScript form handling' }
    ]
  },
  {
    filename: 'about-us.svg',
    title: 'About Us & 404 Pages',
    route: 'https://concerttix.local/about.php',
    type: 'ConcertTix UI',
    subtitle: 'Platform Information & Error Handling',
    details: [
      { label: 'Documented Contribution', value: 'About Us Page & 404 Page by Affan' },
      { label: 'Brand Elements', value: 'Platform missions & service values' },
      { label: 'Documentation', value: 'Project manual & presentation slides' },
      { label: 'Technology', value: 'Semantic HTML5, CSS3' }
    ]
  }
];

// Generate Niki Frozen placeholders
const nikiFrozenItems = [
  {
    filename: 'cashier-dashboard.svg',
    title: 'Cashier Dashboard',
    route: 'https://nikifrozen.local/cashier/dashboard',
    type: 'Niki Frozen UI',
    subtitle: 'Cashier Operations & Session Active',
    details: [
      { label: 'Documented Contribution', value: 'Cashier Dashboard developed by Affan' },
      { label: 'Shift Tracking', value: 'Cashier session opening & closing' },
      { label: 'Access Control', value: 'Role-based Cashier view' },
      { label: 'Technology', value: 'Laravel, Blade, MySQL' }
    ]
  },
  {
    filename: 'gm-dashboard.svg',
    title: 'General Manager Dashboard',
    route: 'https://nikifrozen.local/gm/dashboard',
    type: 'Niki Frozen UI',
    subtitle: 'Multi-Branch Overview & KPIs',
    details: [
      { label: 'Documented Contribution', value: 'GM Dashboard developed by Affan' },
      { label: 'Branch Coverage', value: '2 Branches & ~15 team members' },
      { label: 'Key Metrics', value: 'Aggregated revenue, active shifts' },
      { label: 'Technology', value: 'Laravel, Eloquent, MySQL' }
    ]
  },
  {
    filename: 'pos-transaction.svg',
    title: 'Point of Sale (POS) & Cart',
    route: 'https://nikifrozen.local/pos',
    type: 'Niki Frozen UI',
    subtitle: 'Sales Flow & Instant Stock Deduct',
    details: [
      { label: 'Workflow', value: 'Product scan, cart calculation, discount' },
      { label: 'Stock Sync', value: 'Auto deduction upon sale confirmation' },
      { label: 'Branch Pricing', value: 'Branch-specific price resolution' },
      { label: 'Technology', value: 'Laravel, JavaScript, MySQL' }
    ]
  },
  {
    filename: 'qris-payment.svg',
    title: 'Payment Workflow & QRIS Display',
    route: 'https://nikifrozen.local/pos/payment',
    type: 'Niki Frozen UI',
    subtitle: 'Cash & QRIS Payment Options',
    details: [
      { label: 'Documented Contribution', value: 'Payment & scanner workflow by Affan' },
      { label: 'Payment Options', value: 'Cash & QRIS code display' },
      { label: 'Discrepancy Fix', value: 'Eliminates recorded IDR 6k-20k variances' },
      { label: 'Technology', value: 'Laravel Controller, Blade views' }
    ]
  },
  {
    filename: 'barcode-intake.svg',
    title: 'Barcode-Based Stock Intake',
    route: 'https://nikifrozen.local/inventory/intake',
    type: 'Niki Frozen UI',
    subtitle: 'Scanner Integration & Inflow Logging',
    details: [
      { label: 'Documented Contribution', value: 'Scanner-related workflow by Affan' },
      { label: 'Operation', value: 'Incoming stock barcode scan' },
      { label: 'Accuracy', value: 'Instant inventory ledger addition' },
      { label: 'Technology', value: 'Hardware barcode scanner support' }
    ]
  },
  {
    filename: 'batch-expiry.svg',
    title: 'Product Batch & Expiry Settings',
    route: 'https://nikifrozen.local/products/batches',
    type: 'Niki Frozen UI',
    subtitle: 'Expiry Monitoring & Alert (< 7 Days)',
    details: [
      { label: 'Documented Contribution', value: 'Batch & expiry settings by Affan' },
      { label: 'Alert Trigger', value: 'Products expiring in less than 7 days' },
      { label: 'Target Roles', value: 'Notifications for Owner & Admin' },
      { label: 'Technology', value: 'Laravel cron/event logic, MySQL' }
    ]
  },
  {
    filename: 'financial-report.svg',
    title: 'Financial Reports by Branch',
    route: 'https://nikifrozen.local/reports/finance',
    type: 'Niki Frozen UI',
    subtitle: 'Multi-Branch & Shift Filtering',
    details: [
      { label: 'Breakdowns', value: 'Daily, weekly, monthly periods' },
      { label: 'Granularity', value: 'Filterable by branch and cashier shift' },
      { label: 'Reconciliation', value: 'Integrated sales vs. cash drawer' },
      { label: 'Technology', value: 'Laravel query aggregation, MySQL' }
    ]
  },
  {
    filename: 'stock-report.svg',
    title: 'Stock Movement & Inventory Report',
    route: 'https://nikifrozen.local/reports/stock',
    type: 'Niki Frozen UI',
    subtitle: 'Batch Logs & Inventory Valuation',
    details: [
      { label: 'Tracking', value: 'Real-time stock level across 2 branches' },
      { label: 'Movement Ledger', value: 'Inflow (intake) vs outflow (sales)' },
      { label: 'Quality Control', value: 'Expiry status flags per lot' },
      { label: 'Technology', value: 'Laravel query builder' }
    ]
  },
  {
    filename: 'expense-menu.svg',
    title: 'Operational Expense Menu',
    route: 'https://nikifrozen.local/expenses',
    type: 'Niki Frozen UI',
    subtitle: 'Branch Operational Cost Logging',
    details: [
      { label: 'Documented Contribution', value: 'Expense menu development by Affan' },
      { label: 'Data Model', value: 'Branch-tagged operational expenditures' },
      { label: 'Financial Impact', value: 'Net profit calculation input' },
      { label: 'Technology', value: 'Laravel CRUD, Form Request validation' }
    ]
  }
];

// Write ConcertTix SVGs
const concertTixDir = path.join(__dirname, 'assets', 'images', 'concerttix');
for (const item of concertTixItems) {
  const svg = createPlaceholderSvg(item.title, item.route, item.type, item.subtitle, item.details);
  fs.writeFileSync(path.join(concertTixDir, item.filename), svg, 'utf-8');
}
console.log(`Generated ${concertTixItems.length} ConcertTix SVG placeholders.`);

// Write Niki Frozen SVGs
const nikiFrozenDir = path.join(__dirname, 'assets', 'images', 'niki-frozen');
for (const item of nikiFrozenItems) {
  const svg = createPlaceholderSvg(item.title, item.route, item.type, item.subtitle, item.details);
  fs.writeFileSync(path.join(nikiFrozenDir, item.filename), svg, 'utf-8');
}
console.log(`Generated ${nikiFrozenItems.length} Niki Frozen SVG placeholders.`);
