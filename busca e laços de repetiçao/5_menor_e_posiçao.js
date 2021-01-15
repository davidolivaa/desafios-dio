/*
Desafio
Desenvolva um código que leia um valor E. Este E será o tamanho de um vetor X[E]. A seguir, leia cada um dos valores de X, encontre o menor elemento deste vetor e a sua posição dentro do vetor, mostrando esta informação.

Entrada
A primeira linha de entrada contem um único inteiro E (1 < E < 1000), indicando o número de elementos que deverão ser lidos em seguida para o vetor X[E] de inteiros. A segunda linha contém cada um dos E valores, separados por um espaço.

Saída
A primeira linha apresenta a mensagem “Menor valor:” seguida de um espaço e do menor valor lido na entrada. A segunda linha apresenta a mensagem “Posicao:” seguido de um espaço e da posição do vetor na qual se encontra o menor valor lido, lembrando que o vetor inicia na posição zero.
*/

let tam = 5 //parseInt(gets())
let vetor = [3, 23, -5, 0, 6] //gets()
let trimada = vetor.replace(/\s/g,',').trim().split(',');

let menor = vetor[0]
let indice = 0

for(let i = 1; i < tam; i++){
    if (parseFloat(menor) > parseFloat(vetor[i])){
        menor = vetor[i]
        indice = i
    }
}

console.log(`Menor valor: ${menor}`)
console.log(`Posicao: ${indice}`)
