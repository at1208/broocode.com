import Head from "next/head";

export default function Header() {
  return (
    <Head>
      <title>{`${process.env.NEXT_PUBLIC_APP_NAME} | Bro lets code`}</title>
      <meta
        name="description"
        content="Broocode is a space for the coders which provide you with coding problems with their solutions ranging from beginner to professional."
      />
      <link rel="canonical" href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}`} />
      <meta
        property="og:title"
        content={`Broocode is a space for the coders which provide you with coding problems with their solutions ranging from beginner to professional. | ${process.env.NEXT_PUBLIC_APP_NAME}`}
      />
      <meta
        property="og:description"
        content="Broocode is a space for the coders which provide you with coding problems with their solutions ranging from beginner to professional."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`${process.env.NEXT_PUBLIC_DOMAIN_URL}`}
      />
      <meta
        property="og:site_name"
        content={`${process.env.NEXT_PUBLIC_APP_NAME}`}
      />
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/vedifly.svg`}
      />
      <meta
        property="og:image:secure_url"
        content={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/vedifly.svg`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta
        property="fb:app_id"
        content={`${process.env.NEXT_PUBLIC_FB_APP_ID}`}
      />
    </Head>
  );
}
