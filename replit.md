# Prodigy Group - Financial Services Website

## Overview

Prodigy Group is a diversified financial services conglomerate that operates through three main subsidiaries: Prodigy Finance (lending solutions), Prodigy Portfolio Advisers (asset management), and Prodigy Brokercom (commodities trading). The website is modeled after FSDH Group's design, featuring a clean corporate homepage with rotating text slider and subsidiaries showcase.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application follows a single-page HTML architecture inspired by FSDH Group:

- **Single Page Application**: Clean homepage (index.html) with all content sections
- **CSS Framework**: Tailwind CSS v2.2.19 for responsive design and styling
- **Custom Styling**: Additional CSS variables and classes in style.css for brand-specific colors (navy-blue, gold)
- **Interactive Components**: JavaScript-powered text slider and smooth navigation
- **Icon Integration**: Font Awesome 6.0.0 for consistent iconography

### Design Patterns
- **FSDH-Inspired Layout**: Matches FSDH Group's clean corporate design
- **Text Slider**: Auto-rotating text messages in hero section
- **Subsidiaries Showcase**: Card-based presentation of group companies
- **Responsive Navigation**: Fixed header with mobile hamburger menu
- **Brand Consistency**: Consistent color scheme (navy-900, gold) throughout

### Page Structure
- **Hero Section**: Rotating text slider with company messaging
- **Subsidiaries Section**: Showcase of three group companies
- **Values Section**: Mission, Vision, and Values presentation
- **Careers Section**: Company culture and recruitment information
- **Footer**: Contact information and links

### JavaScript Functionality
- **TextSlider Class**: Manages rotating text messages with smooth transitions
- **Mobile Menu**: Responsive navigation handling
- **Scroll Animations**: Smooth scrolling and element animations
- **Professional Styling**: Clean, minimalist approach matching FSDH

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