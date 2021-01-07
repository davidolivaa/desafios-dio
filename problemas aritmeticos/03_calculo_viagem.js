let vetor = gets().split(" ")
let tempo = parseInt(vetor[0])
let velocidade = parseInt(vetor[1])
let litros = (tempo*velocidade)/12
console.log(parseFloat(litros).toFixed(3))