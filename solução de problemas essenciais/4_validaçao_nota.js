let valido = true
let media_aux = []
let i=0
while(valido){
    let nota =  parseFloat(gets())
    if (nota<0 || nota>10) {
        console.log("nota invalida") 
    } else {
        media_aux[i] = nota
        i++
        if (i==2) {
          let media = (media_aux[0] + media_aux[1]) / 2
          console.log(`media = ${media.toFixed(2)}`)
          valido = false
        }
    }
    
}