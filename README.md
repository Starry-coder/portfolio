# Aryan Kumar's React Portfolio

A modern, responsive portfolio website built with React 18, featuring clean architecture, beautiful animations, and optimized performance.

![Portfolio Preview](./Portfolio%20Images/Home.png)

## 🌟 Features

- **Modern React 18** - Built with the latest React features including Concurrent Rendering
- **Responsive Design** - Mobile-first approach with seamless cross-device experience
- **Organized Architecture** - Clean folder structure with component-based design
- **Smooth Animations** - Powered by Framer Motion for engaging user interactions
- **Performance Optimized** - Fast loading times and optimized bundle size
- **TypeScript Ready** - Easy to migrate to TypeScript when needed

## 🚀 Live Demo

🔗 **[View Live Portfolio](https://your-portfolio-url.vercel.app)** *(Update with your actual URL)*

## 📱 Screenshots

### Desktop View
![Desktop Home](./Portfolio%20Images/Home.png)
![Desktop About](./Portfolio%20Images/Intro.png)

### Mobile View
![Mobile Home](./Portfolio%20Images/Home-Mobile.png)
![Mobile About](./Portfolio%20Images/Intro-Mobile.png)

## 🛠️ Tech Stack

- **Frontend:** React 18, JavaScript (ES6+)
- **Styling:** CSS3, Styled Components
- **Animations:** Framer Motion
- **Particles:** React TSParticles
- **Routing:** React Router DOM
- **Build Tool:** Create React App
- **Version Control:** Git & GitHub

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
│   ├── Landing/        # Landing page with hero section
│   ├── About/          # About me page
│   ├── Projects/       # Projects showcase
│   └── Contact/        # Contact information
├── assets/             # Static assets (images, audio, SVGs)
├── config/             # Configuration files
├── data/               # Static data files
└── App.js              # Main application component
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/react-portfolio.git
   cd react-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm test` | Launches the test runner |
| `npm run build` | Builds the app for production |
| `npm run eject` | Ejects from Create React App (⚠️ irreversible) |

## 🎨 Customization

### Adding New Pages
1. Create a new folder in `src/pages/`
2. Add your component, styles, and index file
3. Export from `src/pages/index.js`
4. Update routing in `App.js`

### Updating Content
- **Personal Info:** Edit content in respective page components
- **Projects:** Update `src/data/WorkData.js`
- **Images:** Replace files in `src/assets/Images/`
- **Styling:** Modify CSS files in component folders

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
# Suppress webpack dev server warnings
GENERATE_SOURCEMAP=false
WDS_SOCKET_PORT=0
```

### Node.js 17+ Compatibility
If using Node.js 17+, the start script includes legacy OpenSSL support:
```json
"start": "set \"NODE_OPTIONS=--no-deprecation\" && react-scripts start"
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json: `"homepage": "https://yourusername.github.io/react-portfolio"`
3. Add deploy scripts and run: `npm run deploy`

## 🎯 Performance Optimizations

- ✅ **Code Splitting** - Lazy loading for better performance
- ✅ **Image Optimization** - Compressed and optimized assets
- ✅ **Bundle Analysis** - Regular bundle size monitoring
- ✅ **Accessibility** - WCAG 2.1 compliance
- ✅ **SEO Ready** - Meta tags and semantic HTML

## 📊 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Latest 2 versions |
| Firefox | ✅ Latest 2 versions |
| Safari | ✅ Latest 2 versions |
| Edge | ✅ Latest 2 versions |

## 🐛 Known Issues & Solutions

### Babel Dependency Warning
**Fixed:** Added `@babel/plugin-proposal-private-property-in-object` to devDependencies

### Webpack Dev Server Warnings
**Fixed:** Added environment variables to suppress deprecation warnings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Aryan Kumar**
- Email: aarryyaann1502051@gmail.com
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from [Font Awesome](https://fontawesome.com/)
- 3D elements from [Vectary](https://www.figma.com/community/plugin/769588393361258724/Vectary-3D-Elements)
- Background images from [Unsplash](https://unsplash.com/)
- Audio by [Jonas](https://pixabay.com/users/itswatr-12344345/) from [Pixabay](https://pixabay.com/music/)

---

⭐ **Star this repository if it helped you build your portfolio!**

*Built with ❤️ by Aryan Kumar*
