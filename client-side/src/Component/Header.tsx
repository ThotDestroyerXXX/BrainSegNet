import { Link } from "react-router-dom";
import styles from "../Styles/App.module.css";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    const hamMenu = document.querySelector(`.${styles.hamMenu}`);
    const centerMenu = document.querySelector(`.${styles.centerMenu}`);
    if (isOpen) {
      (hamMenu as HTMLElement).style.display = "flex";
      (centerMenu as HTMLElement).style.display = "none";
      setIsOpen(false);
    } else {
      (centerMenu as HTMLElement).style.display = "flex";
      setIsOpen(true);
    }
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div className={styles.hamMenu} onClick={handleMenu}>
          <span></span>
          <span></span>
        </div>
        <div className={styles.leftMenu}>
          <Link to='/'>SegNet</Link>
        </div>
        <div className={styles.centerMenu}>
          <Link to='/'>Home</Link>
          <Link to='/About'>About</Link>
        </div>
        <div className={styles.rightMenu}></div>
      </div>
    </header>
  );
};

export default Header;
