class Log {
  constructor({ id, dose, output, grind_size, brew_time, brew_method, rating, notes, coffee_id }) {
    this.id = id;
    this.dose = dose;
    this.output = output;
    this.grind_size = grind_size;
    this.brew_time = brew_time;
    this.brew_method = brew_method;
    this.rating = rating;
    this.notes = notes;
    this.coffee_id = coffee_id;
  }

  static renderLogPage(coffee) {
    let title = document.createElement('h1');
    title.innerText = coffee.name;
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
      coffeeID.value = coffee.id;
    })
    Log.renderLogHeader();
    ApiService.getCoffeeLogs(coffee)
    .then(data => data.forEach((log) => {
      let newLog = new Log(log);
      newLog.renderLogRow();
    }))
  }

  static renderLogHeader() {
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

  renderLogRow() {
    const logTable = document.querySelector('.log-table');
    const row = document.createElement('div');
    row.className = "log-grid-row";
    const logDose = document.createElement('div');
    logDose.className = "log-col-dose";
    logDose.innerText = this.dose;
    const logOutput = document.createElement('div');
    logOutput.className = "log-col-output";
    logOutput.innerText = this.output;
    const logGrindSize = document.createElement('div');
    logGrindSize.className = "log-col-grind-size";
    logGrindSize.innerText = this.grind_size;
    const logBrewTime = document.createElement('div');
    logBrewTime.className = "log-col-brew-time";
    logBrewTime.innerText = this.brew_time;
    const logBrewMethod = document.createElement('div');
    logBrewMethod.className = "log-col-brew-method";
    logBrewMethod.innerText = this.brew_method;
    const logRating = document.createElement('div');
    logRating.className = "log-col-rating";
    logRating.innerText = this.rating;
    const logNotes = document.createElement('div');
    logNotes.className = "log-col-notes";
    logNotes.innerText = this.notes;
    const deleteLog = document.createElement('div');
    deleteLog.className = "delete-log-x";
    deleteLog.innerHTML = "&times;"
    const line = document.createElement('div');
    line.className = "line";
    row.append(logDose, logOutput, logGrindSize, logBrewTime, logBrewMethod, logRating, logNotes, deleteLog, line );
    logTable.append(row);
    deleteLog.addEventListener('click', (e) => {
      ApiService.deleteLog(this)
      .then (row.remove());
    })
  }
}