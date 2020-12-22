// VSC
var aux = [4, 6, 0, 3, -2];
var vetor = []

for(let i=0; i<5; i++){
  vetor[i] = aux[i];
}

var pos = 0; 
var neg = 0;
var par = 0;
var imp = 0;

for (x of vetor) {
    if (x>0) {
        pos++
    }
    else if(x<0){
        neg++;
    }
    if (x%2==0 ) {
        par++;
    }
    else {
        imp++;
    }
}
console.log(`${par} valor(es) par(es)`) 
console.log(`${imp} valor(es) impar(es)`)
console.log(`${pos} valor(es) positivo(s)`) 
console.log(`${neg} valor(es) negativo(s)`)


// plataforma Dio
/*
for(let i=0; i<5; i++){
  vetor[i] = parseFloat(gets()) 
}

var pos = 0; 
var neg = 0;
var par = 0;
var imp = 0;

for (x of vetor) {
    if (x>0) {
        pos++
    }
    else if(x<0){
        neg++;
    }
    if (x%2==0 ) {
        par++;
    }
    else {
        imp++;
    }
}
console.log(`${par} valor(es) par(es)`) 
console.log(`${imp} valor(es) impar(es)`)
console.log(`${pos} valor(es) positivo(s)`) 
console.log(`${neg} valor(es) negativo(s)`)
*/