// Questo è un commento in javascript per una sola riga

/*
    Questo è un commento per più righe
*/

// Per inizializzare una variabile si usa il comando "var"
var variabile = 0
var indice = 0

// Per inizializzare una costante si usa il comando "let" oppure "const"
let piGreco = 3.14
const videogiocare = true

// Il costrutto "if" si definisce così: if (condizione) {  } else {  }
if (variabile > 10) {
    console.log(variabile + " è maggiore di 10")
} else {
    console.log(variabile + " è minore di 10")
}

// Il costrutto "Swich" si definisce così: switch(valore) { case1: fai qualcosa; break; case2: fai qualcosa; break;... }
switch (variabile) {
    case variabile-1: 
        console.log("ciao")
        break
    case variabile-2:
        console.log("opla")
        break
    default:
        console.log("drop")
        break
}

// Operatore ternario si definisce così: condizione ? espressione-1 : espressione-2
let operatoreTernario = (var_1 > var_2) ? console.log("ciao") : console.log("opla")

// Un ciclo "for" si definisce così: for (indice; condizione; incremento-indice) { fai qualcosa }
for (let i = 0; i < 10; i++) {
    i++
    console.log(i)
}

// Un ciclo "while" si definisce così: while (condizione) { fai qualcosa }
while (variabile < 2) {
    variabile++
    console.log(variabile)
}

// C'è anche il do {  } while (condizione) che prima esegue il blocco di codice e dopo verifica la condizione
do {
    indice++
} while (indice < 10)

// Le funzioni si definiscono così: function nomeFunzione(parametri) { return }
function nomeFunzione(parametro1, parametro2) {
    let stringa = "questa è una funzione"
    return stringa
}

// Si può scrivere anche in questo modo: variabile = (parametri) => {  }
let nomeFunzione2 = (parametro1, parametro2) => {
    let stringa = "questa è una funzione"
    return stringa
}

// GLi array possono essere definiti in vari modi:
let array_1 = Array(1, 2, 3) // -> array_1 = [1, 2, 3]
let array_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Per aggiungere un elemento all'array si usa il metodo: push(elemento)
array_1.push(4) // array_1 = [1, 2, 3, 4]

// Per rimuovere l'ultimo elemento dall'array si usa il metodo: pop() (questo metodo ritornerà il valore rimosso)
array_1.pop() // array_1 = [1, 2, 3]

// Per rimuovere un elemento in una precisa posizione si usa il metodo: splice(indice, numDaRimuovere, elementoDaAggiungere, ..., elementoDaAggiungerex)
array_2.splice(2, 1) // [1, 2, 4, 5, 6, 7, 8, 9] // array_2 viene modificato

//
array_2.slice()

// Eseguire un loop su un array tramite il for()
for (let i = 0; i < array_2.length; i++) {
    console.log(array_1[i]) // Scriverà in console ogni elemento dell'array
}
// Eseguire un loop su un array tramite il for-each()
array_2.forEach(function(element) {
    console.log(element)
})

// Per fare un loop su un dizionario bisogna usare il for-in
let dizionario = {
    "chiave-1" : "valore-1",
    "chaive-2" : "valore-2",
    "chiave-3" : "valore-3"
}
for (var chiave in dizionario) {
    console.log("Chiave: " + chiave + " - Valore: " + dizionario[chiave])
}

// Una Classe di definisce nel seguente modo:
class NomeClasse {
    constructor(parametro1, parametro2) {
        this.parametro1 = parametro1
        this.parametro2 = parametro2
        this.array = []
    }
    aggiungoMetodo(parametro) {
        console.log("Fà qualcosa...")
    }
    aggiungiElemento(elemento) {
        this.array.push(elemento)
    }
    scrivi() {
        this.array.forEach(function(elemento) {
            console.log(elemento)
        })
    }
}
let classe = new NomeClasse()