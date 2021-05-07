// Assign elements to variables
const coffeeModal = document.querySelector(".coffee-modal");
const modalClose = document.querySelector(".close");
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
const backLink = document.querySelector(".back-link")
const container = document.querySelector(".container");

// Event Listeners

modalClose.addEventListener("click", () => {
  coffeeModal.style.display = "none";
})

newCoffeeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  ApiService.addNewCoffee()
  .then(data => {
    let newCoffee = new Coffee(data);
    newCoffee.renderGridRow();
    coffeeModal.style.display = "none";
  })
})

// Functions

function coffeeListPageLoad() {
  const coffeeTable = document.createElement('div');
  coffeeTable.className = "coffee-table";
  const title = document.createElement('h1');
  title.innerText = "Coffee Logger";
  const button = document.createElement('button');
  button.className = "add-coffee-btn";
  button.innerText = "Add a New Coffee";
  button.addEventListener("click", () => {
    coffeeModal.style.display = "flex";
  });
  container.append(title, button, coffeeTable);
  ApiService.getCoffees()
  .then(data => data.forEach((coffeeData) => {
    let newCoffee = new Coffee(coffeeData);
    console.log(newCoffee);
    newCoffee.renderGridRow();
  }))
}

function renderLogHeader() {
  const main = document.querySelector('main');
  const logTable = document.createElement('div');
  logTable.className = "log-table"
  const row = document.createElement('div');
  row.className = "log-grid-row";
  const logDose = document.createElement('div');
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
}

function clearPage() {
  container.innerHTML = "";
}

coffeeListPageLoad();