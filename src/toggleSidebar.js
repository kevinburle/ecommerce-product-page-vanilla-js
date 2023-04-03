import get from "./getElement.js";
import { hideCart } from "./toggleCart.js";

const toggleBtn = get(".toggle-btn");
const closeBtn = get(".close-btn");
const sidebar = get(".sidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.add("show");
  // hide cart if sidebar is opened
  hideCart();
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show");
});
