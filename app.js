// import
import get from "./src/getElement.js";
import { displayCart, hideCart } from "./src/toggleCart.js";
import getByDataSet from "./src/getByDataset.js";
import displayCartItems from "./src/displayCartItems.js";
import productsData from "./src/data.js";

// global imports
import "./src/toggleSidebar.js";
import "./src/toggleCart.js";
import "./src/displayProducts.js";
import "./src/displayCartBadge.js";

function Product(element, initialAmount) {
  this.amount = initialAmount;
  // target
  this.minBtn = element.querySelector(".minus");
  this.plusBtn = element.querySelector(".plus");
  this.valueDOM = element.querySelector(".amount");
  this.AddToCartDOM = element.querySelector(".add-to-cart");
  this.id = element.dataset.id;
  this.mainImageDOM = element.querySelector(".main");
  this.list = [...element.querySelectorAll(".thumb")];
  this.imagesGalleryDOM = element.querySelector(".images-gallery");

  // target modal & modal element
  this.modal = get(".modal");
  this.modalGalleryDOM = this.modal.querySelector(".images-gallery");
  this.mainImageModalDOM = this.modal.querySelector(".main");
  this.imagesThumbModalDOM = this.modal.querySelector(".images-thumbnails");

  // binding
  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.addToCart = this.addToCart.bind(this);
  this.modalListener = this.modalListener.bind(this);

  // event listener
  this.plusBtn.addEventListener("click", this.increase);
  this.minBtn.addEventListener("click", this.decrease);
  this.AddToCartDOM.addEventListener("click", this.addToCart);
  this.imagesGalleryDOM.addEventListener(
    "click",
    function (e) {
      this.setupModal();
      this.setupGallery(e.target);
      if (e.target.classList.contains("main")) {
        this.openModal();
      }
    }.bind(this)
  );
}

Product.prototype.increase = function () {
  this.amount++;
  this.valueDOM.textContent = this.amount;
};

Product.prototype.decrease = function () {
  if (this.amount < 1) {
    this.amount = 0;
    return;
  }
  this.amount--;
  this.valueDOM.textContent = this.amount;
};

Product.prototype.addToCart = function () {
  if (this.amount > 0) {
    // open cart
    displayCart();
    // display items with data from data.js and not from the DOM
    displayCartItems(this.id, this.amount, productsData);
    // hide cart after 3 seconds (asynchronous)
    setTimeout(() => {
      hideCart();
    }, 3000);
    // reset amount value to 0
    this.amount = 0;
    this.valueDOM.textContent = 0;
  }
};

Product.prototype.setMainImage = function (selectedImage) {
  // selected image = image selected from the thumbnails list
  // remove selected class if selected image !== current image
  if (selectedImage.dataset.value !== this.mainImageDOM.dataset.value) {
    this.list[
      this.mainImageDOM.dataset.value - 1
    ].parentElement.classList.remove("selected");

    this.listModal[
      this.mainImageDOM.dataset.value - 1
    ].parentElement.classList.remove("selected");
  }

  this.mainImageDOM.src = selectedImage.src;
  this.mainImageDOM.dataset.value = selectedImage.dataset.value;

  this.mainImageModalDOM.src = selectedImage.src;
  this.mainImageModalDOM.dataset.value = selectedImage.dataset.value;

  //add selected class if selected image === current image
  if (selectedImage.dataset.value === this.mainImageDOM.dataset.value) {
    this.list[selectedImage.dataset.value - 1].parentElement.classList.add(
      "selected"
    );
    this.listModal[selectedImage.dataset.value - 1].parentElement.classList.add(
      "selected"
    );
  }
};

Product.prototype.prevImage = function (currentIndex) {
  if (currentIndex <= 0) {
    currentIndex = this.list.length - 1;
  } else {
    currentIndex--;
  }
  return currentIndex;
};

Product.prototype.nextImage = function (currentIndex) {
  if (currentIndex >= this.list.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  return currentIndex;
};

// setupGallery used to setup gallery and modal
Product.prototype.setupGallery = function (el) {
  if (el.classList.contains("thumbnails-image")) {
    const selectedImage = el.children[0];
    this.setMainImage(selectedImage);
  } else if (el.classList.contains("prev-btn")) {
    const currentImageIndex = el.nextElementSibling.dataset.value - 1;
    this.setMainImage(this.list[this.prevImage(currentImageIndex)]);
  } else if (el.classList.contains("next-btn")) {
    const currentImageIndex = el.previousElementSibling.dataset.value - 1;
    this.setMainImage(this.list[this.nextImage(currentImageIndex)]);
  }
};

Product.prototype.setupModal = function () {
  // setup modal
  const thumbsModal = this.list
    .map((image) => {
      return `<figcaption class="${
        image.dataset.value === this.mainImageDOM.dataset.value
          ? "thumbnails-image selected"
          : "thumbnails-image"
      }">
  <img
    src="${image.src}"
    alt="image thumbnails"
    class="img thumb"
    data-value="${image.dataset.value}"
  />
  </figcaption>`;
    })
    .join("");

  this.imagesThumbModalDOM.innerHTML = thumbsModal;
  // important target list element in the modal once that dynamic data is imported in the DOM
  this.listModal = [...this.modal.querySelectorAll(".thumb")];
};

Product.prototype.openModal = function () {
  this.setupModal();
  this.mainImageModalDOM.src = this.mainImageDOM.src;
  this.mainImageModalDOM.dataset.value = this.mainImageDOM.dataset.value;

  // open modal
  this.modal.classList.add("open");

  // event listener on modal
  this.modalGalleryDOM.addEventListener("click", this.modalListener);
};

Product.prototype.modalListener = function (e) {
  if (e.target.classList.contains("close-modal")) {
    this.closeModal();
  } else {
    this.setupGallery(e.target);
  }
};

Product.prototype.closeModal = function () {
  this.modal.classList.remove("open");
  this.modalGalleryDOM.removeEventListener("click", this.modalListener);
};

const fallEdition = new Product(getByDataSet("id", 1), 0);
const winterEdition = new Product(getByDataSet("id", 2), 0);
const summerEdition = new Product(getByDataSet("id", 3), 0);
