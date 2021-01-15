/*
Desafio
As aulas do Prof. Xavier estão dando o que falar até no exterior, pois ele ensina Algorítmos de um jeito diferente aos seus alunos. Uma universidade dos EUA, que soube sobre o método do Prof. Xavier, quer selecionar um aluno para um intercâmbio no país. Para isso, ele possuem uma lista de inscrição com o número de cada aluno e sua nota. 

Para ajudá-los a encontrarem o melhor aluno que ganhará o intercâmbio, você deve desenvolver um programa. Só tem um detalhe, se a nota mais alta não for maior ou igual a 8, você deverá imprimir “Minimum note not reached”.

Entrada
O arquivo contém primeiro a quantidade de alunos (3 <= n <= 100) existentes e em seguida, os n alunos contendo o número da matrícula (0 < m < 1000000) de cada um, seguido da respectiva nota (0 <= nota <= 10.0, com 1 casa decimal).

Obs.: as notas não serão repetidas. Ou seja, não tem chance de ter dois alunos com a mesma nota.

Saída
Você deve imprimir o número do estudante que obteve a maior pontuação ou "Minimum note not reached" (sem aspas) caso nenhum estudante tenha tirado uma nota maior ou igual a 8.
*/

let qtd_alunos = parseInt(gets())
let mat = []
let nota = []
let aluno_escolhido

for(let i = 0; i < qtd_alunos; i++){
  estudante = gets().split(' ')
  mat[i] = parseInt(estudante[0]);
  nota[i] = parseFloat(estudante[1]);
}

//maior_nota = parseFloat(nota[0])
var maior_nota = nota.reduce(function(a, b) {
  return Math.max(a, b);
}); 

//console.log(maior_nota)

for(let i=0; i<qtd_alunos; i++){
  if(maior_nota < 8){
    console.log('Minimum note not reached'); 
    break;
  }else{
 if(nota[i] === maior_nota){
    console.log(mat[i]);
  }
  }
}



