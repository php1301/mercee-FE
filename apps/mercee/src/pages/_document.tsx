import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

export default class extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
