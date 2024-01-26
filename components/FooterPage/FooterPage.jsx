import { Inter } from "next/font/google";
import styles from "./FooterPage.module.css";

import { Container } from "../Container/Container";

export default function Footer() {
  return (
    <>
      <Container>
        <div className={styles.FooterSectionContainer}>
          <div className={styles.companyFooterDetailSectionContainer}>
            {" "}
            <h3 className={styles.sectionName}>
              <img src="image/nav.png" /> NAVITI <img src="image/nav.png" />
            </h3>
            <div className={styles.companyDetailContainer}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div className={styles.companyContactIconSectionContainer}>
              <ul>
                <li>
                  <a href="">
                    <img src="image/facebook.png" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="image/twitter.png" />
                  </a>
                </li>{" "}
                <li>
                  <a href="">
                    <img src="image/linkdin.png" />
                  </a>
                </li>{" "}
                <li>
                  <a href="">
                    <img src="image/instagram.png" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.itemCatalogSectionContainer}>
            <h3 className={styles.sectionName}>CATALOG</h3>

            <div className={styles.itemCatalogLinkSectionContainer}>
              <ul>
                <li>
                  <a href="">
                    {" "}
                    <p> Necklaces</p>
                  </a>
                </li>{" "}
                <li>
                  <a href="">
                    <p>hoodies</p>
                  </a>
                </li>{" "}
                <li>
                  <a href="">
                    <p>Jewelry Box</p>
                  </a>
                </li>{" "}
                <li>
                  <a href="">
                    <p>t-shirt</p>
                  </a>
                </li>{" "}
                <li>
                  <a href="">
                    <p> jacket</p>
                  </a>
                </li>{" "}
              </ul>
            </div>
          </div>

          <div className={styles.aboutCompanySectionContainer}>
            <h3 className={styles.sectionName}>ABOUT US</h3>

            <ul>
              <li>
                <a href="">
                  <p> Our Producers</p>
                </a>
              </li>
              <li>
                <a href="">
                  <p>Sitemap</p>
                </a>
              </li>{" "}
              <li>
                <a href="">
                  <p>FAQ</p>
                </a>
              </li>{" "}
              <li>
                <a href="">
                  <p>About Us</p>
                </a>
              </li>{" "}
              <li>
                <a href="">
                  <p>Terms & Conditions</p>
                </a>
              </li>{" "}
            </ul>
          </div>

          <div className={styles.customerServiceSectionContainer}>
            <h3 className={styles.sectionName}>CUSTOMER SERVICES</h3>

            <ul>
              <li>
                <a href="">
                  <p> Contact Us</p>
                </a>
              </li>
              <li>
                <a href="">
                  <p>Track Your Order</p>
                </a>
              </li>{" "}
              <li>
                <a href="">
                  <p>Product Care & Repair</p>
                </a>
              </li>{" "}
              <li>
                <a href="">
                  <p>Book an Appointment</p>
                </a>
              </li>{" "}
              <li>
                <a href="">
                  <p>Shipping & Returns</p>
                </a>
              </li>{" "}
            </ul>
          </div>
        </div>
      </Container>
      <div className={styles.bottomSectionContainer}></div>
      
    </>
  );
}
