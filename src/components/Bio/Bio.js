import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./Bio.module.scss";

const Bio = ({ headshot, name, tagline, role }) => {
  const bioVariants = {
    opened: {},
    closed: {},
    hidden: { opacity: 0, y: +20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      className={styles.bio}
      initial="hidden"
      animate="visible"
      variants={bioVariants}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <div className={styles.bioImage}>
        <Image
          src={headshot}
          alt={`Avatar of ${name}`}
          width="400"
          height="400"
        />
      </div>
      <div className={styles.bioContent}>
        <p className={styles.bioContentName}>{name}</p>
        <p className={styles.bioContentTagline}>{tagline}</p>
        <p className={styles.bioContentRole}>{role}</p>
      </div>
    </motion.div>
  );
};

export default Bio;
