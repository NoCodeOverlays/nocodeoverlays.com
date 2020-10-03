import Head from "next/head";
import Link from "next/link";

import styles from "../stylesheets/pages.module.scss";

const BlogPage = () => (
  <div className={styles.Blog}>
    <Head>
      <title>No-Code Overlays | Blog</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <header>
      <h1>
        <Link href="/">
          <a>No-Code Overlays</a>
        </Link>{" "}
        &mdash; The Blog
      </h1>
      <p>
        Empowering anyone to create interactive streaming overlays without
        learning how to code.
      </p>
    </header>
    <main>
      <article>
        <div>
          <h2>First Look at the Web App</h2>
          <p>
            <em>Published Friday, October 2nd, 2020</em>
          </p>
        </div>
        <div>
          <p>
            Guess what I did today? I planned the features for the MVP, set up a{" "}
            <a href="https://nextjs.org/docs/getting-started">Next.js</a> app
            and its{" "}
            <a href="https://github.com/NoCodeOverlays/app.nocodeoverlays.com">
              GitHub repository
            </a>
            , <em>and</em> I merged the first PR for the{" "}
            <a href="https://app.nocodeoverlays.com/login">
              No-Code Overlays Web App
            </a>
            ! If you'd like to read all of the details in the PR, you can do so{" "}
            <a href="https://github.com/NoCodeOverlays/app.nocodeoverlays.com/pull/1">
              here
            </a>
            , but I'll give you a quick run down.
          </p>
          <img
            src="https://pbs.twimg.com/media/EjXEFlkWoAAvGX2?format=jpg&name=medium"
            alt="The first merged PR as shown in GitHub."
          />
          <p>
            So, when you arrive at the app, you need to log in with an email and
            password. Having a login keeps everyone's information separate and
            private. I don't want anyone to be able to edit my streaming
            overlay, and no one wants me to edit theirs either! Here's a preview
            of that page:
          </p>
          <img
            src="https://pbs.twimg.com/media/EjXEy0NWoAEa_BS?format=jpg&name=medium"
            alt="The No-Code Overlays login page. It shows email and password inputs in a white card on a dark purple background."
          />
          <p>
            To put all of this together, I added a couple of pages to the app,
            installed the{" "}
            <a href="https://www.npmjs.com/package/firebase">
              Firebase npm package
            </a>
            , set up a new Firebase project, added a test user for logging in,
            and set up some functions for interacting with Firebase auth in{" "}
            <a href="https://github.com/NoCodeOverlays/app.nocodeoverlays.com/blob/master/lib/api.js">
              this API file
            </a>
            . This part was a little tedious, but pretty straightforward!
          </p>
          <p>
            The last step was to handle redirects to the login page when a page
            that requires a logged in user is trying to be reached.{" "}
            <a href="https://nextjs.org/docs/api-reference/next/router#routerpush">
              Next's router
            </a>{" "}
            makes it very easy to redirect, so the hardest part was checking
            with Firebase for a logged in user. In the API file I mentioned, I
            wrote a function for getting the current user. If there's no current
            user, then there's a redirect to the login page.
          </p>
          <p>
            I'm thinking about writing a blog post on this for my personal site,
            but no promises. This project has me pretty busy at the moment! Stay
            tuned for the next update! :)
          </p>
        </div>
      </article>
      <article>
        <div>
          <h2>Challenge Accepted! Just F*ing Ship It.</h2>
          <p>
            <em>Published Thursday, October 1st, 2020</em>
          </p>
        </div>
        <div>
          <p>
            First of all, welcome to the No-Code Overlays blog! I really
            appreciate the time you're taking to read about No-Code Overlays.
            I'm going to format this post like a FAQ, that way anyone can read
            it at anytime and gain the same value.
          </p>

          <h3>Challenge? What challenge?</h3>
          <p>
            <a href="womenmake.com">Women Make</a> has a challenge called Just
            F*ing Ship It. This year is the third edition of the challenge. It's
            not competitive and there's just one thing you have to do: build and
            launch something in 30 days. It has to be launched on October 31st.
            You can read more about the challenge{" "}
            <a href="https://womenmake.com/30-day-challenge-2020">here</a>. My
            project is No-Code Overlays.
          </p>

          <h3>Neat! So, what's No-Code Overlays?</h3>
          <p>
            No-Code Overlays is an idea for a web app that I've been holding
            onto for a few months now, just waiting for the right time to work
            on it. Back in April, when the stay-at-home order first started for
            my area, I found myself needing to find a new way to socialize with
            people. I <em>really</em> missed my local knitting friends, so I
            decided to create a Twitch channel where I could stream myself
            knitting and talk with anyone who decided to hangout in the chat.
          </p>
          <p>
            Not longer after that, I found that people stream coding too! I
            learned all about having different streaming scenes and layouts, all
            depending on how many cameras you wanted to show, you browser
            window, etc. After meeting so many streamers with widely varying
            backgrounds, I realized that the more technical streamers had much
            more complex layouts, or overlays.
          </p>
          <p>
            A lot of these overlays were React apps. They could handle chat
            commands, show fun GIFs, and some even had games that viewers could
            interact with via chat. These overlays are super fun! But I noticed
            that many people I watched didn't have the technical or coding
            knowledge of how to do create interactive overlays. That's when this
            idea came about.
          </p>
          <p>
            No-Code Overlays will empower anyone to create interactive streaming
            overlays without learnign how to code. People will be able to set up
            their video and audio devices, upload images and GIFs, and so much
            more.
          </p>

          <h3>Wow! That sounds like a lot. You can do that in 30 days?</h3>
          <p>
            Nope, I definintely can't get all that into the app in 30 days. What
            I plan to have at the end of this 30-day challenge is an MVP that
            can have features added to it easily. Not only am I going to be
            writing the code for the actual app, I'll also being working on
            making this site look nicer and writing blog posts for updates. This
            page right here is where you'll find those.
          </p>

          <h3>YES that's exciting. What's next?</h3>
          <p>
            In the coming days, I'll be writing up a more rigid plan with the
            exact features I want to include in the MVP for launch and I'll find
            an accessible way to publish that plan. After that, I'll get right
            into the code! I don't have a repository for it yet, but I'll make
            sure there's a link to it in the next blog post. Until then, thanks
            for tuning into the first post! I'm extremely excited about this
            project and it's potential impact. I totally appreciate you sticking
            around to read about it.
          </p>
        </div>
      </article>
    </main>
    <footer>
      Made by{" "}
      <a href="https://twitter.com/ashleemboyer" target="_blank">
        Ashlee M Boyer
      </a>
    </footer>
  </div>
);

export default BlogPage;
