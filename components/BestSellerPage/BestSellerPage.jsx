import styles from "./BestSellerPage.module.css";
import { Inter } from "next/font/google";
import { Container } from "../Container/Container";
import CarouselPage from "../CarouselPage/CarouselPage";
import Button from "../Button/Button";
<script
  src="https://kit.fontawesome.com/9b1b30dbc2.js"
  crossorigin="anonymous"
></script>;

export default function BestSeller() {
  return (
    <div>
      <Container>
        <div className={styles.BestSeller}>
          <div className={styles.BestSellerSection}>
            <div className={styles.BestSellerTitle}>
              <h2>Or subscribe to the newsletter</h2>
            </div>

            <div className={styles.itemSection}>
              <div className={styles.itemNavigator}>
                <div className={styles.itemNavigatorUl}>
                  <ul>
                    <li>
                      <a href="">
                        <h3> All product</h3>
                      </a>
                    </li>

                    <li>
                      <a href="">
                        <h4>Shirt </h4>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <h4>Shoes</h4>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <h4> Jacket</h4>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={styles.filterSection}>
                  <a href="">
                    <Button type={"secondary"} size={"sm"}>
                      {/* <h4> */} <img src="image/filter icon.png" /> Filter
                      {/* </h4> */}
                    </Button>{" "}
                  </a>
                </div>
                {/* <div className={styles}>
                 
                </div> */}
              </div>

              <div className={styles.puchaseSection}>
                <div className={styles.itemSectionImg}>
                  <div className={styles.exploreSectionText}>
                    <img src="image/15.png" />
                    <div className={styles.productOverlay}>
                      <a href="">
                        {" "}
                        <div className={styles.itemType}>
                          <p>
                            <i class="fa-duotone fa-heart">heart</i>
                          </p>
                          <p>
                            <i class="fa-duotone fa-magnifying-glass">glass</i>
                          </p>
                        </div>
                        <div className={styles.productAmount}>
                          <p>200 Product</p>
                        </div>
                      </a>
                    </div>
                    <div className={styles.itemName}>
                      <h4>Adicolor Classics Joggers</h4>{" "}
                    </div>
                    <div className={styles.itemDetails}>
                      <div className={styles.itemType}>
                        <h4>Dress</h4>{" "}
                      </div>
                      <div className={styles.itemPrice}>
                        <h4>$63.85</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.itemSectionImg}>
                  <div className={styles.exploreSectionText}>
                    <img src="image/14.png" />
                    <div className={styles.productOverlay}>
                      <a href="">
                        {" "}
                        <div className={styles.itemType}>
                          <p>
                            {" "}
                            <p>
                              <i class="fa-duotone fa-heart"></i>
                            </p>
                            <p>
                              <i class="fa-duotone fa-magnifying-glass"></i>
                            </p>
                          </p>
                        </div>
                        <div className={styles.productAmount}>
                          <p>200 Product</p>
                        </div>
                      </a>
                    </div>
                    <div className={styles.itemName}>
                      <h4>Adicolor Classics Joggers</h4>{" "}
                    </div>
                    <div className={styles.itemDetails}>
                      <div className={styles.itemType}>
                        <h4>Dress</h4>{" "}
                      </div>
                      <div className={styles.itemPrice}>
                        <h4>$63.85</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.itemSectionImg}>
                  <div className={styles.exploreSectionText}>
                    <img src="image/13.png" />
                    <div className={styles.productOverlay}>
                      <a href="">
                        {" "}
                        <div className={styles.itemType}>
                          <p>
                            {" "}
                            <p>
                              <i class="fa-duotone fa-heart"></i>
                            </p>
                            <p>
                              <i class="fa-duotone fa-magnifying-glass"></i>
                            </p>
                          </p>
                        </div>
                        <div className={styles.productAmount}>
                          <p>200 Product</p>
                        </div>
                      </a>
                    </div>
                    <div className={styles.itemName}>
                      <h4>Adicolor Classics Joggers</h4>{" "}
                    </div>
                    <div className={styles.itemDetails}>
                      <div className={styles.itemType}>
                        <h4>Dress</h4>{" "}
                      </div>
                      <div className={styles.itemPrice}>
                        <h4>$63.85</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.itemSectionImg}>
                  <div className={styles.exploreSectionText}>
                    <img src="image/04.png" />
                    <div className={styles.productOverlay}>
                      <a href="">
                        {" "}
                        <div className={styles.itemType}>
                          <p>
                            {" "}
                            <p>
                              <i class="fa-duotone fa-heart"></i>
                            </p>
                            <p>
                              <i class="fa-duotone fa-magnifying-glass"></i>
                            </p>
                          </p>
                        </div>
                        <div className={styles.productAmount}>
                          <p>200 Product</p>
                        </div>
                      </a>
                    </div>
                    <div className={styles.itemName}>
                      <h4>Adicolor Classics Joggers</h4>{" "}
                    </div>
                    <div className={styles.itemDetails}>
                      <div className={styles.itemType}>
                        <h4>Dress</h4>{" "}
                      </div>
                      <div className={styles.itemPrice}>
                        <h4>$63.85</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.itemSectionImg}>
                  <div className={styles.exploreSectionText}>
                    <img src="image/11.png" />
                    <div className={styles.productOverlay}>
                      <a href="">
                        {" "}
                        <div className={styles.itemType}>
                          <p>
                            {" "}
                            <p>
                              <i class="fa-duotone fa-heart"></i>
                            </p>
                            <p>
                              <i class="fa-duotone fa-magnifying-glass"></i>
                            </p>
                          </p>
                        </div>
                        <div className={styles.productAmount}>
                          <p>200 Product</p>
                        </div>
                      </a>
                    </div>
                    <div className={styles.itemName}>
                      <h4>Adicolor Classics Joggers</h4>{" "}
                    </div>
                    <div className={styles.itemDetails}>
                      <div className={styles.itemType}>
                        <h4>Dress</h4>{" "}
                      </div>
                      <div className={styles.itemPrice}>
                        <h4>$63.85</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.itemSectionImg}>
                  <div className={styles.exploreSectionText}>
                    <img src="image/12.png" />
                    <div className={styles.productOverlay}>
                      <a href="">
                        {" "}
                        <div className={styles.itemType}>
                          <p>
                            {" "}
                            <p>
                              <i class="fa-duotone fa-heart"></i>
                            </p>
                            <p>
                              <i class="fa-duotone fa-magnifying-glass"></i>
                            </p>
                          </p>
                        </div>
                        <div className={styles.productAmount}>
                          <p>200 Product</p>
                        </div>
                      </a>
                    </div>
                    <div className={styles.itemName}>
                      <h4>Adicolor Classics Joggers</h4>{" "}
                    </div>
                    <div className={styles.itemDetails}>
                      <div className={styles.itemType}>
                        <h4>Dress</h4>{" "}
                      </div>
                      <div className={styles.itemPrice}>
                        <h4>$63.85</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.itemSectionImg}>
                  <div className={styles.exploreSectionText}>
                    <img src="image/17.png" />
                    <div className={styles.productOverlay}>
                      <a href="">
                        {" "}
                        <div className={styles.itemType}>
                          <p>
                            {" "}
                            <p>
                              <i class="fa-duotone fa-heart"></i>
                            </p>
                            <p>
                              <i class="fa-duotone fa-magnifying-glass"></i>
                            </p>
                          </p>
                        </div>
                        <div className={styles.productAmount}>
                          <p>200 Product</p>
                        </div>
                      </a>
                    </div>
                    <div className={styles.itemName}>
                      <h4>Adicolor Classics Joggers</h4>{" "}
                    </div>
                    <div className={styles.itemDetails}>
                      <div className={styles.itemType}>
                        <h4>Dress</h4>{" "}
                      </div>
                      <div className={styles.itemPrice}>
                        <h4>$63.85</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.itemSectionImg}>
                  <div className={styles.exploreSectionText}>
                    <img src="image/16.png" />
                    <div className={styles.productOverlay}>
                      <a href="">
                        {" "}
                        <div className={styles.itemType}>
                          <p>
                            {" "}
                            <p>
                              <i class="fa-duotone fa-heart"></i>
                            </p>
                            <p>
                              <i class="fa-duotone fa-magnifying-glass"></i>
                            </p>
                          </p>
                        </div>
                        <div className={styles.productAmount}>
                          <p>200 Product</p>
                        </div>
                      </a>
                    </div>
                    <div className={styles.itemName}>
                      <h4>Adicolor Classics Joggers</h4>{" "}
                    </div>
                    <div className={styles.itemDetails}>
                      <div className={styles.itemType}>
                        <h4>Dress</h4>{" "}
                      </div>
                      <div className={styles.itemPrice}>
                        <h4>$63.85</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <CarouselPage />

      <Container>
        {" "}
        <div className={styles.secondBestSeller}>
          <div className={styles.secondBestSellerTitle}>
            <h2>Best sellers</h2>
          </div>

          <div className={styles.seconditemSection}>
            <div className={styles.seconditemNavigator}>
              <div className={styles.seconditemNavigatorUl}>
                <ul>
                  <li>
                    <a href="">
                      <h3> All product</h3>
                    </a>
                  </li>

                  <li>
                    <a href="">
                      <h4>Shirt </h4>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <h4>Shoes</h4>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <h4> Jacket</h4>
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles.secondShowAllSection}>
                <a href="">
                  <Button type={"secondary"} size={"sm"}>
                    Show all
                  </Button>{" "}
                </a>
              </div>
            </div>
          </div>

          <div className={styles.puchaseSecondSection}>
            <div className={styles.itemSectionImg}>
              <div className={styles.exploreSectionText}>
                <img src="image/11.png" />
                <div className={styles.productOverlay}>
                  <a href="">
                    {" "}
                    <div className={styles.itemType}>
                      <p>
                        {" "}
                        <p>
                          <i class="fa-duotone fa-heart"></i>
                        </p>
                        <p>
                          <i class="fa-duotone fa-magnifying-glass"></i>
                        </p>
                      </p>
                    </div>
                    <div className={styles.productAmount}>
                      <p>200 Product</p>
                    </div>
                  </a>
                </div>
                <div className={styles.itemName}>
                  <h4>Adicolor Classics Joggers</h4>{" "}
                </div>
                <div className={styles.itemDetails}>
                  <div className={styles.itemType}>
                    <h4>Dress</h4>{" "}
                  </div>
                  <div className={styles.itemPrice}>
                    <h4>$63.85</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.itemSectionImg}>
              <div className={styles.exploreSectionText}>
                <img src="image/14.png" />
                <div className={styles.productOverlay}>
                  <a href="">
                    {" "}
                    <div className={styles.itemType}>
                      <p>
                        {" "}
                        <p>
                          <i class="fa-duotone fa-heart"></i>
                        </p>
                        <p>
                          <i class="fa-duotone fa-magnifying-glass"></i>
                        </p>
                      </p>
                    </div>
                    <div className={styles.productAmount}>
                      <p>200 Product</p>
                    </div>
                  </a>
                </div>
                <div className={styles.itemName}>
                  <h4>Adicolor Classics Joggers</h4>{" "}
                </div>
                <div className={styles.itemDetails}>
                  <div className={styles.itemType}>
                    <h4>Dress</h4>{" "}
                  </div>
                  <div className={styles.itemPrice}>
                    <h4>$63.85</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.itemSectionImg}>
              <div className={styles.exploreSectionText}>
                <img src="image/04.png" />
                <div className={styles.productOverlay}>
                  <a href="">
                    {" "}
                    <div className={styles.itemType}>
                      <p>
                        {" "}
                        <p>
                          <i class="fa-duotone fa-heart"></i>
                        </p>
                        <p>
                          <i class="fa-duotone fa-magnifying-glass"></i>
                        </p>
                      </p>
                    </div>
                    <div className={styles.productAmount}>
                      <p>200 Product</p>
                    </div>
                  </a>
                </div>
                <div className={styles.itemName}>
                  <h4>Adicolor Classics Joggers</h4>{" "}
                </div>
                <div className={styles.itemDetails}>
                  <div className={styles.itemType}>
                    <h4>Dress</h4>{" "}
                  </div>
                  <div className={styles.itemPrice}>
                    <h4>$63.85</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.itemSectionImg}>
              <div className={styles.exploreSectionText}>
                <img src="image/12.png" />
                <div className={styles.productOverlay}>
                  <a href="">
                    {" "}
                    <div className={styles.itemType}>
                      <p>
                        {" "}
                        <p>
                          <i class="fa-duotone fa-heart"></i>
                        </p>
                        <p>
                          <i class="fa-duotone fa-magnifying-glass"></i>
                        </p>
                      </p>
                    </div>
                    <div className={styles.productAmount}>
                      <p>200 Product</p>
                    </div>
                  </a>
                </div>
                <div className={styles.itemName}>
                  <h4>Adicolor Classics Joggers</h4>{" "}
                </div>
                <div className={styles.itemDetails}>
                  <div className={styles.itemType}>
                    <h4>Dress</h4>{" "}
                  </div>
                  <div className={styles.itemPrice}>
                    <h4>$63.85</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
