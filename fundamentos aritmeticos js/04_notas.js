let dinheiro = 9998 // pra Dio so colocar gets()
var n = dinheiro

let cem=0
let cinq=0
let vinte=0
let dez=0
let cinco=0
let dois=0
let um=0


    while(n>=100){
        n=n-100
        cem++
    }
    while(n>=50){
        n=n-50
        cinq++
    }
    while(n>=20){
        n=n-20
        vinte++
    }
    while(n>=10){
        n=n-10
        dez++
    }
    while(n>=5){
        n=n-5
        cinco++
    }
    while(n>=2){
        n=n-2
        dois++
    }
    while(n>=1){
        n=n-1
        um++
    }


console.log(dinheiro)
console.log(`${cem} nota(s) de R$ 100,00`)
console.log(`${cinq} nota(s) de R$ 50,00`)
console.log(`${vinte} nota(s) de R$ 20,00`)
console.log(`${dez} nota(s) de R$ 10,00`)
console.log(`${cinco} nota(s) de R$ 5,00`)
console.log(`${dois} nota(s) de R$ 2,00`)
console.log(`${um} nota(s) de R$ 1,00`)