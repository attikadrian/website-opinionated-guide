import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
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
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.paddle.com/paddle/paddle.js"></script>
        <script
          async
          data-uid="c358896839"
          src="https://colossal-artist-8004.ck.page/c358896839/index.js"
        ></script>
        <script async defer src="https://cdn.coollabs.io/cool.js"></script>
        <meta
          name="description"
          content="This book is my personal map of the tips, power-ups and
          not-so-obvious solutions to common questions and problems that
          I've come across during 4 year of React development."
        />
        <meta charSet="utf-8" />
        <meta
          name="image"
          content="https://launch.opinionatedreact.com/fb.png"
        />
        <meta
          itemProp="image"
          content="https://launch.opinionatedreact.com/fb.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@NikkitaFTW" />
        <meta name="twitter:creator" content="@NikkitaFTW" />
        <meta name="twitter:title" content="Opinionated Guide to React" />

        <meta
          name="twitter:image"
          content="https://launch.opinionatedreact.com/twitter.png"
        />
        <meta
          name="twitter:description"
          content="This book is my personal map of the tips, power-ups and
          not-so-obvious solutions to common questions and problems that
          I've come across during 4 year of React development."
        />
        <meta property="og:title" content="Opinionated Guide to React" />
        <meta
          property="og:description"
          content="This book is my personal map of the tips, power-ups and
          not-so-obvious solutions to common questions and problems that
          I've come across during 4 year of React development."
        />
        <meta
          property="og:image"
          content="https://launch.opinionatedreact.com/fb.png"
        />
        <meta property="og:url" content="https://opinionatedreact.com/" />
        <meta property="og:site_name" content="Opinionated Guide to React" />
        <meta property="og:type" content="website"></meta>
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
