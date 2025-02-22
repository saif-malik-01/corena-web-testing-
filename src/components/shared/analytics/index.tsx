import Script from "next/script";

const Analytics = () => {
  return (
    <Script
      strategy="afterInteractive"
      src="https://www.googletagmanager.com/gtm.js?id=GTM-P938MC5P"
    />
  );
};

export default Analytics;
