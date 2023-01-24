function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   
    
    msg.innerHTML= `<strong>Agora são ${hora} horas</strong> <br> `
    
    if (hora>=0 && hora <12){
        //Bom dia
        img.src= './imagens/manha.jpg'
        document.body.style.background = '#e2cd9f'
        msg.innerText+= `Bom dia!`
    } else if (hora >= 12 && hora <18) {
        //boa tarde
        img.src= '.imagens/tarde.jpg'
        document.body.style.background = '#FF8C00'
        msg.innerText+= `Boa tarde!`
    } else{
        //boa noite
        img.src= 'noite.jpg'
        document.body.style.background = '#191970'
        msg.innerText+= `Boa noite!`
    }
}
