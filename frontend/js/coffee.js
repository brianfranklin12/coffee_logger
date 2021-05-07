class Coffee {
  constructor({id, name, roaster, variety, process}) {
    this.id = id; 
    this.name = name; 
    this.roaster = roaster;
    this.variety = variety;
    this.process = process;
  }

  renderCoffeeRow() {
    const coffeeTable = document.querySelector(".coffee-table");
    const row = document.createElement('div');
    row.className = "grid-row";
    const coffeeName = document.createElement('div');
    coffeeName.className = "col-name";
    coffeeName.innerText = this.name;
    const coffeeRoaster = document.createElement('div');
    coffeeRoaster.className = "col-roaster";
    coffeeRoaster.innerText = this.roaster;
    const coffeeVariety = document.createElement('div');
    coffeeVariety.className = "col-variety";
    coffeeVariety.innerText = this.variety;
    const coffeeProcess = document.createElement('div');
    coffeeProcess.className = "col-process";
    coffeeProcess.innerText = this.process;
    const deleteCoffee = document.createElement('div');
    deleteCoffee.className = "delete-coffee-x";
    deleteCoffee.innerHTML = "&times;"
    const line = document.createElement('div');
    line.className = "line";
    row.append(coffeeName, coffeeRoaster, coffeeVariety, coffeeProcess, deleteCoffee, line);
    coffeeTable.append(row);
    deleteCoffee.addEventListener('click', (e) => {
      ApiService.deleteCoffee(this)
      .then (row.remove());
    })
    row.addEventListener('click', (e) => {
      clearPage();
      this.renderLogPage(this);
    })
  }

  renderLogPage() {
    let title = document.createElement('h1');
    title.innerText = this.name;
    let backLink = document.createElement('div');
    backLink.className = "back-link";
    backLink.innerText = "Go Back";
    backLink.addEventListener('click', () => {
      clearPage();
      coffeeListPageLoad();
    })
    let button = document.createElement('button');
    button.className = "add-log-btn";
    button.innerText = "Add New Log";
    container.append(title, backLink, button);
    button.addEventListener('click', () => {
      logModal.style.display = "flex";
      coffeeID.value = this.id;
    })
    renderLogHeader();
    ApiService.getCoffeeLogs(this)
    .then(data => data.forEach((log) => {
      let newLog = new Log(log);
      console.log(newLog);
      newLog.renderLogRow();
    }))
  }
}