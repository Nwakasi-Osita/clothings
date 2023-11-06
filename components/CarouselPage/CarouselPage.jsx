import { Inter } from "next/font/google";
import styles from "./CarouselPage.module.css";
import Button from "../Button/Button";
import { Container } from "../Container/Container";

export default function Carousel() {
  return (
    <>
      <div className={styles.carouselSection}>
        <div className={styles.carouselImageContainer}>
          <img src="image/zara-bck-text.png" />
        </div>
        <Container className={styles.container}>
          <div className={styles.carouselDetails}>
            <div className={styles.brandLogoContainer}>
              <img src="image/zara-logo.png" />
            </div>

            <p>
              Lustrous yet understated. The new evening wear collection
              exclusively offered at the reopened Giorgio Armani boutique in Los
              Angeles.
            </p>
            <div className={styles.carouselDetailLinkContainer}>
              {" "}
              <a href="">
                <Button type={"primary"} size={"xl"}>
                  {" "}
                  See Collection
                </Button>{" "}
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
