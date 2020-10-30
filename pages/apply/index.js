import Head from 'next/head';

const ApplyPage = () => (
  <>
    <Head>
      <title>No-Code Overlays | Apply</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <main style={{ textAlign: 'center', maxWidth: 500, margin: '0 auto' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
        }}
      >
        <img
          alt="Site logo."
          src="/nco-logo-round.png"
          width="100"
          height="100"
          style={{ marginRight: 12 }}
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

        <button type="submit">Apply</button>
      </form>
    </main>
  </>
);

export default ApplyPage;
