import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="zh-CN" data-color-mode="auto" data-light-theme="light" data-dark-theme="dark">
        <Head>
          <meta name="application-name" content="Scriptore" />
          <meta name="description" content="Scriptable scripts store" />
          <meta name='apple-mobile-web-app-title' content="Scriptore" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel='apple-touch-icon' sizes='144x144' href='/icons/apple-touch-icon-144x144.png' />
          <link rel='shortcut icon' href='/favicon.ico' />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
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
