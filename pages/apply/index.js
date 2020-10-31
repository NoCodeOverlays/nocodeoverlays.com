import Head from 'next/head';

const ApplyPage = () => (
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
      <title>No-Code Overlays | Apply</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <main
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
      <div
        style={{
          marginBottom: 32,
        }}
      >
        <img
          alt="Site logo."
          src="/nco-logo-round.png"
          width="100"
          height="100"
          style={{ width: 100, marginBottom: 12 }}
        />
        <h1>Apply to test No-Code Overlays</h1>
      </div>
      <p
        style={{ lineHeight: '1.3rem', textAlign: 'justify', marginBottom: 32 }}
      >
        If you'd like to test the alpha version of No-Code Overlays for free,
        please submit this form. Because alpha testers will be permitted to use
        No-Code Overlays for life at no charge, there are a limited number of
        spots. It is important that you're an active streamer so that you can
        adequately test. If you're accepted to be an alpha tester, you will
        receive an email at the address you provide with information on getting
        set up.
      </p>
      <form
        name="alpha-application"
        method="POST"
        data-netlify="true"
        action="/apply/thanks"
        style={{ textAlign: 'right' }}
      >
        <input type="hidden" name="form-name" value="alpha-application" />

        <label htmlFor="name">Your name</label>
        <input id="name" name="name" type="text" />

        <label htmlFor="email">Your email address</label>
        <input id="email" name="email" type="email" />

        <label htmlFor="link">Link to your channel</label>
        <input id="link" name="link" type="text" />

        <button
          type="submit"
          style={{ backgroundColor: '#dd227c', fontWeight: 'bold' }}
        >
          Apply
        </button>
      </form>
    </main>
  </div>
);

export default ApplyPage;
