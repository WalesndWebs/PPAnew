# Prodigy Group - Financial Services Website

## Overview

Prodigy Group is a diversified financial services conglomerate that operates through three main subsidiaries: Prodigy Finance (lending solutions), Prodigy Portfolio Advisers (asset management), and Prodigy Brokercom (commodities trading). The website serves as a corporate portal showcasing the group's services, team members, and facilitating client consultations through a multi-page web presence.

## Recent Changes

### September 6, 2025
- **Fixed Navigation Issues**: Completely resolved navigation bar problems by implementing inline styles, ensuring proper display across all pages without CSS conflicts
- **Removed "About Us" from Navigation**: Cleaned up navigation menu by removing the problematic "About Us" link from index.html, ppa.html, and whoweare.html
- **Added Mission & Vision Statements**: Created professional two-card section in whoweare.html showcasing company mission and vision with gold accent borders and icons
- **Implemented Advisory Process Section**: Added comprehensive 5-step process flow (Discovery → Analysis → Strategy → Implementation → Monitoring) with professional gold circular badges and connecting arrows
- **Enhanced Hero Section Design**: Replaced irrelevant team photos with relevant financial service visual cards featuring Investment Growth, Portfolio Management, Risk Management, and Financial Planning elements
- **Created "What We Do" Dropdown Navigation**: Added comprehensive dropdown menus with "Our Offerings" and "Our Products" (Prodigy Aura, Prodigy Genesis, Prodigy Liquidity Fund) across all pages
- **Built Our Offerings Page**: Created professional offerings page with 5 key services (Investment Management, Commodity Funding, Collateralized Lending, Bespoke Advisory, Wealth Preservation) matching FSDH layout
- **Implemented Product Navigation Links**: Connected all product dropdown items to specific sections on ppa.html with anchor links for direct navigation
- **Added Resources Dropdown**: Created Resources menu with "Downloadable Forms" submenu and corresponding coming-soon page with professional messaging and email notification system
- **Simplified Navigation Structure**: Updated all navigation menus across the entire website to simplified structure with exactly 4 main items plus search: "Who We Are", "Our Subsidiaries", "Careers", "Contact Us", and search icon - consistent across all pages including mobile navigation
- **Enhanced Multi-Level Navigation**: Added sophisticated dropdown hierarchy to "Who We Are" with Our Group and Our People submenus, where Our People contains Meet the Architects, Meet the Navigators, and Blog with distinctive gold gradient background styling to differentiate nested menu levels
- **Added Comprehensive Subsidiary Navigation**: Created "Our Subsidiaries" dropdown with Prodigy Finance (coming soon), Prodigy Portfolio Advisers (→ ppa.html), and Prodigy Brokercom (coming soon) across all pages
- **Implemented Careers Navigation**: Added "Careers" dropdown with "Join our team" button linking to dedicated careers coming-soon page with email notification system
- **Created Coming Soon Pages**: Built professional coming-soon pages for Prodigy Finance (lending solutions), Prodigy Brokercom (commodities trading), and Join our team (careers) with unique branding and email capture
- **Built Complete Contact Page**: Created comprehensive contact-us.html with contact information cards, contact form, business hours, social media links, and integrated Google Maps showing Lagos office location
- **Enhanced Front Page Slider**: Expanded slider to cover entire header section (full viewport height) while maintaining navigation visibility through proper z-index layering
- **Implemented Interactive Features**: Added working image switching for offerings section with smooth fade transitions
- **Created Subsidiary Logos Section**: Added professional subsidiary branding section beneath slider featuring Prodigy logo alongside each subsidiary name (Prodigy Finance, Prodigy Portfolio Advisers, Prodigy Brokercom) with hover effects and direct navigation links
- **Created Professional About Us Page**: Built complete about-us.html matching FSDHAML structure exactly with hero section, company overview, statistics, team profiles with professional photos, culture values, and call-to-action
- **Updated Product Section**: Restructured PPA investment products into single row layout with "Learn More" functionality and direct email contact integration
- **Enhanced Testimonial Design**: Updated testimonial section to match FSDHAML two-column layout with professional image
- **Fixed Navigation Links**: Connected About Us page to "Who We Are" → "Our Group" dropdown navigation across all pages
- **Implemented Interactive Features**: Added working image switching for offerings section with smooth fade transitions
- **Created Professional Groups Page**: Built new groups.html page exactly matching FSDH Group's "Our Group" page structure with clean, minimal design featuring company description, statistics (100+ Professionals, 15+ Cities, 5+ Years), value propositions, and professional branding
- **Updated Navigation Consistency**: Updated all navigation menus across all pages (index.html, ppa.html, contact-us.html, whoweare.html) to point "Our Group" links to the new groups.html page

### September 5, 2025
- **Updated Navigation Structure**: Implemented exact FSDH Group navigation with "Who We Are" dropdown containing "Our Group" and "Our People" (with Board of Directors and Management Team sub-items)
- **Created New PPA Page**: Completely rebuilt ppa.html to match FSDH Asset Management's design structure including hero section, offerings carousel, investment products, FAQ section, and consultation CTA
- **Enhanced Dropdown Menus**: Added multi-level dropdown functionality with hover effects on desktop and click functionality on mobile
- **Integrated Prodigy Logo**: Added the official blue "P" with gold arrows logo throughout the site including navigation and footer sections
- **Fixed Sticky Header**: Resolved navigation bar visibility issues when scrolling

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application follows a traditional multi-page HTML architecture with client-side interactivity:

- **Static HTML Pages**: Multiple interconnected HTML files serving different sections (index.html, ppa.html, subsidiaries.html, etc.)
- **CSS Framework**: Tailwind CSS v2.2.19 for responsive design and styling
- **Custom Styling**: Additional CSS variables and classes in style.css for brand-specific colors (navy-blue, gold)
- **Interactive Components**: JavaScript-powered hero slider, modal systems, and mobile navigation
- **Icon Integration**: Font Awesome 6.0.0 for consistent iconography

### Design Patterns
- **Component-Based Modals**: Reusable profile modal system for team member information
- **Responsive Navigation**: Fixed header with mobile hamburger menu
- **Hero Slider**: Auto-rotating banner system with manual controls and touch support
- **Brand Consistency**: Consistent color scheme (navy-900, gold) across all pages

### Page Structure
- **Landing Page** (index.html): Hero slider with company introduction
- **Portfolio Advisers** (ppa.html): FSDH Asset Management-style page with wealth management services, investment products, and consultation booking
- **Subsidiaries Overview** (subsidiaries.html): Group companies presentation
- **Team Profiles** (navigators.html, profiles.html): Leadership and team showcase
- **Thank You Page** (thank-you.html): Post-consultation confirmation

### JavaScript Functionality
- **HeroSlider Class**: Manages slide transitions, auto-play, and user interactions
- **Modal Management**: Dynamic profile content loading and display
- **Mobile Menu**: Responsive navigation handling
- **Form Handling**: Client consultation request processing

## External Dependencies

### CDN Resources
- **Tailwind CSS**: v2.2.19 for utility-first styling framework
- **Font Awesome**: v6.0.0 for comprehensive icon library
- **External Images**: Unsplash integration for background imagery

### Asset Management
- **Logo Assets**: Local logo files stored in attached_assets directory
- **Profile Data**: Text files containing team member biographical information
- **Custom Fonts**: Web-safe font stack with sans-serif fallback

### Third-Party Integrations
- **Background Images**: Unsplash API for professional financial imagery
- **Responsive Design**: CSS Grid and Flexbox for layout management
- **Touch/Swipe Support**: Native JavaScript touch event handling for mobile slider interaction

The architecture prioritizes performance through CDN delivery, maintains brand consistency through custom CSS variables, and ensures accessibility through semantic HTML structure and responsive design patterns.