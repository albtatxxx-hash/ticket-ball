---
name: Egyptian Premier League Matchday Tickets
colors:
  surface: '#0d131f'
  surface-dim: '#0d131f'
  surface-bright: '#333946'
  surface-container-lowest: '#080e1a'
  surface-container-low: '#161c28'
  surface-container: '#1a202c'
  surface-container-high: '#242a37'
  surface-container-highest: '#2f3542'
  on-surface: '#dde2f3'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#dde2f3'
  inverse-on-surface: '#2a303d'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#ffb95f'
  on-secondary: '#472a00'
  secondary-container: '#ee9800'
  on-secondary-container: '#5b3800'
  tertiary: '#4cd7f6'
  on-tertiary: '#003640'
  tertiary-container: '#00b2d0'
  on-tertiary-container: '#003f4b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#0d131f'
  on-background: '#dde2f3'
  surface-variant: '#2f3542'
typography:
  display-hero:
    fontFamily: Chivo
    fontSize: 48px
    fontWeight: '900'
    lineHeight: 56px
  display-hero-mobile:
    fontFamily: Chivo
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
  headline-lg:
    fontFamily: Chivo
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Chivo
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Chivo
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-sm:
    fontFamily: Chivo
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  title-md:
    fontFamily: Rubik
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Rubik
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Rubik
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Rubik
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Chivo
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
  label-md:
    fontFamily: Chivo
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Chivo
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The brand personality captures the electric, high-stakes atmosphere of modern Egyptian football under floodlights. It is bold, passionate, swift, and trustworthy. The platform delivers an exhilarating stadium-first experience tailored to devoted supporters across Egypt, balancing fervent matchday culture with rapid, frictionless ticketing.

### Target Audience
- Passionate supporters of Egyptian Premier League clubs (Al Ahly, Zamalek, Pyramids, Ismaily, Al Masry, and across the league).
- Mobile-first, on-the-go fans booking tickets minutes before kickoff, often under bright outdoor daylight or stadium floodlights.
- Users relying heavily on trusted local payment rails (Fawry, Vodafone Cash & mobile wallets, Meeza, Visa/Mastercard).

### Design Movement & Aesthetic
- **Floodlight Dark Glassmorphism:** A deep charcoal/slate canvas (#0B0E14) combined with translucent frosted surfaces, emerald pitch highlights, and amber floodlight accents.
- **Bi-directional Symmetry:** Crafted RTL-first for natural Arabic readability (Cairo/Tajawal), seamlessly mirrored for English LTR with identical visual hierarchy and kinetic tension.
- **High-Velocity Sports Data:** High-contrast typographic scales, bold game status chips, and urgent countdown blocks engineered for readability in crowded, mobile-first matchday settings.

## Colors

The color system is optimized for nighttime stadium aesthetics and outdoor visibility, contrasting deep pitch charcoal tones with saturated electric accents.

### Core Roles
- **Primary (`#10B981` — Electric Emerald):** Represents the pitch, confirmed status, primary purchase CTAs, active selections, and interactive focus states.
- **Secondary (`#F59E0B` — Stadium Gold/Amber):** Evokes stadium floodlights, match countdown urgency, VIP seating tiers, and "Almost Sold Out" (أوشك على النفاد) status alerts.
- **Tertiary (`#06B6D4` — Nile Cyan):** Reserved for technical markers, seat coordinates, category filters, and digital turnstile entry validation.
- **Neutral Dark Canvas (`#0B0E14` base, `#121824` container):** Pure dark atmosphere eliminating eye strain, providing a non-distracting background for club crests and seating maps.

### Functional Match Statuses
- **Available (`متاح`):** `#10B981` (Electric Emerald) with 15% opacity surface fills.
- **Selling Fast / Urgency (`أوشك على النفاد`):** `#F59E0B` (Stadium Amber) with soft pulsing indicators.
- **Sold Out (`نفدت التذاكر`):** `#EF4444` (Stadium Red) on neutral muted cards with disabled interaction.
- **Egyptian Local Rails (`Fawry`, `Vodafone Cash`, `Meeza`):** High-contrast neutral containers (#1E2638) framing localized brand emblems clearly against dark mode surfaces.

## Typography

The typography strategy pairs bold athletic geometry for fixtures, numerals, and scores with warm, legible letterforms for match metadata and transactional flows.

### Font Pairing Strategy
- **Headlines & Scores:** `Chivo` (with fallbacks to `Cairo` for Arabic viewports) provides sharp, aggressive, condensed athletic authority suitable for team names, stadium titles, ticket counters, and kick-off timers.
- **Body, UI & Meta:** `Rubik` (with fallbacks to `Tajawal` for Arabic viewports) ensures fluid legibility across multi-line booking conditions, Fan ID instructions, and payment receipts.
- **Numeral Handling:** Match times, countdowns, and seat coordinates utilize tabular numbers (`tnum`) to avoid layout jitter during live count-ups and ticket reservation countdowns.

## Layout & Spacing

The layout is built on a responsive 12-column fluid grid system that prioritizes single-thumb mobile ergonomics for stadium turnstile navigation and seating map interactions.

### Breakpoints & Layout Adaptations
- **Mobile (< 768px):** 4-column layout. Margin is `1rem` (16px) with `1rem` gutters. Match cards stack vertically with prominent quick-buy bottom sheets. Floating CTAs are pinned to the lower edge.
- **Tablet (768px - 1024px):** 8-column layout. Margin expands to `2rem`. Fixtures display in a dual-column layout with split views for the stadium stand visualizer and ticket tier summaries.
- **Desktop (> 1024px):** 12-column layout capped at a maximum width of 1280px. Margins expand to `3rem` with `1.5rem` gutters. Layout supports side-by-side interactive pitch maps and sticky checkout sidebars.

### Bidirectional Layout Rules (RTL / LTR)
- Arabic is treated as the native default: layouts flow right-to-left. Match countdowns count sequentially, team badges place Home on the right and Away on the left, and breadcrumb flows mirror seamlessly when toggling to English.
- Margin alignments, badge offsets, chevron directional indicators, and payment rail list icons reverse automatically based on the `dir` attribute.

## Elevation & Depth

Visual depth is achieved through layered glassmorphism, surface tiers, and electric stadium glow rather than opaque traditional drop shadows.

### Surface Tiers
- **Tier 0 (Backdrop Canvas):** Solid dark `#0B0E14` creating an immersive stadium pitch environment.
- **Tier 1 (Surface Containers):** Deep charcoal `#121824` with 80% opacity and `12px` backdrop blur, bound by an ultra-thin border (`1px solid rgba(255, 255, 255, 0.08)`).
- **Tier 2 (Elevated Match Cards & Modals):** `#1A2234` with 85% opacity, `20px` backdrop blur, and a subtle top edge highlight (`1px solid rgba(16, 185, 129, 0.2)`).
- **Tier 3 (Floating Turnstile Barcodes & Drawers):** `#222D42` with 95% opacity, soft amber or emerald diffuse ambient glow (`0 20px 40px rgba(0, 0, 0, 0.6)`), and high-contrast borders.

### Dynamic Focus & Status Glows
- Available items and selected seats cast a tight, focused emerald ambient bloom: `0 0 16px rgba(16, 185, 129, 0.35)`.
- Critical match countdowns and "Almost Sold Out" warnings use a stadium amber aura: `0 0 16px rgba(245, 158, 11, 0.3)`.

## Shapes

The design system uses a balanced rounded geometry (Level 2: `0.5rem` / 8px base) that conveys athletic precision and technical durability without feeling child-like.

- **Base Radius (`0.5rem` / 8px):** Applied to form inputs, payment method selector tiles, countdown number blocks, and match detail chips.
- **Large Radius (`1rem` / 16px):** Used for stadium cards, seating tier sections, Fan ID validation blocks, and modal sheets.
- **Extra Large Radius (`1.5rem` / 24px):** Reserved for floating bottom navigation bars and quick-checkout bottom drawers.
- **Pill Cutouts:** Match status badges (`متاح`, `أوشك على النفاد`), stadium gate tags, and ticket coupon tags use 9999px fully rounded caps. Physical ticket cards incorporate circular notch cutouts along the perforations between the ticket details and the entry barcode.

## Components

### Buttons
- **Primary Match CTA (حجز التذكرة / Book Ticket):** Emerald background (`#10B981`), bold uppercase text in `#0B0E14`, `0.5rem` radius, full mobile width. On hover/active, an electric glow pulses (`0 0 20px rgba(16, 185, 129, 0.45)`).
- **Secondary (عرض التفاصيل / View Stand Details):** Ghost style with `1px solid rgba(255, 255, 255, 0.15)`, neutral container hover, and crisp white typography.
- **Destructive / Cancel:** Translucent crimson background (`rgba(239, 68, 68, 0.15)`) with `#EF4444` label.

### Match Status Badges & Chips
- **Chips:** Small pill-shaped containers with a 6px pulsing dot on the leading edge (right in Arabic, left in English).
- **Available (`متاح`):** Emerald dot (`#10B981`), surface `rgba(16, 185, 129, 0.12)`, text `#34D399`.
- **Low Stock (`أوشك على النفاد`):** Amber dot (`#F59E0B`), surface `rgba(245, 158, 11, 0.12)`, text `#FBBF24`.
- **Sold Out (`نفدت التذاكر`):** Muted slate dot (`#64748B`), surface `rgba(100, 116, 139, 0.12)`, text `#94A3B8`.

### Countdown Timers
- Split tabular blocks featuring numbers stacked above micro-labels (ثانية, دقيقة, ساعة, يوم / SEC, MIN, HR, DAY).
- Charcoal containers (`#1A2234`) with a top border illuminated by amber or emerald depending on match kickoff proximity.

### Match & Fixture Cards
- Structured dual-team showcase: club crests, bilingual club titles, league round tag (`الجولة ١٦`), venue name (e.g., استاد القاهرة الدولي / Cairo International Stadium), and dynamic kickoff timestamp.
- Glassmorphic card surface with interactive hover lift (`translateY(-4px)`).

### Egyptian Payment Integration Selectors
- Dedicated multi-channel payment grid containing Fawry (`فوري`), Vodafone Cash (`فودافون كاش`), Meeza (`ميزة`), and standard bank cards.
- Each payment channel card features high-contrast brand recognition, a subtle selection radio icon, and payment reference code instructions for offline cash redemption at kiosk locations.

### Form Inputs & Fan ID Verification
- Deep glass field backgrounds (`#121824`) with `1px solid rgba(255, 255, 255, 0.1)` borders.
- Dedicated input patterns for Egyptian National ID (١٤ رقم / 14 digits) and Fan ID validation with instant inline state confirmation (green checkmark badge or error prompt).
- Focused fields transition border to `#10B981` with an outer emerald glow.