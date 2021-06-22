import { useEffect, useState } from "react";
import Head from "next/head";

import { useAuth } from "../hooks/useAuth";
import { getAllPosts, createPost } from "../lib/posts";

import Bio from "../components/Bio";
import Post from "../components/Post";
import PostForm from "../components/PostForm";
import styles from "../styles/Home.module.scss";
import profilePic from "../../public/static/images/profile.jpg";

export default function Home({ posts: defaultPosts }) {
  const { user, logIn, logOut } = useAuth();
  const [posts, setPosts] = useState(defaultPosts);

  const postsSorted = posts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/posts`,
      );
      const { posts } = await response.json();
      setPosts(posts);
    };

    getData();
  }, []);

  const handleOnSubmit = async (data, e) => {
    e.preventDefault();

    await createPost(data);

    const posts = await getAllPosts();
    setPosts(posts);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!user && (
        <p>
          <button onClick={logIn}>Log In</button>
        </p>
      )}
      {user && (
        <p>
          <button onClick={logOut}>Log Out</button>
        </p>
      )}

      <main className={styles.main}>
        <Bio
          headshot={profilePic}
          name="Nguyen Nguyen"
          tagline="A traveller on his journey to universe knowledge!"
          role="Fullstack Developer @ Integrify"
        />

        <ul className={styles.post}>
          {postsSorted.map((post) => {
            const { content, id, date } = post;
            return (
              <li key={id}>
                <Post
                  content={content}
                  date={new Intl.DateTimeFormat("en-US", {
                    dateStyle: "short",
                    timeStyle: "short",
                  }).format(new Date(date))}
                />
              </li>
            );
          })}
        </ul>

        {user && <PostForm onSubmit={handleOnSubmit} />}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  // const posts = await getAllPosts();

  return {
    props: {
      posts: [],
    },
  };
}
