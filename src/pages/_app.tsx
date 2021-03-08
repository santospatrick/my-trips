import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>My Trips</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project to show my favorite spots in the world."
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default App
