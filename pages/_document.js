import Document, { Head, Main, NextScript } from 'next/document'
import { APP_HOST } from '../lib/env'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <script dangerouslySetInnerHTML={{
            __html: `window.App = ${JSON.stringify({ HOST: APP_HOST })}`
          }}
        />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
