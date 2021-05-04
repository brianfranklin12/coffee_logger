finca_el_puente = Coffee.create(name: "Finca El Puente", roaster: "Counter Culture Coffee", variety: "Catuai", process: "Washed")
edwin_norena = Coffee.create(name: "Edwin Noreña", roaster: "Vibrant Coffee Roasters", variety: "Pink Bourbon", process: "Gold Washed Anaerobic")

log1 = Log.new(dose: "15g", output: "250g", brew_method: "Hario Switch", brew_time: "3:30", rating: 8, notes: "cherry, chocolate, juicy", grind_size: "10H")
finca_el_puente.logs << log1