import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@material-ui/core/Button";

import styles from "./NavBar.module.scss";
import { useAuth } from "../../hooks/useAuth";

const NavBar = () => {
  const { user, logIn, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const iconVariants = {
    opened: {
      rotate: 45,
      scale: 2,
    },
    closed: {
      rotate: 0,
      scale: 2,
    },
  };

  const menuVariants = {
    opened: {
      top: 0,
    },
    closed: {
      top: "-90vh",
    },
  };

  return (
    <div>
      <motion.svg
        initial={false}
        variants={iconVariants}
        animate={isOpen ? "opened" : "closed"}
        onClick={() => setIsOpen((state) => !state)}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svgDiv}
      >
        <path
          d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
          fill="#fff"
        />
      </motion.svg>
      <motion.div
        className={styles.menu}
        initial={false}
        variants={menuVariants}
        animate={isOpen ? "opened" : "closed"}
      >
        {!user && (
          <Button onClick={logIn}>
            <h1>Log In</h1>
          </Button>
        )}
        {user && (
          <Button onClick={logOut}>
            <h1>Log In</h1>
          </Button>
        )}
        <Link href="https://github.com/pepsialmighty/my-blog" passHref={true}>
          <Button onClick={logOut}>
            <h1>Visit Github</h1>
          </Button>
        </Link>
        <Link
          href="https://assets.ctfassets.net/449mcwf87tn4/2wDf2yYSCwyhudfgE1NGp8/da9dce6097a9d1a515af8e3bf1e3494f/Nguyen_Nguyen_-_Integrify_CV_-_07.05.2021.pdf"
          passHref={true}
        >
          <Button onClick={logOut}>
            <h1>Resume</h1>
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NavBar;
