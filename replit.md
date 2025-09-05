# Prodigy Group - Financial Services Website

## Overview

Prodigy Group is a diversified financial services conglomerate that operates through three main subsidiaries: Prodigy Finance (lending solutions), Prodigy Portfolio Advisers (asset management), and Prodigy Brokercom (commodities trading). The website serves as a corporate portal showcasing the group's services, team members, and facilitating client consultations through a multi-page web presence.

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
- **Portfolio Advisers** (ppa.html): Main service page with consultation booking
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