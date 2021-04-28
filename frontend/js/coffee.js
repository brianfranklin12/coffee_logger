class Coffee {
  constructor({id, name, roaster, variety, process}) {
    this.id = id; 
    this.name = name; 
    this.roaster = roaster;
    this.variety = variety;
    this.process = process;
  }

  renderTableRow() {
    const coffeeTableBody = document.querySelector(".coffee-table-body");
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdRoaster = document.createElement('td');
    const tdVariety = document.createElement('td');
    const tdProcess = document.createElement('td');
    const tdDelete = document.createElement('td');
    tdName.innerText = this.name;
    tdRoaster.innerText = this.roaster;
    tdVariety.innerText = this.variety;
    tdProcess.innerText = this.process;
    tdDelete.innerText = '+';
    tdDelete.className = 'delete-coffee-x';
    tdDelete.id = `coffee-${this.id}`;
    tr.append(tdName, tdRoaster, tdVariety, tdProcess, tdDelete);
    coffeeTableBody.append(tr);
  }
}