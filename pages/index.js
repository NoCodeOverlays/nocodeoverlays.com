import Head from 'next/head';
import Link from 'next/link';
import styles from '../stylesheets/pages.module.scss';

const HomePage = () => (
  <div className={styles.Home}>
    <Head>
      <title>No-Code Overlays</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <div>
      <h1>No-Code Overlays</h1>
      <p>
        Empowering anyone to create interactive streaming overlays without
        learning how to code.
      </p>
      <Link href="/blog">
        <a>Read the Blog</a>
      </Link>
    </div>
  </div>
);

export default HomePage;
