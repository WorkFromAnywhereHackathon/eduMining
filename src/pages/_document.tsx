// import { Footer } from '@/components/Footer';
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps
  }
  render() {
    return (
      <Html>
        <Head>
            <meta charSet="utf-8" />
            <link href="./styles/main.css" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Lato" rel="stylesheet"/>
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;