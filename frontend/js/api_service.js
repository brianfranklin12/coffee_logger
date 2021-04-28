const baseURL = "http://localhost:3000/coffees";

class ApiService {
  static getCoffees() {
    return fetch (baseURL)
    .then(res => res.json())
  }
}