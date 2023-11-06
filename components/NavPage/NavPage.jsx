import styles from "./NavPage.module.css";
import Link from "next/link";
import { useState } from "react";

import { Inter } from "next/font/google";
import Hamburger from "../Hamburger/Hamburger";

import { Container } from "../Container/Container";

export default function Nav() {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleSideMenuChange = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      <Container className={styles.nav}>
        <div className={styles.topNav}>
          <div className={styles.searchLink}>
            <a href="">
              {" "}
              <img src="image/search.png" />
            </a>
          </div>
          <div className="companyName">
            {" "}
            <h2>
              <img src="image/nav.png" /> NAVITI <img src="image/nav.png" />
            </h2>
          </div>

          <div className={styles.accountAndShoppingSection}>
            <div className={styles.shoppingSection}>
              <a href="">
                {" "}
                <img src="image/account.png" />
                <h3>Account</h3>
              </a>
            </div>
            <div className={styles.shoppingSection}>
              <a href="">
                {" "}
                <img src="image/bag.png" />
                <h3>Shopping</h3>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.underline}></div>

        <div className={styles.bottomNav}>
          <div className={styles.navTop}>
            <div className={styles.menuBtn}>
              <div className={styles.bar1}></div>
              <div className={styles.bar2}></div>
              <div className={styles.bar3}></div>
            </div>
          </div>
          <a href="">
            <h3> Jewelry & Accessories</h3>
          </a>

          <a href="">
            <h3> Clothing & Shoes</h3>
          </a>

          <a href="">
            <h3>Home & Living</h3>
          </a>
          <a href="">
            <h3>Wedding & Party</h3>
          </a>
          <a href="">
            <h3>Toys & Entertainment</h3>
          </a>
          <a href="">
            <h3>Art & Collectibles</h3>
          </a>
          <a href="">
            <h3>Craft Supplies & Tools</h3>
          </a>
        </div>
      </Container>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
      <script src="script.js"></script>
    </>
  );
}
