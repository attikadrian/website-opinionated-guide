import "../styles/index.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.Paddle.Setup({ vendor: 115612 });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
