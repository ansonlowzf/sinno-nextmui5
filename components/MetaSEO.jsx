import Head from "next/head";

const MetaSEO = ({ pageTitle, pageDesc, pagePath, metaImg }) => {
  return (
    <Head>
      <title>{pageTitle} | Stone Innovations Enterprise</title>
      <meta name="description" content={pageDesc} key="desc" />
      <meta property="og:type" content="website" />
      <meta
        name="og:title"
        property="og:title"
        content={`${pageTitle} | Stone Innovations Enterprise`}
      />
      <meta
        name="og:description"
        property="og:description"
        content={pageDesc}
      />
      <meta
        property="og:url"
        content={`https://www.stoneinnovations.com.my${pagePath}`}
      />
      <meta property="og:image" content={metaImg} />
    </Head>
  );
};

export default MetaSEO;
