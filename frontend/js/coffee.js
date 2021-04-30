class Coffee {
  constructor({id, name, roaster, variety, process}) {
    this.id = id; 
    this.name = name; 
    this.roaster = roaster;
    this.variety = variety;
    this.process = process;
  }

  // renderTableRow() {
  //   const coffeeTableBody = document.querySelector(".coffee-table-body");
  //   const tr = document.createElement('tr');
  //   const tdName = document.createElement('td');
  //   const tdRoaster = document.createElement('td');
  //   const tdVariety = document.createElement('td');
  //   const tdProcess = document.createElement('td');
  //   const tdDelete = document.createElement('td');
  //   tdName.innerText = this.name;
  //   tdRoaster.innerText = this.roaster;
  //   tdVariety.innerText = this.variety;
  //   tdProcess.innerText = this.process;
  //   tdDelete.innerText = '+';
  //   tdDelete.className = 'delete-coffee-x';
  //   tdDelete.id = `coffee-${this.id}`;
  //   tr.append(tdName, tdRoaster, tdVariety, tdProcess, tdDelete);
  //   coffeeTableBody.append(tr);
  //   tdDelete.addEventListener('click', (e) => {
  //     ApiService.deleteCoffee(e.target);
  //   })
  // }

    renderGridRow() {
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
      deleteCoffee.id = `coffee-${this.id}`;
      deleteCoffee.innerHTML = "&times;"
      const line = document.createElement('div');
      line.className = "line";
      row.append(coffeeName, coffeeRoaster, coffeeVariety, coffeeProcess, deleteCoffee, line);
      coffeeTable.append(row);
      deleteCoffee.addEventListener('click', (e) => {
        ApiService.deleteCoffee(e.target);
      })
    }
}