import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <title>Opinionated Guide to React</title>
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
        <meta name="msapplication-TileColor" content="#100613" />
        <meta name="theme-color" content="#100613" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <script src="https://cdn.paddle.com/paddle/paddle.js"></script>
        <script
          async
          data-uid="c358896839"
          src="https://colossal-artist-8004.ck.page/c358896839/index.js"
        ></script>
        <body>
          <Main />
          <NextScript />
        </body>
        <script
          src="https://cdn.usefathom.com/script.js"
          site="NSNISTEV"
          defer
        ></script>
      </Html>
    );
  }
}

export default MyDocument;
