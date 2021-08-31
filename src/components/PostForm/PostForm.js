import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { motion } from "framer-motion";

import styles from "./PostForm.module.scss";

const useStyles = makeStyles((theme) => ({
  formContent: {
    marginBottom: "1em",
    color: "#b4a5a5",
  },
  input: {
    "&::placeholder": {
      fontStyle: "italic",
      fontFamily: "Source Sans Pro",
      color: "#b4a5a5",
    },
    fontSize: "1.4em",
    fontFamily: "Source Sans Pro",
    color: "#b4a5a5",
  },
  multilineColor: {
    color: "#b4a5a5",
  },
}));

const PostForm = ({ onSubmit }) => {
  const classes = useStyles();

  function handleOnSubmit(e) {
    const { currentTarget } = e;

    const fields = Array.from(currentTarget.elements);
    const data = {};

    fields.forEach((field) => {
      if (!field.name) return;
      data[field.name] = field.value;
    });

    if (typeof onSubmit === "function") {
      onSubmit(data, e);
    }
  }

  const formVariants = {
    opened: {},
    closed: {},
    hidden: { opacity: 0, y: +20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.form
      onSubmit={handleOnSubmit}
      className={styles.form}
      initial="hidden"
      animate="visible"
      variants={formVariants}
      transition={{ ease: "easeOut", duration: 1.2 }}
    >
      <TextField
        id="filled-full-width"
        name="content"
        multiline
        style={{ background: "#301b3f", color: "#b4a5a5" }}
        placeholder="What are you thinking now?"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        className={classes.formContent}
        InputProps={{
          classes: { input: classes.input },
        }}
      />
      <motion.button
        className={styles.formButton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Add New Post
      </motion.button>
    </motion.form>
  );
};

export default PostForm;
