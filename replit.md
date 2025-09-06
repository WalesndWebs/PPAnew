# Prodigy Group - Financial Services Website

## Overview

Prodigy Group is a diversified financial services conglomerate with three main subsidiaries: Prodigy Finance (lending), Prodigy Portfolio Advisers (asset management), and Prodigy Brokercom (commodities trading). The website functions as a corporate portal, showcasing the group's services, team, and facilitating client consultations through a multi-page web presence. The project aims to empower financial prosperity through trust, security, transparency, and excellence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a multi-page HTML architecture with client-side interactivity, built with:
- **Static HTML Pages**: Interconnected HTML files for different sections (e.g., `index.html`, `ppa.html`, `finance.html`, `whoweare.html`, `products.html`, `contact-us.html`, `coming-soon` pages).
- **CSS Framework**: Tailwind CSS v2.2.19 for responsive design.
- **Custom Styling**: `style.css` for brand-specific colors (navy-blue, gold) and professional design elements.
- **Interactive Components**: JavaScript-powered features like testimonial sliders, image switching, modal systems, and mobile navigation.
- **Icon Integration**: Font Awesome 6.0.0 for consistent iconography.

### Design Patterns
- **Brand Consistency**: A consistent color scheme (navy-900, gold) and branding are maintained across all pages, including unified navigation styles. Logos are updated to include subsidiary names and hover effects.
- **Responsive Navigation**: Features a fixed header with a mobile hamburger menu and multi-level dropdowns with hover effects for desktop and click functionality for mobile. Navigation links are consistently updated across all pages.
- **Interactive Elements**: Includes a hero slider for the front page, an interactive testimonial slider, and dynamic content displays for team members and offerings.
- **Component-Based Modals**: Reusable profile modal system for displaying team member biographies.
- **Structured Content**: Pages like `ppa.html` and `products.html` are designed with clear sections for offerings, investment products, FAQs, and consultation calls to action, often mirroring professional financial layouts like FSDHAML.
- **Core Values Integration**: Company values (Trust, Transparency, Excellence, Security) are integrated with professional descriptions and icons.
- **Advisory Process Flow**: A 5-step advisory process (Discovery → Analysis → Strategy → Implementation → Monitoring) is clearly outlined.

### Key Features
- **Comprehensive Subsidiary Pages**: Dedicated pages for Prodigy Finance, Prodigy Portfolio Advisers (PPA), and Prodigy Brokercom (coming soon).
- **Detailed PPA Section**: `ppa.html` showcases investment management, commodity funding, collateral lending, bespoke advisory, and wealth preservation, along with products like Prodigy Aura, Prodigy Genesis, and Prodigy Liquidity Fund.
- **Team Showcase**: `whoweare.html` features the Management Team, while `meet-the-architects.html` and `meet-the-navigators.html` provide detailed profiles and bio popups for key personnel.
- **Client Engagement**: Includes a comprehensive `contact-us.html` with forms, maps, and social links, and "Downloadable Forms" under a "Resources" section.
- **Career Section**: A dedicated "Careers" dropdown with a "Join our team" button linking to a coming-soon page with email notification.

### JavaScript Functionality
- **HeroSlider Class**: Manages slide transitions, auto-play, and user interactions.
- **Modal Management**: Handles dynamic profile content loading and display.
- **Mobile Menu**: Manages responsive navigation.
- **Form Handling**: Processes client consultation requests and email notifications.

## External Dependencies

### CDN Resources
- **Tailwind CSS**: v2.2.19 for utility-first styling.
- **Font Awesome**: v6.0.0 for iconography.

### Asset Management
- **Logo Assets**: Local logo files stored in `attached_assets` directory.
- **Profile Data**: Placeholder content for team member biographical information.
- **Custom Fonts**: Web-safe font stack with sans-serif fallback.

### Third-Party Integrations
- **Background Images**: Unsplash for professional financial imagery (though specific API integration details are not provided, images are used).
- **Google Maps**: Integrated into `contact-us.html` for office location.