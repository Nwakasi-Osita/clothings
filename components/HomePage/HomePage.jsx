import { Inter } from "next/font/google";
import NavPage from "../NavPage/NavPage";
import BrandPage from "../BrandPage/BrandPage";
import styles from "./HomePage.module.css";
import AdPage from "../AdPage/AdPage";
import { Container } from "../Container/Container";
import BestSeller from "../BestSellerPage/BestSellerPage";
import InstagramContact from "../InstagramContactPage/InstagramContactPage";
import Footer from "../FooterPage/FooterPage";
import Button from "../Button/Button";

export default function HomePage() {
  return (
    <>
      {/* <div className={styles.homePage}> */}
      <div className={styles.HomePageSection}>
        {" "}
        <NavPage />
        <div className={styles.heroSection}>
          <div className={styles.heroText}>
            <h2>Collections</h2>
            <p>
              you can explore many differnt collection from various brands here.
            </p>
            <Button>
              {" "}
              <a href="">Shop Now</a>
            </Button>
          </div>
          <div className={styles.heroImage}>
            <img src="image/hero pic.png" />
          </div>
        </div>
        <BrandPage />
        <AdPage />
        <BestSeller />
        <InstagramContact />
        <Footer />
      </div>
      {/* </div> */}
    </>
  );
}
