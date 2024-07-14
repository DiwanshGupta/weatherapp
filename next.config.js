/** @type {import('next').NextConfig} */
const { config } = require('dotenv');

config();

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'openweathermap.org',
      'source.unsplash.com',
    ],
  },
  env: {
    WEATHER_KEY: process.env.WEATHER_KEY,
    UNSPLASH_ACCESS_KEY: process.env.UNSPLASH_ACCESS_KEY,
  },
};

module.exports = nextConfig;
