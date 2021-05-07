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
      e.stopPropagation();
    })
    row.addEventListener('click', (e) => {
      clearPage();
      Log.renderLogPage(this);
    })
  }
}