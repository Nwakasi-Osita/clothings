import { Inter } from "next/font/google";
import styles from "./InstagramContactPage.module.css";
import { Container } from "../Container/Container";

{
  /* <script
  src="https://kit.fontawesome.com/9b1b30dbc2.js"
  crossorigin="anonymous"
></script>; */
}

<script
  // you might need to get a newer version
  src="https://kit.fontawesome.com/fbadad80a0.js"
  crossOrigin="anonymous"
></script>;

export default function InstagramContact() {
  return (
    <>
      <Container>
        <div className={styles.instagramContactContainer}>
          {/* <!-- title --> */}
          <div className={styles.instagramContactContainerSection}>
            <div className={styles.titleText}>
              <h2>Follow products and discounts on Instagram</h2>
            </div>

            <div className={styles.webDetails}>
              <div className={styles.webContainer}>
                <img src="image/06.png" />

                <div className={styles.imgText}>
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </div>

              <div className={styles.webContainer}>
                <img src="image/07.png" />
                <div className={styles.imgText}>
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </div>

              <div className={styles.webContainer}>
                <img src="image/09.png" />
                <div className={styles.imgText}>
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </div>

              <div className={styles.webContainer}>
                <img src="image/05.png" />
                <div className={styles.imgText}>
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </div>

              <div className={styles.webContainer}>
                <img src="image/08.png" />
                <div className={styles.imgText}>
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </div>

              <div className={styles.webContainer}>
                <img src="image/10.png" />
                <div className={styles.imgText}>
                  <i class="fa-brands fa-instagram">hdhdh</i>
                </div>
              </div>
            </div>

            <div className={styles.subscriberText}>
              <h2>Or subscribe to the newsletter</h2>
            </div>
          </div>

          <div className={styles.customerInfoContainer}>
            <div className={styles.customerEmailContainer}>
              <input
                id={styles.email}
                type="text"
                placeholder="Email Adress..."
              ></input>
            </div>

            <div className={styles.customerSubmitContainer}>
              <a href="">
                {" "}
                <h2>Submit</h2>
                {/* <div className={styles.customerSubmitUnderline}></div> */}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
