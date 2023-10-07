/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GOOGLE_SHEETS_CLIENT_EMAIL: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    GOOGLE_SHEETS_PRIVATE_KEY: process.env.GOOGLE_SHEETS_PRIVATE_KEY,
    SHEET_ID: process.env.SHEET_ID,
    SHEET_RANGE: process.env.SHEET_RANGE,
  },
};

module.exports = nextConfig;
