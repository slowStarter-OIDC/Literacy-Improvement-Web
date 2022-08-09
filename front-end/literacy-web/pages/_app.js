// _app.js
import React from 'react';
import '../styles/globals.css';
import { wrapper } from "../store/store";
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import Layout from '../components/Layout';
import axios from 'axios';

function MyApp({ Component, pageProps: { ...pageProps }, }) {
  const [queryClient] = React.useState(() => new QueryClient())
  axios.defaults.withCredentials = true;


  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default wrapper.withRedux(MyApp)