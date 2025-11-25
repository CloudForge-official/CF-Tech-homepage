# Company Website

A modern static website built with HTML, CSS, and JavaScript.

## Project Structure

```
.
├── index.html          # Home page
├── team.html           # Team members page
├── culture.html        # Company culture page
├── contact.html        # Contact page
├── assets/
│   ├── css/
│   │   └── style.css   # Main stylesheet with CSS variables and utilities
│   ├── js/
│   │   └── main.js     # Main JavaScript bundle
│   └── img/            # Images and assets
└── README.md
```

## Features

- **Responsive Design**: Mobile-first approach with responsive layouts
- **Modern CSS**: CSS variables, flexbox, and grid utilities
- **Typography Scale**: Consistent typography system
- **Component Library**: Reusable card, button, and layout components
- **Navigation**: Active page highlighting in navigation
- **Semantic HTML**: Proper semantic structure for accessibility and SEO
- **JavaScript Enhancements**: Smooth scrolling, form validation, and scroll animations

## CSS Architecture

The stylesheet (`assets/css/style.css`) includes:

- **CSS Reset**: Modern CSS reset for consistent cross-browser rendering
- **CSS Variables**: Brand colors, typography scale, spacing, and more
- **Layout Utilities**: Flexbox and grid helper classes
- **Typography System**: Responsive font sizes and weights
- **Component Styles**: Pre-styled components (cards, buttons, navigation, etc.)
- **Responsive Breakpoints**: Mobile, tablet, and desktop layouts

## JavaScript Features

The main JavaScript file (`assets/js/main.js`) provides:

- Navigation highlighting for current page
- Smooth scrolling for anchor links
- Scroll-based animations
- Form validation
- CTA button tracking
- Extensible API for future enhancements

## Getting Started

Simply open any HTML file in a web browser to view the site. No build process required.

For local development with live reload, you can use any static file server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Add actual images to `/assets/img/`
- Customize copy and content for each section
- Add more interactive features
- Integrate with backend API if needed
- Add contact form submission handling
