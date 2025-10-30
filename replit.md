# Knit by Machine

## Overview

Knit by Machine is a web application for machine knitting enthusiasts. It provides interactive tools and wizards to help users create custom knitting patterns, calculate gauge, and access sizing information for various knitting projects. The site offers pattern generators (boat neck sweaters, blankets), calculation tools (gauge calculator, conversion calculator, Magic Formula by Measurement), practice exercises (neckline shaping), and comprehensive sizing charts for different garment categories.

## Recent Changes

### October 2024
- **Wizards Landing Page System**: Complete restructure of wizard organization with new `/wizards` landing page featuring flip card layout organized by three categories (Pattern Generators, Charting Tools, Shaping Practice). All 8 wizards now have individual pages with consistent Header/Footer components and video tutorial button placeholders.
- **Individual Wizard Pages**: Created dedicated pages for all 8 wizards:
  - Pattern Generators: DIY Blanket, Boat Neck Sweater
  - Charting Tools: Gauge Calculator, Gauge Conversion Calculator, Gauge Difference, Magic Formula by Measurement
  - Shaping Practice: Neckline Shaping Practice, Neckline and Shoulder Shaping
- **Mobile-Friendly Flip Cards**: Implemented tap-to-flip on mobile devices and hover-to-flip on desktop, matching glossary interaction pattern with click-outside-to-close functionality.

### December 2024
- **Magic Formula by Measurement Wizard**: New calculation tool that helps knitters determine shaping instructions based on real measurements (inches/cm) instead of stitch counts. Features automatic gauge conversion, support for one-side or both-sides shaping, and intelligent handling of uneven division cases.
- **Deployment Workflow**: Simplified deployment process with `deploy.sh` script that commits source changes and pushes to GitHub, triggering automatic Netlify builds.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
**Decision**: Astro static site generator  
**Rationale**: Astro provides excellent performance for content-heavy sites through its islands architecture and static generation capabilities. The minimal Astro template serves as the foundation, allowing for lightweight, fast-loading pages that are ideal for tool-based applications.

**Key characteristics**:
- File-based routing via `src/pages/` directory
- Static asset serving from `public/` directory
- Component-based architecture (supports Astro, React, Vue, Svelte components)
- TypeScript support with strict configuration

### Styling Architecture
**Decision**: CSS custom properties (CSS variables) with vanilla CSS  
**Rationale**: Avoids framework overhead while maintaining consistency through a design token system.

**Design system**:
- Color palette: Green-focused theme (`--kbm-green`, `--kbm-green-2`, `--kbm-bg`)
- Typography: Poppins for UI, "Shadows Into Light Two" for branding
- Modular CSS files organized by feature (global, sizing-chart, temphome)
- Fixed header navigation with offset content layout

### Data Management
**Decision**: Static JSON data files with external CDN hosting  
**Rationale**: Wizard/tool definitions and sizing data are relatively static and benefit from CDN distribution for performance.

**Structure**:
- Local JSON files in `src/data/` for wizard metadata
- External sizing data hosted on Netlify (`https://sizing-data.netlify.app/`)
- Client-side data fetching for dynamic content

### Application Structure
**Architectural pattern**: Multi-page static site with interactive JavaScript modules

**Core sections**:
1. **Wizards/Tools**: Interactive pattern generators and calculators hosted on subdomain (`wizards.knitbymachine.com`)
2. **Sizing Charts**: Dynamic sizing reference tool with category-based data loading
3. **Marketing/Landing**: Hero section with visual imagery and call-to-action

**User preferences**:
- Measurement unit persistence (inches/centimeters) via localStorage
- Client-side unit conversion for accessibility

### Client-Side Interactivity
**Decision**: Vanilla JavaScript modules  
**Rationale**: Minimal dependencies reduce bundle size and complexity for tool-focused interactions.

**Features**:
- Dynamic sizing chart loading based on project category
- Unit conversion toggle (inches ↔ centimeters)
- Local storage for user preferences
- Category filtering for sizing data

## External Dependencies

### CDN Resources
- **Google Fonts**: Typography (Shadows Into Light Two, Poppins)
- **Font Awesome 6.5.0**: Icon library
- **Vimeo Player**: Video embedding for wizard demonstrations

### External Data Sources
- **Netlify CDN** (`https://sizing-data.netlify.app/`): Hosts JSON files for sizing charts across multiple categories:
  - Garments: hats, mittens, socks, sweaters (multiple demographics)
  - Home goods: blankets, pillows, Christmas stockings
  - Demographics: men, misses, plus, kids, baby sizes

### Third-Party Services
- **Wizard Platform**: Subdomain-hosted tools (`https://wizards.knitbymachine.com/`) for interactive pattern generation
- **Vimeo**: Video hosting and streaming for tutorial content

### Build Tools
- **Astro 5.14.7**: Core framework and build system
- **Node.js 22.x**: Runtime environment
- **TypeScript**: Type checking with Astro strict configuration

### Development Environment
- VSCode extensions: `astro-build.astro-vscode` for enhanced developer experience
- Node terminal-based debugging configuration