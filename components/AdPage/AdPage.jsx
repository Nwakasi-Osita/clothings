import { Explora } from "next/font/google";
import styles from "./AdPage.module.css";
import { Container } from "../Container/Container";

export default function AdPage() {
  return (
    <Container className={styles.AdPageSection}>
      <div className={styles.sideBar}>
        <div className={styles.sideBarexploreSectionText}>
          <h2>EXPLORE NEW AND POPULAR STYLES</h2>
        </div>
        <div className={styles.sideBarexploreSectionImg}>
          <img src="image/explore pic.png" />
          <div className={styles.sideBarProductOverlay}>
            {" "}
            <a href="">
              <div className={styles.sideBaritemType}>
                <p>Manto </p>
              </div>
              <div className={styles.sideBarproductAmount}>
                <p>86 Product</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.AdPageExploreSection}>
        <div className={styles.exploreSectionText}>
          <img src="image/01.png" />
          <div className={styles.productOverlay}>
            <a href="">
              {" "}
              <div className={styles.itemType}>
                <p>Jeans</p>
              </div>
              <div className={styles.productAmount}>
                <p>200 Product</p>
              </div>
            </a>
          </div>
        </div>

        <div className={styles.exploreSectionText}>
          <img src="image/03.png" />
          <div className={styles.productOverlay}>
            <a href="">
              {" "}
              <div className={styles.itemType}>
                <p>Coat</p>
              </div>
              <div className={styles.productAmount}>
                <p>520 Product</p>
              </div>
            </a>
          </div>
        </div>

        <div className={styles.exploreSectionText}>
          <img src="image/02.png" />
          <div className={styles.productOverlay}>
            <a href="">
              {" "}
              <div className={styles.itemType}>
                <p>Gown</p>
              </div>
              <div className={styles.productAmount}>
                <p>320 Product</p>
              </div>
            </a>
          </div>{" "}
        </div>

        <div className={styles.exploreSectionText}>
          <img src="image/20.png" />
          <div className={styles.productOverlay}>
            {" "}
            <a href="">
              <div className={styles.itemType}>
                <p>Jacket</p>
              </div>
              <div className={styles.productAmount}>
                <p>120 Product</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
