function carregar(){
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        // Manhã
        img.src = './img/manhared.png'
        msg.innerHTML += ' <br>Bom dia!'
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora < 18){
        // Tarde
        img.src = './img/tardered.png'
        msg.innerHTML += ' <br>Boa tarde!'
        document.body.style.background = '#b9846f'
    } else {
        // Noite
        img.src = './img/noitered.png'
        msg.innerHTML += '<br> Boa noite!'
        document.body.style.background = '#515154'
    }
    
}