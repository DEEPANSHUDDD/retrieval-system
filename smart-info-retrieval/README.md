# Smart Information Retrieval System

A modern, responsive web application built with React, Vite, and Tailwind CSS for intelligent information retrieval.

## Features

- 🎨 **Modern UI Design** - Beautiful, professional interface with navy blue and orange accent colors
- 🔍 **Smart Search Interface** - Intuitive search bar with placeholder functionality
- 🔐 **User Authentication** - Login page with form validation and smooth transitions
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎭 **Smooth Animations** - Fade-in transitions and hover effects for better UX

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Heroicons
- **Deployment**: GitHub Pages with GitHub Actions

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/smart-info-retrieval.git
cd smart-info-retrieval
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This project is configured for automatic deployment to GitHub Pages:

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy the project
3. The site will be available at `https://yourusername.github.io/smart-info-retrieval`

## Project Structure

```
src/
├── pages/
│   ├── Dashboard.tsx    # Main dashboard page
│   └── Login.tsx        # Login page with validation
├── App.tsx              # Main app component with routing
├── index.css            # Global styles and Tailwind imports
└── main.tsx             # App entry point
```

## Customization

### Colors

The project uses a custom color palette defined in `tailwind.config.js`:

- **Primary**: Navy blue (#1e3a8a) and variations
- **Accent**: Orange (#f97316) and variations

### Styling

All styling is done with Tailwind CSS utility classes. The design features:

- Glassmorphism effects with backdrop blur
- Gradient backgrounds
- Smooth transitions and animations
- Professional typography with Inter font family

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Vite](https://vitejs.dev/) for the fast build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Heroicons](https://heroicons.com/) for the beautiful icons
- [React Router](https://reactrouter.com/) for client-side routing
