import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" data-theme="light">
        <Head>
          <meta charSet="utf-8" />
          {/* Any other tags that should be in <head> for all pages */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
