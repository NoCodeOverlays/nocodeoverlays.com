const ThanksPage = () => (
  <div style={{ maxWidth: 500, margin: '0 auto', textAlign: 'center' }}>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
      }}
    >
      <img
        alt="Site logo."
        src="/nco-logo-round.png"
        width="100"
        height="100"
        style={{ marginRight: 24 }}
      />
      <h1>Thank you!</h1>
    </div>
    <p style={{ lineHeight: '1.3rem' }}>
      Your application has been submitted. If you are selected as a tester, you
      will receive an email within 7 business days.
    </p>
  </div>
);

export default ThanksPage;
