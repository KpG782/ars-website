# ARS Landing Page

A modern, responsive landing page for the ARS (Auto Repair Service) mobile application, built with React 18 and Tailwind CSS 3.4.

## 🚀 Features

- **Modern Design:** Clean, professional UI with smooth animations
- **Fully Responsive:** Optimized for all devices (mobile, tablet, desktop)
- **Fast Performance:** Built with Vite for lightning-fast development and builds
- **Component-Based:** Modular React components for easy maintenance
- **SEO Ready:** Proper meta tags and semantic HTML
- **Accessibility:** WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **React 18.3.1** - Latest React with concurrent features
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Vite 6.0.3** - Next generation frontend tooling
- **Lucide React** - Beautiful & consistent icons
- **PostCSS & Autoprefixer** - CSS processing

## 📦 Installation

1. Navigate to the project directory:
```bash
cd ARSWEBSITE
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## 🏗️ Build for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
ARSWEBSITE/
├── public/
│   └── favicon.svg          # App favicon
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Hero.jsx         # Hero section
│   │   ├── Features.jsx     # Features showcase
│   │   ├── HowItWorks.jsx   # Process explanation
│   │   ├── ForCustomers.jsx # Customer benefits
│   │   ├── ForMechanics.jsx # Mechanic benefits
│   │   ├── Download.jsx     # Download CTA
│   │   └── Footer.jsx       # Footer with links
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
└── postcss.config.js        # PostCSS configuration
```

## 🎨 Sections

1. **Header** - Sticky navigation with smooth scrolling
2. **Hero** - Eye-catching hero with app mockup
3. **Features** - 6 key features with icons
4. **How It Works** - 4-step process guide
5. **For Customers** - Customer benefits and features
6. **For Mechanics** - Mechanic onboarding information
7. **Download** - App download CTAs with store badges
8. **Footer** - Links, contact info, and social media

## 🎨 Customization

### Colors

Edit the color palette in `tailwind.config.js`:

```js
colors: {
  primary: { /* Your primary colors */ },
  accent: { /* Your accent colors */ }
}
```

### Content

Update text and images in individual component files under `src/components/`

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using React and Tailwind CSS
