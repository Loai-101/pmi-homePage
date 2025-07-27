# PMI Functions Showcase

A responsive single-page React application showcasing the core functions and methodologies of the Project Management Institute (PMI).

## Features

### 🎯 Core Functionality
- **Interactive Function Cards**: Clickable cards displaying PMI functions with logos and hover effects
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing
- **Dark/Light Theme Toggle**: User-friendly theme switching with smooth transitions
- **External Links**: Direct links to PMI learning resources (opens in new tab)

### 🎨 Design & UX
- **Modern UI**: Clean, professional design using Tailwind CSS
- **Smooth Animations**: Hover effects, transitions, and loading states
- **Accessibility**: Keyboard navigation, screen reader support, and focus indicators
- **Loading States**: Skeleton loading for images with fallback placeholders

### 📱 Responsive Layout
- **Top Section**: Grid layout of function cards (1-4 columns based on screen size)
- **Bottom Section**: Detailed function information with full descriptions
- **Mobile-First**: Optimized for all device sizes

## Technology Stack

- **React 19.1.0** - Modern React with functional components and hooks
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **JavaScript ES6+** - Modern JavaScript features

## Project Structure

```
src/
├── components/
│   └── FunctionCard.js      # Reusable function card component
├── data/
│   └── functions.js         # Function data and information
├── App.js                   # Main application component
├── App.css                  # Custom styles and animations
└── index.css               # Tailwind CSS imports
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pmi-departments
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## Function Data

The application includes 4 core PMI functions:

1. **Project Management** - Core project management methodologies and best practices
2. **Program Management** - Coordinating multiple related projects for strategic objectives
3. **Portfolio Management** - Managing collections of projects and programs for organizational value
4. **Agile & Adaptive Management** - Flexible approaches for dynamic environments

## Customization

### Adding New Functions
To add new functions, edit `src/data/functions.js`:

```javascript
{
  id: 5,
  name: "Function Name",
  shortName: "Short Name",
  description: "Function description...",
  logo: "logo-url.png",
  officialLink: "https://function-resource.com",
  category: "Category"
}
```

### Styling
- Main styles are in `src/App.css`
- Component-specific styles use Tailwind CSS classes
- Theme colors can be customized in `tailwind.config.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational and showcase purposes. PMI logos and branding are property of the Project Management Institute.

## Acknowledgments

- Project Management Institute (PMI) for function information and resources
- Tailwind CSS for the styling framework
- React team for the amazing framework
# pmi-home-page-
