let salario = 4520.00
/*valor = parseFloat(salario-2000.00).toFixed(2)
let imposto = 'Isento'
    
if (valor>0.01 && valor<=1000){
    imposto = parseFloat(valor*0.08).toFixed(2)
} else if(valor>1000.01 && valor<=2500){
    imposto = parseFloat(1000*0.08 + (valor-1000)*0.18).toFixed(2)
} else if(valor> 2500){
    imposto = parseFloat(1000*0.08 + (1500)*0.18 + (valor-2500)*0.28).toFixed(2)
}

if(valor<0){
    console.log(imposto)
} else {
    console.log("R$ " + imposto)
}*/



/* DIO
let salario = parseFloat(gets());
valor = parseFloat(salario-2000)
let imposto

if(valor < 0){
    console.log("Isento")
} else if (valor>0 && valor<=1000){
    imposto = parseFloat(valor*0.08).toFixed(2)
} else if(valor>1000 && valor<=2500){
    imposto = parseFloat(1000*0.08 + (valor-1000)*0.18).toFixed(2)
    console.log("R$ "+ imposto)
} else if(valor> 2500){
    imposto = parseFloat(1000*0.08 + (1500)*0.18 + (valor-2500)*0.28).toFixed(2)
}

*/



imposto = "Isento";

if (salario > 4500) 
   imposto =  parseFloat(((salario - 4500)* 0.28) + 350).toFixed(2);
 

if (salario >= 2000.01 && salario < 3000.01) 
   imposto = parseFloat( ((salario - 2000) * 0.08)).toFixed(2);


if (salario >= 3000.01 && salario < 4500.01)
   imposto = parseFloat(((salario - 3000) * 0.18) + 80).toFixed(2);


if (imposto == "Isento")
  console.log(imposto);
else
 console.log("R$ " +imposto);