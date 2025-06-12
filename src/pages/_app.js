// pages/_app.js
import '../styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingContactIcons from '@/components/Home/FloatingContactIcons';
import { useRouter } from 'next/router';
import AltHeader from '@/components/layout/AltHeader';

function MyApp({ Component, pageProps }) {
  const routes = useRouter();


  const isSingle = routes.asPath === '/';
  // console.log(routes,  "routes---------------------------//---------------//-------");
  // console.log(isSingle , "single-------------------//--------------------");
  // console.log(routes.asPath , "as path");
  return (
    <>
      {/* {isSingle ? <Header /> : <AltHeader />} */}
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <FloatingContactIcons />
      {/* <Footer /> */}
    </>
  );
}

export default MyApp;
