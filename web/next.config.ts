/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    buildActivity: false,
    appIsrStatus: false,
  },
  experimental: {
    // No experimental flags needed
  },
};

// Force-disable DevTools
if (process.env.NEXT_PUBLIC_DISABLE_DEVTOOLS) {
  process.env.__NEXT_DISABLE_DEV_INDICATOR = "true";
}

module.exports = nextConfig;
