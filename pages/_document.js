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
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <script src="https://cdn.paddle.com/paddle/paddle.js"></script>
        <script
          async
          data-uid="c358896839"
          src="https://colossal-artist-8004.ck.page/c358896839/index.js"
        ></script>
        <meta
          name="description"
          content="This book is my personal map of the tips, power-ups and
          not-so-obvious solutions to common questions and problems that
          I've come across during 4 year of React development."
        />
        <meta charset="utf-8" />
        <meta
          name="image"
          content="https://launch.opinionatedreact.com/fb.png"
        />
        <meta
          itemprop="image"
          content="https://launch.opinionatedreact.com/fb.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@NikkitaFTW" />
        <meta name="twitter:creator" content="@NikkitaFTW" />
        <meta
          name="twitter:image:src"
          content="https://launch.opinionatedreact.com/twitter.png"
        />
        <meta
          name="og:image"
          content="https://launch.opinionatedreact.com/fb.png"
        />
        <meta name="og:url" content="https://opinionatedreact.com/" />
        <meta name="og:site_name" content="Opinionated Guide to React" />
        <meta name="og:type" content="website"></meta>
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
