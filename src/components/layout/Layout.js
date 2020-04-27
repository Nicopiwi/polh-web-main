import React from 'react';
import Footer from './Footer';
import Header from './Header';
import favicon from '../../Assets/favicon.ico';
import { Helmet } from 'react-helmet';
const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pölh blockcahin as a service</title>
        <link rel="icon" href={favicon} />
        <link rel="canonical" href="https://welcome.polh.io/" />
      </Helmet>
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
