# Professional Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring smooth animations, elegant design, and optimized performance.

## Features

- ✨ Modern and professional design with editorial aesthetic
- 📱 Fully responsive across all devices
- 🎨 Smooth scroll animations and transitions
- 🎯 Interactive project filtering
- 📊 Animated skill progress bars
- 📬 Contact form with validation
- 🎭 Intersection Observer for scroll-triggered animations
- 🚀 Optimized performance with Vite

## Tech Stack

- **React 18** - Modern UI library
- **Vite** - Lightning-fast build tool
- **CSS3** - Custom styling with CSS variables
- **Google Fonts** - Playfair Display & Karla typography

## Project Structure

```
portfolio-website/
├── index.html              # HTML entry point
├── main.jsx                # React entry point
├── App.jsx                 # Main App component
├── App.css                 # App-level styles
├── index.css               # Global styles and CSS variables
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
│
└── components/             # React components
    ├── Navigation.jsx      # Sticky navigation bar
    ├── Navigation.css
    ├── Hero.jsx            # Hero/landing section
    ├── Hero.css
    ├── About.jsx           # About section with stats
    ├── About.css
    ├── Projects.jsx        # Projects showcase with filtering
    ├── Projects.css
    ├── Skills.jsx          # Skills with progress bars
    ├── Skills.css
    ├── Contact.jsx         # Contact form and info
    ├── Contact.css
    ├── Footer.jsx          # Footer section
    └── Footer.css
```

## Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Create project directory and copy files**
   ```bash
   mkdir portfolio-website
   cd portfolio-website
   ```

2. **Copy all files to the project directory following the structure above**

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   Navigate to `http://localhost:5173`

6. **Build for production**
   ```bash
   npm run build
   ```

7. **Preview production build**
   ```bash
   npm run preview
   ```

## Component Details

### Navigation (`Navigation.jsx`)
- Sticky navigation that changes on scroll
- Smooth scroll to sections
- Mobile hamburger menu
- Responsive design

### Hero (`Hero.jsx`)
- Eye-catching landing section
- Animated text and decorative elements
- Call-to-action buttons
- Scroll indicator

### About (`About.jsx`)
- Personal introduction
- Animated statistics cards
- Intersection Observer for scroll animations
- Responsive grid layout

### Projects (`Projects.jsx`)
- Project showcase grid
- Category filtering (All, Web, Mobile, Design)
- Hover effects and overlays
- Technology tags
- Responsive card layout

### Skills (`Skills.jsx`)
- Categorized skill display
- Animated progress bars
- Percentage indicators
- Hover effects on skill cards

### Contact (`Contact.jsx`)
- Contact form with validation
- Contact information cards
- Social media links
- Form submission handling
- Success/error states

### Footer (`Footer.jsx`)
- Site navigation links
- Social media links
- Contact information
- Copyright and legal links

## Customization

### Colors
Edit the CSS variables in `index.css`:
```css
:root {
  --color-bg: #FAF8F5;
  --color-text: #1a1a1a;
  --color-accent: #C17767;
  /* ... more variables */
}
```

### Fonts
Change font imports in `index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

### Content
Update the content in each component:
- Personal information in `About.jsx`
- Projects in `Projects.jsx`
- Skills in `Skills.jsx`
- Contact details in `Contact.jsx`

### Images
Replace project images in `Projects.jsx` with your own images (hosted or local)

## Performance Optimizations

- CSS animations using GPU-accelerated properties
- Intersection Observer for lazy animations
- Optimized images (recommended: use WebP format)
- CSS-only animations where possible
- Minimal JavaScript bundle

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

MIT License - feel free to use this for your personal portfolio!

## Credits

Designed and developed with attention to detail and modern web standards.

---

**Note:** Remember to replace placeholder content (images, text, links) with your actual portfolio information before deploying!
