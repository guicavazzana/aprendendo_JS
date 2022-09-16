function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (formAno.value.length <= 3 || formAno.value > ano){
        window.alert('[ERRO] Digite um ano válido!')
    } else {
        var formSex = document.getElementsByName('radsex')
        var idade = ano - formAno.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (formSex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe_menino.jpg')
            } else if (idade <= 40 ) {
                img.setAttribute('src', 'jovem_homem.jpg')
            } else if (idade <= 60) {
                img.setAttribute('src', 'homem_adulto.jpg')
            } else {
                img.setAttribute('src', 'homem_idoso.jpg')
            }
        } else if (formSex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe_menina.jpg')
            } else if (idade <= 40 ) {
                img.setAttribute('src', 'jovem_mulher.jpg')
            } else if (idade <= 60) {
                img.setAttribute('src', 'mulher_adulta.jpg')
            } else {
                img.setAttribute('src', 'mulher_idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}