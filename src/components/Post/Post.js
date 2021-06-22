import Image from "next/image";

import { FaHeart, FaShareAlt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

import styles from "./Post.module.scss";
import coverPic from "../../../public/static/images/profile.jpg";

const Post = ({ content, date }) => {
  return (
    <div className={styles.post}>
      <div className={styles.postImage}>
        {/* <Image  className={styles.backgroundImage} src={coverPic} alt="cover photo" width="200" height="204" /> */}
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
    </div>
  );
};

export default Post;
