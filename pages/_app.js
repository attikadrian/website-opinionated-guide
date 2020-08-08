import "../styles/index.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.Paddle.Setup({ vendor: 115612 });
  }, []);
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp;
