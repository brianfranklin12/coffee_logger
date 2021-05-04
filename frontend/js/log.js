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
    console.log(this)
  }
}