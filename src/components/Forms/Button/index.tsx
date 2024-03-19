import React from "react";
import styles from "./styles.module.css";

type Button = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: Button) {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
}
