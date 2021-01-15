/*
Entrada
O arquivo contém apenas uma linha de teste que é o número encontrado (0 < n < 9999999999).

Obs.: Perceba que o número lido é muito alto para armazenar em uma variável do tipo int, logo você irá precisar utilizar o tipo long, que para a leitura e impressão em C, você deve utilizar o %llu.

Saída
Imprimir o número lido invertido. Não esqueça de imprimir a quebra de linha (\n) no final, caso contrário você receberá (Presentation Error).
*/


let num = 12345678 //gets()
let aux = num.toString()
let contrario = []
let j=0

for(let i = aux.length-1; i >= 0; i--) {
    contrario[j] = (aux[i])
    j++
}
console.log(contrario.join(''))
console.log('\n')
//console.log(aux.length)
