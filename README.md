# Rebant Smart Home Automation Website

A modern, responsive ecommerce website for Rebant Smart Home Automation built with React and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional interface with responsive layout
- **Product Catalog**: Browse products by categories (Lights, Wires, Smart Devices, Water Controllers, Fans & Motors, LDR Sensors)
- **WhatsApp Integration**: Direct ordering through WhatsApp with pre-filled product details
- **Customer Feedback**: Review and feedback system for customer testimonials
- **Contact Information**: Complete contact details with business hours
- **Mobile-Friendly**: Fully responsive design optimized for all devices

## Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: SVG icons for social media and UI elements
- **Data**: JSON-based product catalog (no backend required)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone or download the project
2. Navigate to the project directory:
   ```bash
   cd rebant-smart-home
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

## Project Structure

```
rebant-smart-home/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js          # Navigation component
│   │   ├── Footer.js          # Footer with social links
│   │   └── WhatsAppButton.js  # Floating WhatsApp button
│   ├── pages/
│   │   ├── Home.js            # Homepage with hero and featured products
│   │   ├── Categories.js      # Product categories grid
│   │   ├── Products.js        # Product listing with filters
│   │   ├── ProductDetail.js   # Individual product pages
│   │   ├── Contact.js         # Contact information
│   │   └── Feedback.js        # Customer feedback form
│   ├── data/
│   │   └── products.json      # Product and category data
│   ├── App.js                 # Main app component
│   ├── index.js              # App entry point
│   └── index.css             # Global styles with Tailwind
├── package.json
├── tailwind.config.js
└── README.md
```

## Customization

### WhatsApp Integration

Update the phone number in the following files:
- `src/components/WhatsAppButton.js`
- `src/pages/ProductDetail.js`
- `src/pages/Home.js`
- `src/pages/Contact.js`

Replace `9779876543210` with your actual WhatsApp business number.

### Product Data

Edit `src/data/products.json` to:
- Add/remove product categories
- Update product information
- Change product images (using Unsplash URLs)
- Modify pricing

### Contact Information

Update contact details in:
- `src/pages/Contact.js` - Main contact page
- `src/components/Footer.js` - Footer contact info

### Styling

The project uses Tailwind CSS with custom color scheme:
- Primary: Blue tones (#3b82f6, #2563eb, #1d4ed8)
- Secondary: Green tones (#10b981, #059669)

Modify `tailwind.config.js` to change the color scheme.

## Available Scripts

- `npm start` - Runs the development server
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm eject` - Ejects from Create React App (not recommended)

## Deployment

To deploy the website:

1. Build the production version:
   ```bash
   npm run build
   ```

2. Deploy the `build` folder to your hosting provider (Netlify, Vercel, etc.)

## Business Information

**Rebant Smart Home Automation**
- Address: New Baneshwor, Kathmandu, Nepal
- Phone: +977-9876543210
- Email: info@rebantsmarthome.com
- WhatsApp: +977-9876543210

## License

This project is created for Rebant Smart Home Automation. All rights reserved.

## Support

For technical support or customization requests, please contact the development team.
