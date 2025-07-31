# Rohan's Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Material UI, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean and professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **TypeScript**: Type-safe code for better development experience
- **Material UI**: Beautiful, accessible components
- **Tailwind CSS**: Utility-first CSS framework for custom styling
- **Contact Form**: Functional contact form for easy communication
- **Resume Download**: Direct download link for your resume
- **Project Showcase**: Beautiful project cards with live demos and code links

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript
- **UI Framework**: Material UI v5
- **Styling**: Tailwind CSS
- **Icons**: Material Icons
- **Build Tool**: Create React App

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
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
   Navigate to `http://localhost:3000`

## 🔧 Configuration

### Personal Information
Update the following files with your personal information:

- `src/components/Hero.tsx` - Update name, title, and social links
- `src/components/About.tsx` - Update personal description and experience
- `src/components/Skills.tsx` - Update skills and proficiency levels
- `src/components/Projects.tsx` - Update project information and links
- `src/components/Contact.tsx` - Update contact information
- `src/components/Footer.tsx` - Update social links

### Resume
1. Place your resume PDF in the `public` folder
2. Update the resume link in `src/components/Hero.tsx`

### Social Links
Update the following URLs in the components:
- GitHub: `https://github.com/yourusername`
- LinkedIn: `https://linkedin.com/in/yourusername`
- Email: `your.email@example.com`

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with introduction
│   ├── About.tsx       # About me section
│   ├── Skills.tsx      # Skills and technologies
│   ├── Projects.tsx    # Project showcase
│   ├── Contact.tsx     # Contact form and information
│   └── Footer.tsx      # Footer with social links
├── App.tsx             # Main app component
├── index.tsx           # App entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Customization

### Colors
The color scheme can be customized in:
- `src/App.tsx` - Material UI theme colors
- `tailwind.config.js` - Tailwind CSS custom colors

### Styling
- Use Tailwind CSS classes for custom styling
- Material UI components can be styled using the `sx` prop or `className`
- Global styles can be added to `src/index.css`

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first design approach
- Responsive navigation with hamburger menu
- Adaptive layouts for different screen sizes
- Touch-friendly interactions

## 🚀 Deployment

### GitHub Pages (Recommended)

This project is configured with GitHub Actions for automatic deployment to GitHub Pages.

#### Setup Instructions:

1. **Update the homepage URL** in `package.json`:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
   ```
   Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy when you push to main/master branch

3. **Push your code**:
   ```bash
   git add .
   git commit -m "Add GitHub Actions deployment"
   git push origin main
   ```

4. **Monitor deployment**:
   - Go to the "Actions" tab in your GitHub repository
   - You'll see the deployment progress
   - Once complete, your site will be available at the homepage URL

#### Manual Build for Production
```bash
npm run build
```

### Alternative Deployment Options

#### Deploy to Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

#### Deploy to Vercel
1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect the React app

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For any questions or suggestions, feel free to reach out:
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

Made with ❤️ by Rohan 