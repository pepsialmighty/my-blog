import Head from "next/head";

import { useAuth } from "../hooks/useAuth";

import Bio from "../components/Bio";
import Post from "../components/Post";
import PostForm from "../components/PostForm";
import styles from "../styles/Home.module.scss";
import profilePic from "../../public/static/images/profile.jpg";

export default function Home() {
  const { user, logIn } = useAuth();

  console.log("user", user);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>
        <button onClick={logIn}>Log In</button>
      </p>

      <main className={styles.main}>
        <Bio
          headshot={profilePic}
          name="Nguyen Nguyen"
          tagline="A traveller on his journey to universe knowledge!"
          role="Fullstack Developer @ Integrify"
        />

        <ul className={styles.post}>
          <li>
            <Post content="Hey I'm a new post" date="6/22/2021" />
          </li>
          <li>
            <Post
              content="
              I’m working with Figma trying to design a new website that show
              all of my tweets!"
              date="2/26/2021"
            />
          </li>
          <li>
            <Post
              content="
              I’m working with Figma trying to design a new website that show
              all of my tweets!"
              date="2/26/2021"
            />
          </li>
        </ul>

        <PostForm />
      </main>
    </div>
  );
}
