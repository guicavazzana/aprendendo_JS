let num = [5, 8, 4]
num.push(7)
console.log(num)
num.sort()
console.log(`Nosso vetor é o ${num} com ${num.length} posições`)

for(c = 0; c<num.length; c++){
    console.log(num[c])
}