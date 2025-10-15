# Smart Information Retrieval System

A modern, AI-powered information retrieval system built for the Ministry of Education, Government of India, as part of Smart India Hackathon 2025.

## 🚀 Features

- **Modern Dashboard**: Clean, professional interface with quick access to all features
- **AI-Powered Search**: Intelligent search across educational policies, schemes, and documents
- **Voice Search**: Hands-free search using voice commands
- **Authentication Flow**: Secure login/logout system with persistent sessions
- **Responsive Design**: Works seamlessly across all devices
- **Professional UI**: Navy blue and orange theme matching government standards

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI + Custom Components
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd smart-information-retrieval
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🏗️ Build & Deployment

### Local Build
```bash
npm run build
```

### GitHub Pages Deployment

The project is configured for automatic deployment to GitHub Pages:

1. **Automatic Deployment**: Push to `main` branch triggers automatic deployment
2. **Manual Deployment**: Use the workflow dispatch feature in GitHub Actions
3. **Build Artifacts**: Automatically built and deployed from the `build` directory

### Deployment Configuration

- **Workflow File**: `.github/workflows/deploy.yml`
- **Build Directory**: `build/`
- **Homepage**: Configured in `package.json`
- **Scripts**: 
  - `predeploy`: Runs `npm run build`
  - `deploy`: Deploys to GitHub Pages using `gh-pages`

## 🎨 Design System

### Color Palette
- **Primary Navy**: `#002D62` - Main brand color
- **Secondary Navy**: `#003875` - Gradient variations
- **Accent Orange**: `#F97316` - Call-to-action elements
- **Background**: `#F9FAFB` - Clean, professional background

### Typography
- **Font Family**: Inter, system fonts
- **Font Weights**: 400 (normal), 500 (medium)
- **Responsive**: Scales appropriately across devices

### Components
- **Cards**: Professional shadows and hover effects
- **Buttons**: Gradient backgrounds with smooth transitions
- **Navigation**: Clean sidebar with active state indicators
- **Forms**: Modern input styling with focus states

## 🔧 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (Radix UI)
│   ├── Header.tsx      # Main navigation header
│   ├── Sidebar.tsx     # Navigation sidebar
│   └── Layout.tsx      # Main layout wrapper
├── pages/              # Page components
│   ├── Dashboard.tsx   # Main dashboard
│   ├── Login.tsx       # Authentication page
│   ├── Results.tsx     # Search results
│   └── ...
├── styles/             # Global styles
│   └── globals.css     # CSS variables and utilities
└── App.tsx             # Main application component
```

## 🚀 Key Features Implemented

### 1. Default Route Configuration
- Dashboard loads as the default page (`/`)
- Proper routing logic with state management
- Persistent login state using localStorage

### 2. Authentication Flow
- Login button in top-right corner of navbar
- Tooltip with "Click to Login" message
- Seamless transition between login/logout states
- Professional styling matching the theme

### 3. Professional Design
- Enhanced visual hierarchy
- Smooth animations and transitions
- Professional color scheme
- Responsive layout
- Modern UI components

### 4. GitHub Pages Deployment
- Automated CI/CD pipeline
- Build optimization
- Proper asset handling
- Environment configuration

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full sidebar navigation
- **Tablet**: Collapsible sidebar
- **Mobile**: Mobile-first design with touch-friendly interactions

## 🔒 Security Features

- Secure authentication flow
- Protected routes
- Session management
- Input validation
- XSS protection

## 🎯 Performance Optimizations

- Code splitting
- Lazy loading
- Optimized images
- Minified assets
- Gzip compression

## 📄 License

This project is developed for the Ministry of Education, Government of India, as part of Smart India Hackathon 2025.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and questions, please contact the development team or refer to the project documentation.

---

**Built with ❤️ for Smart India Hackathon 2025**