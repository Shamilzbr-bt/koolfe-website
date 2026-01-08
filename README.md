# Koolfe Website

A modern, responsive portfolio and agency website built with React, Vite, and TailwindCSS.

## 🚀 Features

- ⚡ Fast performance with Vite
- 🎨 Modern UI with TailwindCSS
- 📱 Fully responsive design
- 🎭 Smooth animations with Framer Motion and AOS
- 📧 Contact form with EmailJS integration
- 🔍 SEO optimized
- ♿ Accessible components
- 🎯 Error boundaries for better UX
- 🔄 Code splitting and lazy loading
- 🛡️ Type-safe with PropTypes

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/Shamilzbr-bt/koolfe-website.git
cd koolfe-website
```

1. Install dependencies:

```bash
npm install
# or
yarn install
```

1. Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

1. Configure your environment variables in `.env`:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_APP_NAME=Koolfe
VITE_APP_URL=https://koolfe.com
```

## 🚀 Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

The site will be available at `http://localhost:3000`

## 🏗️ Build

Create a production build:

```bash
npm run build
# or
yarn build
```

Preview the production build:

```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
koolfe-website/
├── public/             # Static assets
├── src/
│   ├── assets/        # Images, fonts, etc.
│   ├── components/    # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ErrorBoundary.jsx
│   │   ├── Loading.jsx
│   │   └── SEO.jsx
│   ├── pages/         # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Contact.jsx
│   │   ├── NotFound.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   └── TermsOfService.jsx
│   ├── App.jsx        # Main app component
│   ├── main.jsx       # Entry point
│   └── index.css      # Global styles
├── .env.example       # Environment variables template
├── .gitignore         # Git ignore rules
├── index.html         # HTML template
├── package.json       # Dependencies and scripts
├── tailwind.config.js # Tailwind configuration
├── vite.config.js     # Vite configuration
└── README.md          # Project documentation
```

## 🎨 Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** TailwindCSS
- **Routing:** React Router v6
- **Animations:** Framer Motion, AOS
- **Icons:** Lucide React
- **Forms:** EmailJS
- **SEO:** React Helmet Async

## 🔧 Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
1. Create an email service
1. Create an email template
1. Copy your Service ID, Template ID, and Public Key
1. Add them to your `.env` file

### Tailwind CSS

Tailwind is configured in `tailwind.config.js`. Customize colors, fonts, and other design tokens there.

### Vite Configuration

Build optimizations and aliases are configured in `vite.config.js`.

## 📝 Environment Variables

|Variable                  |Description        |Required|
|--------------------------|-------------------|--------|
|`VITE_EMAILJS_SERVICE_ID` |EmailJS service ID |Yes     |
|`VITE_EMAILJS_TEMPLATE_ID`|EmailJS template ID|Yes     |
|`VITE_EMAILJS_PUBLIC_KEY` |EmailJS public key |Yes     |
|`VITE_APP_NAME`           |Application name   |No      |
|`VITE_APP_URL`            |Production URL     |No      |

## 🚀 Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Build and Deploy Manually

```bash
npm run build
# Upload the 'dist' folder to your hosting provider
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For any inquiries, please reach out to:

- Email: contact@koolfe.com
- Website: https://koolfe.com

## ⚠️ Important Notes

- Never commit `.env` file to version control
- Always use environment variables for sensitive data
- Test thoroughly before deploying to production
- Keep dependencies up to date
- Follow accessibility best practices

## 🔄 Updates

Check the CHANGELOG.md for recent updates and changes.

-----

Made with ❤️ by Koolfe Team