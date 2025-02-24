function verificar() {
    var data = new Date() //Para pegar a data 
    var ano = data.getFullYear()//vai pegar com 4 digitos Ex: 2025

    var formAno = document.getElementById('txtAno')

    var res = document.querySelector('div#res')

    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img') //Para colocar uma imagem 1º Passo
        img.setAttribute('id', 'foto')  // Cria uma foto de forma estatica 2º Passo
        if (fsex[0].checked) {
            genero = 'Homem'
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            img.setAttribute('src', 'manhared.png')//3º Passo
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos `
        res.appendChild(img) //Adicionar elemento  4º Passo

    }

}