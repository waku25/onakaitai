import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>おなかいた～い</title>
      {/* Open Graph（OG） */}
      <meta property="og:title" content="おなかいた～い" />
      <meta property="og:description" content="おなかいた～い" />
      <meta
        property="og:image"
        content="https://onakaitai.org/images/pain_6.png"
      />
      <meta property="og:url" content="https://onakaitai.org" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="おなかいた～い" />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="おなかいた～い" />
      <meta name="twitter:description" content="おなかいた～い" />
      <meta
        name="twitter:image"
        content="https://onakaitai.org/images/pain_6.png"
      />
      <meta name="twitter:domain" content="https://onakaitai.org" />
    </Head>
  );
};

export default Meta;
