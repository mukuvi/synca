# ☕ Cafesynca

> **Where every sip creates a moment to cherish**

A modern, responsive cafe management and customer experience platform built with React, TypeScript, and Tailwind CSS.

## ✨ Features

### 🔐 Authentication System
- **Secure Sign-up/Sign-in**: Email and password authentication
- **Social Login**: Google and Facebook integration ready
- **Protected Routes**: Access control for authenticated users
- **Persistent Sessions**: Stay logged in across browser sessions

### 📱 User Experience
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Real-time Validation**: Instant feedback on form inputs
- **Accessibility**: WCAG compliant design patterns

### 🏪 Core Pages
- **Landing Page**: Beautiful hero section with signup form
- **Dashboard**: Personalized overview with stats and quick actions
- **Menu**: Interactive catalog with categories and cart functionality
- **Profile**: User account management and loyalty program

### 🎨 Design System
- **Tailwind CSS**: Utility-first styling approach
- **Custom Components**: Reusable UI elements
- **Consistent Theming**: Cohesive color palette and typography
- **Micro-interactions**: Hover states and smooth transitions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cafesynca.git
   cd cafesynca
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling

### Icons & Assets
- **Lucide React** - Beautiful, customizable icons
- **Pexels** - High-quality stock photography
- **Google Fonts** - Inter font family

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript** - Static type checking
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation component
│   └── ProtectedRoute.tsx # Route protection
├── contexts/           # React context providers
│   └── AuthContext.tsx # Authentication state
├── pages/              # Main application pages
│   ├── LandingPage.tsx # Sign-up/landing page
│   ├── Dashboard.tsx   # User dashboard
│   ├── Menu.tsx        # Menu catalog
│   └── Profile.tsx     # User profile
├── App.tsx             # Main app component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 🎯 Key Features Explained

### Authentication Flow
- Users must sign up to access protected features
- Form validation with real-time feedback
- Persistent login state using localStorage
- Automatic redirect to dashboard after signup

### Dashboard Highlights
- **Statistics Cards**: Orders, members, revenue, ratings
- **Recent Orders**: Live order tracking
- **Quick Actions**: Fast access to common tasks
- **Daily Special**: Featured menu item

### Menu System
- **Category Filtering**: Coffee, Tea, Pastries, Sandwiches
- **Interactive Cart**: Add items with quantity tracking
- **Rating System**: Customer reviews and ratings
- **Popular Items**: Highlighted bestsellers

### Profile Management
- **Editable Information**: Update personal details
- **Activity History**: Track order history
- **Loyalty Program**: Points and rewards system
- **Membership Tiers**: Bronze, Silver, Gold, Platinum

## 🎨 Design Philosophy

### Visual Hierarchy
- **Typography**: Inter font with 3 weight variations
- **Spacing**: Consistent 8px grid system
- **Colors**: Primary coral (#f2796e) with supporting palette
- **Shadows**: Subtle depth with hover enhancements

### User Experience
- **Progressive Disclosure**: Information revealed contextually
- **Micro-interactions**: Smooth transitions and hover states
- **Responsive Design**: Mobile-first approach
- **Loading States**: Visual feedback during actions

## 🔧 Customization

### Theme Colors
Update `tailwind.config.js` to modify the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#f2796e',    // Main brand color
      secondary: '#4f70b5',  // Accent color
    }
  }
}
```

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `App.tsx`
3. Update navigation in `Navbar.tsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Pexels** for beautiful stock photography
- **Lucide** for the comprehensive icon library
- **Tailwind CSS** for the utility-first framework
- **React Team** for the amazing framework

---

**Built with ❤️ for coffee lovers everywhere**

*Cafesynca - Where every sip creates a moment to cherish* ☕