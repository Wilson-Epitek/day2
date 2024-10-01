fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"]
let name = 2

function getIndexFromName(name) {
  if (name === -1) {
    return fruits.lenght - 1
  }
  if (name < 0 || name >= fruits.lengh) {
    return null
  } else {
    return fruits[name]
  }
}

function bbb(resultat) {
  displayResult(resultat)
}
bbb(getIndexFromName(name))
