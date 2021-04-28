// Assign elements to variables
const addCoffeeBtn = document.querySelector(".add-coffee-btn");
const modal = document.querySelector(".bg-modal");
const modalClose = document.querySelector(".close");

// Event Listeners

addCoffeeBtn.addEventListener("click", () => {
  modal.style.display = "flex";
})

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
})