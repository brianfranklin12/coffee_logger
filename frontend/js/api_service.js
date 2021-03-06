const baseURL = "https://coffee-logger-api.herokuapp.com/coffees";

class ApiService {
  static getCoffees() {
    return fetch (baseURL)
    .then(res => res.json())
    .catch(err => console.log(err))
  }

  static addNewCoffee() {
    return fetch (baseURL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({
        name: coffeeName.value,
        roaster: coffeeRoaster.value,
        variety: coffeeVariety.value,
        process: coffeeProcess.value
      })
    })
    .then(res => res.json())
  }

  static deleteCoffee(coffee) {
    return fetch (`${baseURL}/${coffee.id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      },
    })
  }

  static getCoffeeLogs(coffee) {
    return fetch(`${baseURL}/${coffee.id}/logs`)
    .then(res => res.json())
    .catch(err => console.log(err))
  }

  static addNewLog(coffeeID) {
    return fetch (`${baseURL}/${coffeeID}/logs`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({
        dose: logDose.value,
        output: logOutput.value,
        grind_size: logGrindSize.value,
        brew_time: logBrewTime.value,
        brew_method: logBrewMethod.value,
        rating: logRating.value,
        notes: logNotes.value
      })
    })
    .then(res => res.json())
  }

  static deleteLog(log) {
    return fetch (`${baseURL}/${log.coffee_id}/logs/${log.id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      },
    })
  }
}