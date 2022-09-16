function contar() {
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')
    if (inicio.value == 0 || inicio.value == '' || fim.value == 0 || fim.value == '' || passo.value == 0 || passo.value == '') {
        res.innerHTML = 'Impossível contar!'
    } else {
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        res.innerHTML = '<p>Contando:</p>'
        for(var c = i; c <= f; c += p) {
            res.innerHTML += `${c} &#128073; `
        }
        res.innerHTML += '&#127937;'
    }
}