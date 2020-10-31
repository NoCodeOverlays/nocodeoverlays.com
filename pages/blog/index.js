import Head from 'next/head';
import Link from 'next/link';
import { firebaseAPI } from '../../lib/firebase';
import styles from '../../stylesheets/pages.module.scss';

const getPrettyDate = (dateTime) => {
  const asDate = new Date(dateTime);
  const options = {
    dateStyle: 'full',
  };
  return asDate.toLocaleDateString('en-US', options);
};

const BlogPage = ({ posts }) => (
  <div className={styles.Blog}>
    <Head>
      <title>No-Code Overlays | Blog</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <div>
      <div>
        <Link href="/">
          <a>
            <h1>No-Code Overlays</h1>
          </a>
        </Link>
        <p>
          Empowering anyone to create interactive streaming overlays without
          learning how to code.
        </p>
        <h2>Recent Blog Posts</h2>
        <div>
          {posts.map((post) => (
            <div>
              <Link href={`/blog/${post.slug}`}>
                <a>
                  <h3>{post.title}</h3>
                </a>
              </Link>
              <p>{getPrettyDate(post.created_at)}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>
          <h2>Stay Updated</h2>
          <p>
            If you'd like to get updates on features and releases right in your
            email box, subscribe to the newsletter!
          </p>
          <form name="nco-newsletter" method="POST" data-netlify="true">
            <input type="email" />
            <button
              type="submit"
              onClick={() => {
                alert('Woo hoo! 🎉 Thanks for subscribing to the newsletter.');
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export const getStaticProps = async () => {
  const posts = (await firebaseAPI('getPosts')) || [];

  console.log(posts);

  return { props: { posts } };
};

export default BlogPage;
