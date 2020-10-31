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

const PostPage = ({ post }) => (
  <div className={styles.Post}>
    <Head>
      <title>No-Code Overlays | {post.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <div>
      <div>
        <Link href="/blog">
          <a>
            <h1>No-Code Overlays</h1>
          </a>
        </Link>
        <p>
          Empowering anyone to create interactive streaming overlays without
          learning how to code.
        </p>
        <article>
          <h2>{post.title}</h2>
          <p>
            <em>Published {getPrettyDate(post.created_at)}</em>
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </article>
      </div>
      <div>
        <div>
          <h2>Stay Updated</h2>
          <p>
            If you'd like to get updates on features and releases right in your
            email box, subscribe to the newsletter!
          </p>
          <form name="nco-newsletter" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="alpha-application" />
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

export const getStaticProps = async ({ params }) => {
  const post = await firebaseAPI('getPostBySlug', params.slug);

  return {
    props: { post },
  };
};

export const getStaticPaths = async () => {
  const posts = await firebaseAPI('getPosts');
  const paths = posts.map((post) => `/blog/${post.slug}`);

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
