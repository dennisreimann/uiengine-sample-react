import App, {Container} from 'next/app'
import Head from 'next/head'
import React from 'react'

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const {Component, pageProps} = this.props
    return <Container>
      <Head>
        <title>Tasty BBQ – homemade • best in town • yummy</title>
      </Head>
      <Component {...pageProps} />
    </Container>
  }
}
