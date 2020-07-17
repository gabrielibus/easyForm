let arreglo = [2,5,7,10,11,15,20]
let n = 12
// let arreglo = [1,2,3,4,5]

let miToyProblem = (arreglo, n) => {
  for (let i in arreglo) {
    for (let j in arreglo) {
      let suma = arreglo[j] + arreglo[i]
      if (suma === n && j != i) {
        return true
      }
    }
  }
  return false
}

console.log(miToyProblem(arreglo, n))
