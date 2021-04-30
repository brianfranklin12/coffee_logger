const baseURL = "http://localhost:3000/coffees";

class ApiService {
  static getCoffees() {
    return fetch (baseURL)
    .then(res => res.json())
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
}