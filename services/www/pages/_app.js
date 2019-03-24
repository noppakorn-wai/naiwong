import React from 'react'
import App, { Container as NextContainer } from 'next/app'
import Header from 'www/components/Header'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <NextContainer>
        <Header />
        <Component {...pageProps} />
      </NextContainer>
    )
  }
}

export default MyApp
