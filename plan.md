# Implementation Plan: Bella Vista Restaurant Website

Create a premium, responsive restaurant website for "Bella Vista Restaurant" featuring a menu, online ordering, reservations, and an admin dashboard.

## Scope Summary
- **Pages:** Home, About Us, Menu, Reservations, Online Ordering (Cart/Checkout), Gallery, Contact.
- **Admin Panel:** Management of menu, orders, reservations, and restaurant info.
- **Features:** Dark/Light mode, responsive navigation, smooth animations, sticky header, search/filters on menu.
- **Data Persistence:** Client-side only (localStorage/SessionStorage) for this session.
- **Design:** Modern UI with a warm color palette (dark green, black, white, gold).

## Affected Areas
- **Frontend Components:** Layout, Navigation, Hero, Menu Cards, Forms (Reservation/Contact), Shopping Cart, Gallery.
- **Routing:** React Router for multi-page navigation.
- **State Management:** Local state for cart and simulated admin data.
- **Styling:** Tailwind CSS with custom colors and Google Fonts.

## Phases

### Phase 1: Setup & Foundations
- Initialize routing and basic layout.
- Configure Tailwind with the specific color palette (Dark Green, Gold).
- Set up Lucide icons and basic UI components (buttons, inputs from shadcn/ui).
- **Owner:** frontend_engineer

### Phase 2: Core Public Pages (Home & About)
- Build the Home page with Hero, Featured Dishes, and Footer.
- Build the About Us page with Story, Chef intro, and Gallery section.
- Implement Sticky Navigation and Dark/Light mode toggle.
- **Owner:** frontend_engineer

### Phase 3: Menu & Ordering System
- Create the Menu page with categories, search, and "Order Now" functionality.
- Implement the Shopping Cart logic (add/remove, quantity).
- Build the Online Ordering checkout flow (form for delivery/pickup and payment simulation).
- **Owner:** frontend_engineer

### Phase 4: Reservations & Contact
- Build the Reservation form with validation and a success message.
- Build the Contact page with form and mock Google Maps placeholder.
- Implement the floating WhatsApp button.
- **Owner:** frontend_engineer

### Phase 5: Gallery & Enhancements
- Build the filterable Gallery page.
- Add smooth scrolling and Framer Motion animations for hover effects and page transitions.
- Ensure SEO-friendly tags and accessibility.
- **Owner:** frontend_engineer

### Phase 6: Admin Dashboard (Mock)
- Create a protected-style route for `/admin`.
- Build the dashboard UI for managing menu items, reservations, and orders.
- Use localStorage to allow persistence of changes within the session.
- **Owner:** frontend_engineer

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Build the entire restaurant application as a single-session frontend project.

**Per-agent instructions:**
### 1. frontend_engineer
- **Phases:** 1-6
- **Scope:** Complete implementation of the Bella Vista Restaurant website.
- **Files:**
    - `src/App.tsx`: Routing and main entry.
    - `src/components/`: Reusable UI elements (MenuCard, Navbar, Footer, AdminSidebar).
    - `src/pages/`: Home, About, Menu, Reservations, Order, Gallery, Contact, Admin.
    - `src/index.css`: Tailwind configuration for the dark green/gold theme.
- **Depends on:** none
- **Acceptance criteria:**
    - All 7 main pages functional and accessible.
    - Functional shopping cart and simulated checkout.
    - Functional reservation form with confirmation.
    - Admin dashboard allows "editing" (via localStorage).
    - Responsive design (mobile/tablet/desktop).
    - Dark/Light mode functional.
