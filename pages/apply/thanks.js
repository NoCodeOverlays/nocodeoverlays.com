import Head from 'next/head';

const ThanksPage = () => (
  <div
    style={{
      height: '100%',
      padding: 32,
      paddingTop: 80,
      backgroundImage: "url('/nco-background-purple.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      overflowY: 'scroll',
    }}
  >
    <Head>
      <title>No-Code Overlays | Thanks!</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <div
      style={{
        textAlign: 'center',
        maxWidth: 600,
        margin: '0 auto',
        backgroundColor: '#000000dd',
        padding: '48px 32px',
        color: 'white',
        borderRadius: '4px',
      }}
    >
      <img
        alt="Site logo."
        src="/nco-logo-round.png"
        width="100"
        height="100"
        style={{ width: 100, marginBottom: 12 }}
      />
      <h1>Thank you!</h1>
      <p style={{ lineHeight: '1.3rem', marginTop: 32 }}>
        Your application has been submitted. If you are selected as a tester,
        you will receive an email within 7 business days.
      </p>
    </div>
  </div>
);

export default ThanksPage;
