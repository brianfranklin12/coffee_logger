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
const coffeeListPage = document.querySelector(".coffee-list-page");
const logDose = document.querySelector(".log-dose");
const logOutput = document.querySelector(".log-output");
const logGrindSize = document.querySelector(".log-grind-size");
const logBrewTime = document.querySelector(".log-brew-time");
const logBrewMethod = document.querySelector(".log-brew-method");
const logRating = document.querySelector(".log-rating");
const logNotes = document.querySelector(".log-notes");

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

function renderGrid() {
  const main = document.querySelector('main');
  const container = document.createElement('div');
  container.className = "container"
  const logTable = document.createElement('div');
  logTable.className = "log-table"
  const row = document.createElement('div');
  row.className = "log-grid-row";const logDose = document.createElement('div');
  logDose.className = "log-col-dose";
  logDose.innerText = "Dose";
  const logOutput = document.createElement('div');
  logOutput.className = "log-col-output";
  logOutput.innerText = "Yield"
  const logGrindSize = document.createElement('div');
  logGrindSize.className = "log-col-grind-size";
  logGrindSize.innerText = "Grind Size"
  const logBrewTime = document.createElement('div');
  logBrewTime.className = "log-col-brew-time";
  logBrewTime.innerText = "Brew Time"
  const logBrewMethod = document.createElement('div');
  logBrewMethod.className = "log-col-brew-method";
  logBrewMethod.innerText = "Brew Method"
  const logRating = document.createElement('div');
  logRating.className = "log-col-rating";
  logRating.innerText = "Rating"
  const logNotes = document.createElement('div');
  logNotes.className = "log-col-notes";
  logNotes.innerText = "Notes"
  const line = document.createElement('div');
  line.className = "line";
  row.append(logDose, logOutput, logGrindSize, logBrewTime, logBrewMethod, logRating, logNotes, line);
  logTable.append(row);
  container.append(logTable);
  main.append(container);
}