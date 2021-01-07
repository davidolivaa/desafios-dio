let numeros = [-7, -3]

let a = numeros[0]
let b = numeros[1]
let r, q

//a = b*q + r
/*
if(a<0 && b<0){
    r = parseInt(numeros[0]/numeros[1])
    q = (a - r)/ b 
} else {
    r = numeros[0]%numeros[1]
    q = (a-r)/b
}
*/

q = parseInt(a/b);
r = a - b*q;

if(r < 0){
    r += Math.abs(b);
    q = (a-r)/b;
}


console.log(q, r)


