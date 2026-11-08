import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        {/* Grona */}
        <link rel="preconnect" href="https://cdn.grona.ai" />
        <script src="https://cdn.grona.ai/workspaces/6aefaa7bac07b249a3eccf57/main.js" async></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
