// components/SEO/CustomHead.js
import { NextSeo } from 'next-seo';
import Head from 'next/head';

const CustomHead = ({ 
  title, 
  description, 
  canonical, 
  openGraph, 
  additionalMetaTags = [],
  structuredData = null 
}) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        openGraph={openGraph}
        additionalMetaTags={additionalMetaTags}
      />
      {structuredData && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        </Head>
      )}
    </>
  );
};

export default CustomHead;