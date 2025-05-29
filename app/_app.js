import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config.js';
import '../styles/globals.css';

// For animation library
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;