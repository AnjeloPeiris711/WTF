# 🌤️ What The Forecast (WTF)

A modern, responsive weather application built with React, TypeScript, and Tailwind CSS. Get real-time weather information for Colombo and cities worldwide with a beautiful, intuitive interface.

## 🚀 Live Demo

**[View Live Application](https://wtf-rose-tau.vercel.app/)**

## ✨ Features

### Core Features
- 🌍 **Real-time Weather Data** - Current weather conditions for any city worldwide
- 🎯 **Colombo-Focused** - Optimized for Colombo with default location settings
- 📱 **Fully Responsive** - Seamless experience across desktop, tablet, and mobile devices
- 🔍 **Global City Search** - Search and get weather for any city around the world

### Weather Data
- 🌡️ **Temperature** - Current temperature with "feels like" values
- 💧 **Humidity** - Relative humidity percentage
- 💨 **Wind Information** - Speed and direction
- ☀️ **UV Index** - Sun exposure levels
- 👁️ **Visibility** - Atmospheric visibility distance
- 🌤️ **Weather Conditions** - Current weather status with icons

### Technical Features
- 🎨 **Modern UI/UX** - Glassmorphism design with smooth animations
- ⚡ **Performance Optimized** - Fast loading and efficient data fetching
- 🔒 **Secure API** - Environment-based API key management
- ⚠️ **Error Handling** - Comprehensive error states and user feedback
- ⏳ **Loading States** - Smooth loading indicators

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | React 18, TypeScript |
| **Styling** | Tailwind CSS |
| **Icons** | Lucide React |
| **Backend** | Node.js v20 |
| **API** | WeatherAPI.com |
| **Build Tool** | Vite |
| **Deployment** | Vercel |

## 🏗️ Project Structure

```
WTF/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/          # Reusable UI components
│   │   │   ├── weather/         # Weather-specific components
│   │   │   └── layout/          # Layout components
│   │   ├── hooks/               # Custom React hooks
│   │   ├── services/            # API service functions
│   │   ├── types/               # TypeScript type definitions
│   │   ├── utils/               # Utility functions
│   │   ├── constants/           # Application constants
│   │   └── styles/              # Global styles
│   ├── public/                  # Static assets
│   └── package.json
├── server/
│   ├── index.js                 # Express server
│   ├── .env                     # Environment variables
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn
- WeatherAPI.com API key (free)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AnjeloPeiris711/WTF.git
   cd WTF
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install server dependencies**
   ```bash
   cd ../server
   npm install
   ```

### API Setup

1. **Get your API key**
   - Visit [WeatherAPI.com](https://weatherapi.com)
   - Create a free account
   - Copy your API key from the dashboard

2. **Configure environment variables**
   ```bash
   # Navigate to server directory
   cd server
   
   # Create environment file
   touch .env
   
   # Add your API key
   echo "WEATHER_API_KEY=your_actual_api_key_here" > .env
   ```

### Development

1. **Start the backend server**
   ```bash
   cd server
   npm start
   # Server runs on http://localhost:3000
   ```

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   # Frontend runs on http://localhost:5173
   ```

3. **Configure for local development**
   
   Update the API base URL in `frontend/src/constants/index.ts`:
   ```typescript
   export const API_CONFIG = {
     BASE_URL: 'http://localhost:3000/api/v1/wtf',
   };
   ```
   
   Update CORS settings in `server/index.js`:
   ```javascript
   const allowedOrigin = 'http://localhost:5173';
   ```

### Production Deployment

The application is configured for Vercel deployment. The live version uses production API endpoints.

## 🔧 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/v1/wtf/q?=city` | GET | Get weather data for specified city |
| `/api/v1/health` | GET | Check the API |


## 🙏 Acknowledgments

- [WeatherAPI.com](https://weatherapi.com) for providing the weather data API
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [Lucide React](https://lucide.dev) for the beautiful icons
- [Vercel](https://vercel.com) for seamless deployment
