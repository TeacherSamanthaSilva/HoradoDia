function carregar(){
    
    var mensagem = document.getElementById('mensagem')
    var foto = document.getElementById('foto')
    var data = new date()
    var hora = data.gethours()

    mensagem.innerHTML = "Agora são ${hora} horas"

    if(hora >0 && hora>12){
        foto.src = "images/morning.jpg"
    }else if(hora <18 && hora > 12){
        foto.src = "images/afternoon.jpg"
        }else{
            foto.src = "images/night.jog"
        }
}