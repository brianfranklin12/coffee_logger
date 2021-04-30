// Assign elements to variables
const addCoffeeBtn = document.querySelector(".add-coffee-btn");
const modal = document.querySelector(".bg-modal");
const modalClose = document.querySelector(".close");
const coffeeTable = document.querySelector(".coffee-table");
const newCoffeeForm = document.querySelector(".new-coffee-form");
const coffeeName = document.getElementById("coffee-name");
const coffeeRoaster = document.getElementById("coffee-roaster");
const coffeeVariety = document.getElementById("coffee-variety"); 
const coffeeProcess = document.getElementById("coffee-process");
const coffeeDelete = document.querySelectorAll("delete-coffee-x");

// Event Listeners

addCoffeeBtn.addEventListener("click", () => {
  modal.style.display = "flex";
})

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
})

newCoffeeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  ApiService.addNewCoffee()
  .then(data => {
    let newCoffee = new Coffee(data);
    newCoffee.renderGridRow();
    modal.style.display = "none";
  })
})

ApiService.getCoffees()
.then(data => data.forEach((coffeeData) => {
  let newCoffee = new Coffee(coffeeData);
  newCoffee.renderGridRow();
  coffeeTable.style.display = "block";
}))