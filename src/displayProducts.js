import productsData from "./data.js";
import get from "./getElement.js";
import formatPrice from "./formatPrice.js";

const productSectionDOM = get(".product-section");

const displayProducts = (data) => {
  productSectionDOM.innerHTML = data
    .map((product) => {
      // destructuring
      const { company, name, price, oldPrice, snippet, id } = product;
      // iterate over image to display thumbnails
      const thumbnails = product.images
        .map((item) => {
          // selected class on the figcaption is by default on the first item of the array
          // it will be dynamically changed with the setMainImage function
          return `<figcaption class="${
            item["data-value"] === 1
              ? "thumbnails-image selected"
              : "thumbnails-image"
          }">
          <img
            src="${item.img}"
            alt="image thumbnails"
            class="img thumb"
            data-value="${item["data-value"]}"
          />
        </figcaption>`;
        })
        .join("");

        console.log(product.images[0].img)

      const showProduct = ` <section class="product-component" data-id="${id}">
        <!-- image gallery -->
        <div class="images-gallery">
          <!-- main image -->
          <figcaption class="main-image">
            <!--prev button -->
            <button class="prev-btn">
              <img src="./images/icon-previous.svg" alt="previous icon" />
            </button>
            <!-- displayed dynamically in the app.js with OOP -->
            <!-- placeholder image is the first image of the array -->
            <img
              src="${product.images[0].img}"
              alt="image product 1"
              class="main img"
              data-value="${product.images[0]["data-value"]}"
            />
            <!--next button -->
            <button class="next-btn">
              <img src="./images/icon-next.svg" alt="next icon" />
            </button>
          </figcaption>
          <!-- gallery thumbnails for desktop -->
          <div class="images-thumbnails">
            ${thumbnails}
          </div>
        </div>
        <!--product description -->
        <article class="product-description">
          <h3 class="company">${company}</h3>
          <h1 class="product-name">${name}</h1>
          <p class="description">
          ${snippet}
          </p>
          <div class="product-offer">
            <p class="price">${formatPrice(
              price
            )} <span class="promotion"> ${product.promotion()}%</span></p>
            <p class="crossed-out-price">${formatPrice(oldPrice)}</p>
          </div>
          <!-- call to action-->
          <div class="call-to-action">
            <div class="quantity-button">
              <button class="minus">
                <img src="./images/icon-minus.svg" alt="min" />
              </button>
              <span class="amount">0</span>
              <button class="plus">
                <img src="./images/icon-plus.svg" alt="plus" />
              </button>
            </div>
            <button type="submit" class="btn add-to-cart">
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill-rule="nonzero"
                />
              </svg>
              add to cart
            </button>
          </div>
        </article>
      </section>`;
      return showProduct;
    })
    .join("");
};

displayProducts(productsData);
