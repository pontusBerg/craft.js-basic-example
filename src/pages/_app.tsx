import React from 'react';
import App from 'next/app';
import Head from 'next/head';


export default class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
