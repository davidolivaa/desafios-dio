//Você terá o desafio de escrever um programa que leia um valor inteiro N (1 < N < 1000). Este N é a quantidade de linhas de saída que serão apresentadas na execução do programa.

let num = 3

for (let i = 1; i <= num; i++){
    console.log(i, Math.pow(i, 2), Math.pow(i, 3))
}