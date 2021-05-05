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

  renderGridRow() {
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
    const line = document.createElement('div');
    line.className = "line";
    row.append(logDose, logOutput, logGrindSize, logBrewTime, logBrewMethod, logRating, logNotes, line);
    logTable.append(row);
  }
}