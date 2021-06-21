import Image from "next/image";

import styles from "./Bio.module.scss";

const Bio = ({ headshot, name, tagline, role }) => {
  return (
    <div className={styles.bio}>
      <div className={styles.bioImage}>
        {/* <Image
          src={headshot}
          alt={`Avatar of ${name}`}
          width={1080}
          height={1390}
          layout="responsive"
        /> */}
        <img src={headshot} alt={`Avatar of ${name}`} />
      </div>
      <div className={styles.bioContent}>
        <p className={styles.bioContentName}>{name}</p>
        <p className={styles.bioContentTagline}>{tagline}</p>
        <p className={styles.bioContentRole}>{role}</p>
      </div>
    </div>
  );
};

export default Bio;
