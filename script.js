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
const mainFirst = document.querySelector(".main_first");
const shownModal = document.querySelector(".shown_modal");
const body = document.querySelector("body");
const hamburger = document.querySelector(".menu");
const close = document.querySelector(".close");
const menu = document.querySelector(".links");
const pTwo = document.createElement("p");
const deleteButton = document.querySelector(".delete");
const slider = document.querySelector(".slider");
const closeSlider = document.querySelector(".slider-close");
const prev = document.querySelector(".previous");
const next = document.querySelector(".next");
const elements = document.querySelectorAll(".product_one");
const imageChange = document.querySelectorAll(".image_change");
let number = parseInt(orderNumber.textContent);
let currentNumber = 0;
let currentIndex = 0;
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
    pTwo.setAttribute("class", "cart_empty");
    pTwo.textContent = "Your cart is empty";
    checkout.appendChild(pTwo);
  } else {
    filled.classList.remove("none");
    pTwo.classList.add("none");
  }
  checkout.classList.toggle("none");
});

hamburger.addEventListener("click", function () {
  menu.classList.toggle("active");
});

close.addEventListener("click", () => {
  menu.classList.remove("active");
});

deleteButton.addEventListener("click", () => {
  filled.classList.add("none");
  pTwo.classList.remove("none");
  cartNumber.classList.add("none");
  orderNumber.textContent = 0;
});

imageChange.forEach((image) => {
  image.addEventListener("click", () => {
    slider.classList.remove("none");
  });
});

closeSlider.addEventListener("click", () => {
  slider.classList.add("none");
});

prev.addEventListener("click", () => {
  elements[currentIndex].classList.add("none");
  currentIndex = (currentIndex - 1 + elements.length) % elements.length;
  elements[currentIndex].classList.remove("none");
});

prev.addEventListener("click", () => {
  imageChange[currentNumber].classList.add("none");
  currentNumber = (currentNumber - 1 + image.length) % imageChange.length;
  imageChange[currentNumber].classList.remove("none");
});

next.addEventListener("click", () => {
  elements[currentIndex].classList.add("none");
  currentIndex = (currentIndex + 1) % elements.length;
  elements[currentIndex].classList.remove("none");
});

next.addEventListener("click", () => {
  imageChange[currentNumber].classList.add("none");
  currentNumber = (currentNumber + 1) % imageChange.length;
  imageChange[currentNumber].classList.remove("none");
});
