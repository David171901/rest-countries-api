import React from 'react'
// Libraries
import Head from 'next/head'
import Header from './Header'

const Layout = ({children, title}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="REST Countries API with color theme switcher" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-gray-100 min-h-screen dark:bg-gray-800'>
        <Header/>
        {children}
      </div>
    </>
  )
}

export default Layout