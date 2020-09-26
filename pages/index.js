import { useState } from "react";
import Head from "next/head";

import styles from "../stylesheets/pages.module.scss";

const getCountdownText = () => {
  const launchDate = new Date("October 31, 2020 21:00:00").getTime();
  const now = new Date().getTime();
  const difference = launchDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

const HomePage = () => {
  const [timeLeft, setTimeLeft] = useState(getCountdownText());

  setInterval(() => {
    setTimeLeft(getCountdownText());
  }, 1000);

  return (
    <div className={styles.Home}>
      <Head>
        <title>No-Code Overlays</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div>
        <div className={styles["Home--header"]}>
          <h1>No-Code Overlays</h1>
          <p>
            Empowering anyone to create interactive streaming overlays without
            learning how to code.
          </p>
        </div>

        <div className={styles["Home--body"]}>
          <div>
            <h2>Coming Soon!</h2>
            <p>October 31st, 2020 5pm ET</p>
            <p>{timeLeft}</p>
            <p>check in periodically for details</p>
          </div>
        </div>

        <div className={styles["Home--footer"]}>
          Made by{" "}
          <a href="https://twitter.com/ashleemboyer" target="_blank">
            Ashlee M Boyer
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
