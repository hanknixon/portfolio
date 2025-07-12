# Hank Nixon - Portfolio Website

A modern, interactive portfolio website showcasing my journey as a Software Engineer and Full-Stack Developer. Built with React, TypeScript, and cutting-edge web technologies.

## 🌟 Features

### Multi-Page Experience

- **Professional Page**: Showcases technical skills, experience, and projects
- **Personal Page**: Reveals hobbies, interests, and personal story
- **Contact Page**: Interactive contact form and social links

### Interactive Components

- **Anime Navigation Bar**: Unique mascot-based navigation with smooth animations
- **3D Loading Screen**: Custom 3D box loader with dynamic messages
- **Apple-style Carousel**: Smooth horizontal scrolling for hobbies showcase
- **Animated Tabs**: Project showcase with smooth transitions
- **Layout Grid**: Interactive cards with modal expansions
- **Timeline Component**: Professional experience with scroll animations

### Advanced Animations

- **Framer Motion**: Smooth page transitions and micro-interactions
- **GSAP Integration**: Advanced text animations and scroll triggers
- **Split Text Effects**: Character-by-character text reveals
- **Scroll Animations**: Elements animate as they enter viewport
- **Hover Effects**: Interactive UI elements with visual feedback

### Modern Design

- **Dark Theme**: Consistent dark color scheme with green accents
- **Responsive Design**: Optimized for all device sizes
- **Custom Fonts**: Brutal Type font family for headings
- **Background Patterns**: Animated grid patterns and floating paths
- **Glass Morphism**: Backdrop blur effects throughout

## 🛠️ Tech Stack

### Frontend

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework

### Animations & Interactions

- **Framer Motion** - Production-ready motion library
- **GSAP** - Professional animation library
- **Lucide React** - Beautiful icon library

### Development Tools

- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                     # Reusable UI components
│   │   ├── animated-tabs.tsx   # Project showcase tabs
│   │   ├── apple-cards-carousel.tsx # Hobbies carousel
│   │   ├── layout-grid.tsx     # Interactive card grid
│   │   ├── timeline.tsx        # Experience timeline
│   │   ├── split-text.tsx      # Text animation component
│   │   ├── bg-pattern.tsx      # Background patterns
│   │   └── 3d-box-loader-animation.tsx # Loading animation
│   ├── contact/
│   │   └── Contact.tsx         # Contact page component
│   ├── personal/
│   │   ├── PersonalHero.tsx    # Personal page hero
│   │   ├── PersonalAbout.tsx   # Personal about section
│   │   ├── Hobbies.tsx         # Hobbies showcase
│   │   └── PersonalContact.tsx # Personal contact footer
│   ├── hooks/
│   │   └── useScrollAnimation.js # Custom scroll animation hook
│   ├── Header.tsx              # Main navigation
│   ├── Hero.tsx                # Professional hero section
│   ├── About.tsx               # Professional about section
│   ├── Experience.tsx          # Work experience
│   ├── Projects.tsx            # Project showcase
│   ├── Footer.tsx              # Professional footer
│   └── LoadingScreen.tsx       # Initial loading screen
├── lib/
│   └── utils.ts                # Utility functions
├── App.tsx                     # Main app component
├── main.tsx                    # App entry point
└── index.css                   # Global styles and fonts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/hanknixon/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎨 Key Components

### Navigation System

- **Smart Navbar**: Auto-hides on scroll down, shows on scroll up
- **Anime Mascot**: Interactive mascot that follows active page
- **Mobile Responsive**: Hamburger menu for mobile devices

### Loading Experience

- **Dynamic Messages**: Different messages for different page types
- **3D Animation**: Custom CSS 3D box animation
- **Progress Tracking**: Real-time loading progress

### Content Sections

#### Professional Page

- **Hero Section**: Introduction with animated statistics
- **About**: Interactive grid with expandable cards
- **Experience**: Timeline with detailed work history
- **Projects**: Tabbed interface showcasing key projects

#### Personal Page

- **Personal Hero**: Anime-style introduction
- **Personal About**: Story-driven content with device showcase
- **Hobbies**: Apple-style carousel with detailed modals

#### Contact Page

- **Contact Form**: Functional form with validation
- **Social Links**: Animated social media connections
- **Contact Info**: Professional contact details

## 🎯 Features Breakdown

### Animations

- **Page Transitions**: Smooth loading between sections
- **Scroll Triggers**: Elements animate on scroll
- **Hover Effects**: Interactive feedback on all clickable elements
- **Text Animations**: Character-by-character reveals

### Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Perfect tablet experience
- **Desktop Enhanced**: Rich desktop interactions

### Performance

- **Lazy Loading**: Images load as needed
- **Code Splitting**: Optimized bundle sizes
- **Smooth Scrolling**: 60fps animations

## 🎨 Design System

### Colors

- **Primary**: Green (#10B981) - Green-400
- **Secondary**: Emerald (#059669) - Emerald-600
- **Background**: Dark Gray (#1D1D22)
- **Text**: White (#FFFFFF) and Gray variants

### Typography

- **Headings**: Brutal Type (Custom font family)
- **Body**: Inter (Google Fonts)
- **Code**: Monospace

### Spacing

- **8px Grid System**: Consistent spacing throughout
- **Responsive Breakpoints**: Mobile, tablet, desktop

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Configuration

### Environment Variables

No environment variables required for basic setup.

### Customization

- **Colors**: Update Tailwind config for color scheme changes
- **Fonts**: Modify `index.css` for font changes
- **Content**: Update component files for content changes

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: hankenixon456@gmail.com
- **LinkedIn**: [linkedin.com/in/hanknixon](https://www.linkedin.com/in/hanknixon/)
- **GitHub**: [github.com/hanknixon](https://github.com/hanknixon)
- **Portfolio**: [Live Demo](https://your-portfolio-url.com)

## 🙏 Acknowledgments

- **Framer Motion** - For amazing animation capabilities
- **Tailwind CSS** - For rapid UI development
- **Lucide Icons** - For beautiful iconography
- **Unsplash** - For high-quality images
- **Google Fonts** - For typography

---

**Built with ❤️ by Hank Nixon**

_Crafting digital experiences with passion and precision_
