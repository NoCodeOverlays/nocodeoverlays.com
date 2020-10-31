import Head from 'next/head';
import Link from 'next/link';
import { firebaseAPI } from '../lib/firebase';
import styles from '../stylesheets/pages.module.scss';

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
        <h1>No-Code Overlays</h1>
        <p>
          Empowering anyone to create interactive streaming overlays without
          learning how to code.
        </p>
        <h2>Recent Blog Posts</h2>
        <div>
          {posts.map((post) => (
            <div>
              <h3>{post.title}</h3>
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
          <input type="email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  </div>
  // <div className={styles.Blog}>
  //   <header>
  //     <h1>
  //       <Link href="/">
  //         <a>No-Code Overlays</a>
  //       </Link>{' '}
  //       &mdash; The Blog
  //     </h1>
  //     <p>
  //       Empowering anyone to create interactive streaming overlays without
  //       learning how to code.
  //     </p>
  //   </header>
  //   <main>
  //     {posts.map((post) => (
  //       <article>
  //         <div>
  //           <h2>{post.title}</h2>
  //           <p>
  //             <em>Published {getPrettyDate(post.created_at)}</em>
  //           </p>
  //         </div>
  //         <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
  //       </article>
  //     ))}
  //   </main>
  // </div>
);

export const getStaticProps = async () => {
  const posts = (await firebaseAPI('getBlogPosts')) || [];

  console.log(posts);

  return { props: { posts } };
};

export default BlogPage;
