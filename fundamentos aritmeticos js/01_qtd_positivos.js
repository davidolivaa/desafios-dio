// VSC
var aux = [4, 6, -3, 3.2, -2, 4.4];
var vetor = []
for(let i=0; i<aux.length; i++){
  vetor[i] = parseFloat(aux[i]); 
}

var total = 0; 

for (x of vetor) {
    if (parseFloat(x)>0) {
        total++
    }
}
console.log(total+" valores positivos");


// plataforma Dio
/*
var vetor = []
for(let i=0; i<6; i++){
  vetor[i] = parseFloat(gets()) 
}

var total = 0; 

for (let x of vetor) {
    if (x>0) {
        total++
    }
}
console.log(total+" valores positivos");
*/