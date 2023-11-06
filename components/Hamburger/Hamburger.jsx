import { useState } from "react";
import styles from "./Hamburger.module.scss";

export default function Hamburger({ onClick }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleChange = (e) => {
    const updatedState = !isOpen;
    setIsOpen(updatedState);

    if (typeof onClick === "function") {
      onClick(e, updatedState);
    }
  };

  return (
    <button
      className={`${styles.hamburger} ${isOpen ? "" : styles.closed}`}
      onClick={handleChange}
    >
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </button>
  );
}
