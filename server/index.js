const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const cors = require('cors');

const allowedOrigin = 'https://wtf-rose-tau.vercel.app';

app.use(express.json());

// CORS middleware that only allows your specific origin for the weather endpoint
const corsOptions = {
  origin: function (origin, callback) {
    // Only allow requests from the specific allowed origin
    // This will block direct browser access and curl requests
    if (origin === allowedOrigin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};

// Apply CORS only to the weather endpoint
app.use('/api/v1/wtf', cors(corsOptions));

// Handle preflight requests for the weather endpoint
app.options('/api/v1/wtf', cors(corsOptions));

// Weather API proxy endpoint
app.get('/api/v1/wtf', async (req, res) => {
  try {
    // Get query parameters from client request
    const { q, aqi = 'no' } = req.query;
    
    // Validate required parameters
    if (!q) {
      return res.status(400).json({ 
        error: 'Missing required parameter: q (location)' 
      });
    }

    // Make request to WeatherAPI with your secure API key
    const weatherResponse = await axios.get('http://api.weatherapi.com/v1/current.json', {
      params: {
        key: WEATHER_API_KEY,
        q: q,
        aqi: aqi
      }
    });

    // Send the weather data back to client
    console.log(weatherResponse.data);
    res.json(weatherResponse.data);

  } catch (error) {
    console.error('Weather API Error:', error.message);
    
    if (error.response) {
      // API returned an error response
      res.status(error.response.status).json({
        error: error.response.data.error || 'Weather API error'
      });
    } else {
      // Network or other error
      res.status(500).json({
        error: 'Internal server error'
      });
    }
  }
});

// Health check endpoint (no CORS restriction)
app.get('/api/v1/health', (req, res) => {
  res.json({ status: 'OK', message: 'Wtf stand for What The Forecast not what the fuck' });
});

// Default route (no CORS restriction)
app.get('/', (req, res) => {
  res.json({
    message: 'Weather API Proxy Server',
    endpoints: {
      weather: '/api/v1/wtf?q=colombo',
      health: '/api/v1/wtf/health'
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Weather proxy server running on http://localhost:${PORT}`);
  console.log(`Try: http://localhost:${PORT}/api/v1/wtf?q=London`);
});

module.exports = app;
