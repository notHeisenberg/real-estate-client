# Aura Made Luxury Concierge Website

A modern, multilingual luxury concierge website built with React, offering high-end services including yacht rentals, luxury vehicles, and exclusive experiences in Ibiza and Barcelona. Experience luxury at its finest with our curated selection of premium services.

## ✨ Features

- 🌐 Multilingual support (English, Spanish, Russian)
- 🛥️ Luxury yacht showcase with detailed views and booking system
- 🚗 Premium vehicle fleet presentation with real-time availability
- 🏠 Villa rentals section with immersive 3D tours and image gallery
- 📱 Fully responsive design optimized for all devices
- 🎨 Modern UI with smooth animations and transitions
- 📧 Advanced contact form with automated email responses
- 🔄 Smart language switcher with geo-based detection
- 🖼️ High-performance image gallery with lazy loading
- 🎯 SEO optimized with structured data
- 🔒 Secure payment integration
- 📊 Analytics dashboard for administrators

## 🛠️ Tech Stack

- React 18 with TypeScript
- React Router v6 for navigation
- i18next for internationalization
- Tailwind CSS for styling
- Vite for build tooling
- React Helmet for SEO optimization
- Yet Another React Lightbox for galleries
- React Query for data fetching
- Framer Motion for animations
- Jest and React Testing Library for testing

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm (v8+) or yarn (v1.22+)
- Git

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/real-estate-website.git
cd real-estate-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Update the environment variables in `.env` with your values.

5. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## 🔧 Environment Variables

Required environment variables:
```env
VITE_API_URL=your_api_url
VITE_GOOGLE_MAPS_KEY=your_google_maps_key
VITE_EMAIL_SERVICE_KEY=your_email_service_key
```

## 📦 Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/         # Reusable components
│   ├── common/        # Common components (Navbar, Footer)
│   ├── sections/      # Page sections
│   └── ui/            # UI components
├── hooks/             # Custom React hooks
├── data/             # Static data and content
├── i18n/             # Internationalization files
├── layouts/          # Layout components
├── pages/            # Page components
├── routes/           # Route configurations
├── services/         # API services
├── store/            # State management
├── styles/           # Global styles
├── types/            # TypeScript types
└── utils/            # Utility functions

## 🧪 Testing

Run the test suite:
```bash
npm run test
# or
yarn test
```

Run tests with coverage:
```bash
npm run test:coverage
# or
yarn test:coverage
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For inquiries and support:
- Email: infoauramade@gmail.com
- Website: [www.auramade.com](https://www.auramade.com)
- Instagram: [@auramadeluxury](https://instagram.com/auramadeluxury)
- LinkedIn: [Aura Made Luxury](https://linkedin.com/company/auramade)

## 🙏 Acknowledgments

- Design inspiration from leading luxury concierge services
- Icons provided by [Lucide Icons](https://lucide.dev)
- Images sourced from our premium asset collection
- Special thanks to our development and design team

## 🔄 Updates & Changelog

### Latest Release (v1.0.0)
- Initial public release
- Multi-language support
- Integrated booking system
- Responsive design implementation

Check [CHANGELOG.md](CHANGELOG.md) for full version history.
