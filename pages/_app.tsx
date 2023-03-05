import "../styles/globals.css";
import type { AppProps } from "next/app";

import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Shibarium Yacht Club</title>
        <style>
          @import
          url(&quot;https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&family=Cinzel:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&display=swap)
        </style>
        <meta property="og:title" content="Shibarium Yacht Club" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <meta
          property="og:description"
          content=" In a world that is constantly evolving, it's essential
                  that we embrace new technologies that can help us transform
                  the way we conduct business and make the world a better place.
                  Our cutting-edge technology offers low-cost, high-speed, and
                  robust solutions that have the power to revolutionize the way
                  we live and work."
        />
        <meta property="og:url" content="" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
