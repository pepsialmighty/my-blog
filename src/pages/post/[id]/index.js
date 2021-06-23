import Link from "next/link";
import { motion } from "framer-motion";

import Meta from "../../../components/Meta";
import { getAllPosts, getPostById } from "../../../lib/posts";
import styles from "./Post.module.scss";

const post = ({ post }) => {
  console.log(post);

  // const router = useRouter();
  // const { id } = router.query;

  const postVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div className={styles.post}>
      <Meta title={post.content} />
      <motion.div
        className={styles.container}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={postVariants}
          transition={{
            ease: "easeOut",
            duration: 0.8,
            type: "spring",
            bounce: 0.5,
          }}
          whileHover={{ x: 10 }}
        >
          {post.content}
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={postVariants}
          transition={{
            ease: "easeOut",
            duration: 2,
            type: "spring",
            bounce: 0.7,
          }}
          whileHover={{ x: 12 }}
        >
          {new Intl.DateTimeFormat("en-US", {
            dateStyle: "short",
            timeStyle: "short",
          }).format(new Date(post.date))}
        </motion.p>
        <br />
        <Link href="/" passHref>
          <motion.h1
            className={styles.postButton}
            variants={postVariants}
            transition={{
              ease: "easeOut",
              duration: 0.5,
            }}
            whileHover={{ x: 14 }}
            whileTap={{ scale: 0.9 }}
          >
            Go Back
          </motion.h1>
        </Link>
      </motion.div>
    </motion.div>
  );
};

// export const getServerSideProps = async (context) => {
//   const post = await getPostById(context.params.id);

//   return {
//     props: { post },
//   };
// };

export const getStaticProps = async (context) => {
  const post = await getPostById(context.params.id);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPosts();

  if (!post) {
    return {
      notFound: true,
    };
  }

  const ids = posts.map((post) => post.id);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default post;
