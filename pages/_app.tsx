import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { mediaQueries } from '../styles/media-queries'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 14px;
    font-weight: 300;
    ${mediaQueries(4)`
      font-size: 15px;
    `};
    ${mediaQueries(7)`
      font-size: 16px;
    `};
    ${mediaQueries(9)`
      font-size: 17px;
    `};
    ${mediaQueries(12)`
      font-size: 18px;
    `};
  }
`

const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
