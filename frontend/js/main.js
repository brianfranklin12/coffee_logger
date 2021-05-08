// Assign elements to variables
const coffeeModal = document.querySelector(".coffee-modal");
const logModal = document.querySelector(".log-modal");
const coffeeModalClose = document.querySelector(".coffee-modal-close");
const logModalClose = document.querySelector(".log-modal-close");
const newCoffeeForm = document.querySelector(".new-coffee-form");
const newLogForm = document.querySelector(".new-log-form");
const coffeeName = document.getElementById("coffee-name");
const coffeeRoaster = document.getElementById("coffee-roaster");
const coffeeVariety = document.getElementById("coffee-variety"); 
const coffeeProcess = document.getElementById("coffee-process");
const logDose = document.getElementById("log-dose");
const logOutput = document.getElementById("log-output");
const logGrindSize = document.getElementById("log-grind-size");
const logBrewTime = document.getElementById("log-brew-time");
const logBrewMethod = document.getElementById("log-brew-method");
const logRating = document.getElementById("log-rating");
const logNotes = document.getElementById("log-notes");
const coffeeID = document.getElementById('coffee-id');
const backLink = document.querySelector(".back-link")
const container = document.querySelector(".container");

// Event Listeners

coffeeModalClose.addEventListener("click", () => {
  coffeeModal.style.display = "none";
})

logModalClose.addEventListener("click", () => {
  logModal.style.display = "none";
})

newCoffeeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  ApiService.addNewCoffee()
  .then(data => {
    let newCoffee = new Coffee(data);
    newCoffee.renderCoffeeRow();
    coffeeModal.style.display = "none";
    newCoffeeForm.reset();
  })
})

newLogForm.addEventListener("submit", (e) => {
  e.preventDefault();
  ApiService.addNewLog(e.target[7].value)
  .then(data => {
    let newLog = new Log(data);
    newLog.renderLogRow();
    logModal.style.display = "none";
    newLogForm.reset();
  })
})

// Functions

function clearPage() {
  container.innerHTML = "";
}

function coffeeListPageLoad() {
  const coffeeTable = document.createElement('div');
  coffeeTable.className = "coffee-table";
  const title = document.createElement('h1');
  title.innerText = "Coffee Logger";
  const description = document.createElement('p');
  description.innerText = "Welcome to the Coffee Logger! Click the button below to add a new coffee to the list. To log a brew, click on the row of the coffee you’re brewing and you’ll land on that coffee’s log page. Click the button ‘Add New Log’ to add data from your latest brew. I hope you find this logger helpful in the quest to brew the best cups possible. Happy brewing!"
  const button = document.createElement('button');
  button.className = "add-coffee-btn";
  button.innerText = "Add a New Coffee";
  button.addEventListener("click", () => {
    coffeeModal.style.display = "flex";
  });
  container.append(title, description, button, coffeeTable);
  ApiService.getCoffees()
  .then(data => data.forEach((coffeeData) => {
    let newCoffee = new Coffee(coffeeData);
    newCoffee.renderCoffeeRow();
  }))
}

coffeeListPageLoad();