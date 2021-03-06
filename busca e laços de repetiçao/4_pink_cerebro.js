/*
Desafio
Pink e Cérebro dividem um apartamento e estão juntos 24h por dia desde o começo da pandemia. Para passar o temp, Pink cria problemas matemáticos para Cérebro resolver, o último deles foi uma lista de números com a seguinte pergunta: quantos números da lista são múltiplos de 2, 3, 4 e 5?

Apesar de parecer simples, porém, quando a lista contém muitos números, Cérebro se confunde e acaba errando alguns cálculos.

Ajude Cérebro a resolver o desadio de Pink.

Entrada
A primeira linha da entrada consiste em um inteiro N (1 ≤ N ≤1000), representando a quantidade de números na lista de Pink.

A segunda linha contém N inteiros Li (1 ≤ Li ≤ 100), representando os números da lista de Pink.

Saída
Imprima a quantidade de números múltiplos de 2, 3, 4 e 5 presentes na lista. Observe a formatação da saída nos exemplos, pois ela deve ser seguida rigorosamente.
*/

let n = parseInt(gets())
let list = gets().split(' ')
let vetor = [0,0,0,0]

for(let i = 0; i < n; i++){
 if(parseInt(list[i]) % 2 == 0){
   vetor[0]++}
 if(parseInt(list[i]) % 3 == 0){
  vetor[1]++}
  if(parseInt(list[i]) % 4 == 0){
    vetor[2]++}
  if(parseInt(list[i]) % 5 == 0){
    vetor[3]++}
}

console.log(vetor[0] + ' Multiplos(s) de 2')
console.log(vetor[1] + ' Multiplos(s) de 3')
console.log(vetor[2] + ' Multiplos(s) de 4')
console.log(vetor[3] + ' Multiplos(s) de 5')


