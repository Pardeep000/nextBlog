import React from "react";
import Link from "next/link";
import styles from './button.module.css'

function Button() {
  return (
    <Link href="signup">
      <button className={styles.btn}>Sign Up</button>
    </Link>
  );
}

export default Button;