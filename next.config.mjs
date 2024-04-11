/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      URL_DEV: process.env.URL_DEV,
      APIKEY: process.env.APIKEY,
      AUTHDOMAIN: process.env.AUTHDOMAIN,
      PROJECTID: process.env.PROJECTID,
      STORAGEBUCKET: process.env.STORAGEBUCKET,
      MESSAGINGSENDERID: process.env.MESSAGINGSENDERID,
      APPID: process.env.APPID
    }
  }

export default nextConfig;

