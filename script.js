const minus = document.querySelector(".minus");
const orderNumber = document.querySelector(".order_number");
const plus = document.querySelector(".plus");
const button = document.querySelector(".button");
const secondLast = document.querySelector(".second_last");
const svg = document.querySelector("svg");
const checkout = document.querySelector(".checkout");
const checkoutPrice = document.querySelector(".checkout_price");
const checkoutLast = document.querySelector(".checkout_last");
const cartValue = document.querySelector(".cartNumber");
const absent = document.querySelector(".absent");
const filled = document.querySelector(".checkout_filled");
const image = document.querySelector(".image_product img");
const mainFirst = document.querySelector(".main_first");
const shownModal = document.querySelector(".shown_modal");
const body = document.querySelector("body");
const hamburger = document.querySelector(".menu");
const close = document.querySelector(".close");
const menu = document.querySelector(".links");
let number = parseInt(orderNumber.textContent);
let cartNumber;

minus.addEventListener("click", () => {
  number -= 1;
  orderNumber.textContent = number;
});
plus.addEventListener("click", () => {
  number += 1;
  orderNumber.textContent = number;
});
button.addEventListener("click", () => {
  const p = document.createElement("p");
  p.setAttribute("class", "lmao");
  cartValue.appendChild(p);
  p.textContent = number;
  secondLast.appendChild(cartValue);
  checkoutPrice.textContent = `$125 x ${number}`;
  let result = eval(number) * 125;
  checkoutLast.textContent = `$${result}`;
  cartValue.classList.toggle("none");
  cartNumber = cartValue;
});

svg.addEventListener("click", () => {
  if (!cartValue.hasChildNodes()) {
    filled.classList.toggle("none");
    const p = document.createElement("p");
    p.setAttribute("class", "cart_empty");
    p.textContent = "Your cart is empty";
    checkout.appendChild(p);
    console.log("works");
  } else {
    filled.classList.remove("none");
  }
  checkout.classList.toggle("none");
});

hamburger.addEventListener("click", function () {
  menu.classList.toggle("active");
});

close.addEventListener("click", () => {
  menu.classList.remove("active");
});
