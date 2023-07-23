function verificar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    msg.innerHTML = `Agora são ${hora} horas, ${minutos} minutos e ${segundos} segundos`

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = "manha.png"
        document.body.style.background = "#ca7c88"
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = "tarde.png"
        document.body.style.background = "#2698e2"
    } else {
        //boa noite
        img.src = "noite.png"
        document.body.style.background = "#4b3b5f" 
    }
}

