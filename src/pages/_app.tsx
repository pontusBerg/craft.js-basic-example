import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from 'next/app';
import Head from 'next/head';

import '../global.css'


export default class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
        </Head>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
