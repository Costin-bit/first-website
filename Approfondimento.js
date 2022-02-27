// Gli array sono una lista di elementi di ogni tipo
let array_1 = [1, 2, 3, 4]
let array_2 = new Array(5, 6, 7, 8, 9)

//              0       1        2          3        4
let frutti = ["mela", "pera", "banana", "fragola", "uva"]
let macchina = ["bmw", "audi", "fiat", "renault", "volvo", "dacia"]

console.log(frutti[2]) // -> "banana"

// La funzione per calcolare la lunghezza di un array è .length
console.log("La lunghezza di frutti è: " + frutti.length)

// Accedere all'ultimo elemento dell'array
let ultimo = frutti[frutti.length - 1]

// Eliminare l'ultimo elemento dell'array
frutti.pop() // -> elimina l'ultimo elemento che è "uva"

// Eliminare un elemento in un dato indice
let posizione = frutti.indexOf("pera")
// Usando questo metodo, eliminiamo l'elemento ma rimarra comunque lo spazio dell'elemento nell'array
delete frutti[posizione]

let posizione_2 = macchina.indexOf("fiat")
// .splice(elementoDaElminiare, quantiElementiEliminare, elementoDaAggiungere)
macchina.splice(posizione_2, 1)
// filter() è un'altro metodo
array_1.filter((elemento) => elemento !== "2")

// foeEach()




console.log(frutti)
console.log(macchina)
console.log(array_1)