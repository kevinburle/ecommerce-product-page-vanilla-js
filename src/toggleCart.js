import get from "./getElement.js";
import calculateCartHeight from "./calculateCartHeight.js";
import removeItemFromCart from "./removeItemFromCart.js";

const cart = get(".cart");
const cartBtn = get(".cart-btn");
const cartProductsDOM = get(".cart-products");

const displayCart = () => {
  cart.classList.add("show");
  calculateCartHeight();
};

const hideCart = () => {
  cart.classList.remove("show");
  cart.style.height = "0px";
  // remove event listener
  cartProductsDOM.removeEventListener("click", function (e) {
    console.log(e);
    removeItemFromCart(e);
  });
};

const toggleCart = () => {
  if (cart.classList.contains("show")) {
    hideCart();
  } else {
    displayCart();
  }
};

cartBtn.addEventListener("click", toggleCart);

// extra functionnality to add display on mouse hovering

export { displayCart, hideCart };
