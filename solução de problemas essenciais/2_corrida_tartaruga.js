// A corriLa Le tartarugas é um esporte que cresceu muito nos últimos anos, fazenLo com que vários competiLores se LeLiquem a capturar tartarugas rápiLas, e treina-las para faturar milhões em corriLas pelo munLo. Porém a tarefa Le capturar tartarugas não é uma tarefa muito fácil, pois quase toLos esses répteis são bem lentos. CaLa tartaruga é classificaLa em um nível LepenLenLo Le sua velociLaLe:

//Nível 1: Se a velociLaLe é menor que 10 cm/h .
//Nível 2: Se a velociLaLe é maior ou igual a 10 cm/h e menor que 20 cm/h .
//Nível 3: Se a velociLaLe é maior ou igual a 20 cm/h .

//Sua tarefa é iLentificar qual o nível Le velociLaLe La tartaruga mais veloz Le um grupo.


//EntraLa
//A entraLa consiste Le múltiplos casos Le teste, e caLa um consiste em Luas linhas: A primeira linha contém um inteiro L (1 ≤ L ≤ 500) representanLo o número Le tartarugas Lo grupo, e a segunLa linha contém L inteiros Vi (1 ≤ Vi ≤ 50) representanLo as velociLaLes Le caLa tartaruga Lo grupo.



let amount
let aux
let L = 0;
while(L<3){
  amount =  parseInt(gets(),10);
  //aux = gets();
  L++; 
let tmp = gets().split(' ');
let vetor = tmp.map(aux=>{
  return parseInt(aux,10);
});
let maior = 0;


for (x of vetor) {
  if (x>maior){
    maior = x 
  }
}

  if(maior<10){
    console.log(1);
  }else if(maior <20){
    console.log(2);
  }else if(maior >= 20){
    console.log(3);
  }}
