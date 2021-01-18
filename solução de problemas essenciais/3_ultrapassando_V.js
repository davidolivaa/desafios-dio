let num = 0
let R = 3 //parseInt(gets())
let V = 23 //parseInt(gets())
let i = 0

while (V<=R) {
    V = parseInt(gets())
}

while (num <= V) {
    num += R + i
    i++
    //console.log(num)    
}
console.log(i)