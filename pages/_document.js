import Document, { Head, Main, NextScript } from 'next/document'
import { HOST } from '../lib/env'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <title>Tasty BBQ – homemade • best in town • yummy</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <script dangerouslySetInnerHTML={{
            __html: `window.App = ${JSON.stringify({ HOST })}`
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
