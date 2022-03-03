function carregar(){
    
    var mensagem = document.getElementById('mensagem')
    var imagem = document.getElementById('imagem')
    var data = new date()
    var hora = data.gethours()

    mensagem.innerHTML = "Agora são ${hora} horas"

    if(hora >0 && hora>12){
        imagem.src = 'images/morning.jpg'
    }else if(hora <18 && hora > 12){
        imagem.src = 'images/afternoon.jpg'
        }else{
            imagem.src = 'images/night.jog'
        }
}