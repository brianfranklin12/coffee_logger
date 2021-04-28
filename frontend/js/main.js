// Assign elements to variables
const addCoffeeBtn = document.querySelector(".add-coffee-btn");
const modal = document.querySelector(".bg-modal");
const modalClose = document.querySelector(".close");
const coffeeTable = document.querySelector(".coffee-table");

// Event Listeners

addCoffeeBtn.addEventListener("click", () => {
  modal.style.display = "flex";
})

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
})

ApiService.getCoffees()
.then(data => data.forEach((coffeeData) => {
  console.log(coffeeData);
  let newCoffee = new Coffee(coffeeData);
  newCoffee.renderTableRow()
}));