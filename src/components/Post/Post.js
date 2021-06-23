import { FaHeart, FaShareAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import styles from "./Post.module.scss";

const Post = ({ content, date }) => {
  const postVariants = {
    opened: {},
    closed: {},
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className={styles.post}
      initial="hidden"
      animate="visible"
      variants={postVariants}
      transition={{ ease: "easeOut", duration: 0.8, type: "tween" }}
    >
      <div className={styles.postImage}>
        <div className={styles.backgroundImage}></div>
        <div className={styles.publicationData}>
          <div className={styles.clickMe}>
            <h1>Read More</h1>
          </div>
        </div>
      </div>
      <div className={styles.postText}>
        <p className={styles.postContent}>{content}</p>
        <ul className={styles.postMeta}>
          <li className={styles.postMetaData}>
            <FaHeart />
            34
          </li>
          <li className={styles.postMetaData}>
            <FaShareAlt />
            Share
          </li>
          <li className={styles.postMetaData}>{date}</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Post;
