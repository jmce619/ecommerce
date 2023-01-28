import React from 'react';
import { Toaster } from 'react-hot-toast';

import { Layout } from '../ecommerce/components';
import { StateContext } from '../ecommerce/context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp