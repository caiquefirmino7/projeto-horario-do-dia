function carregar(){
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()

   
    
    msg.innerHTML= `<strong>Agora são ${hora}:${minutos}:${segundos} </strong> <br> `
    
    if (hora>=0 && hora <12){
        //Bom dia
        img.src= 'imagens/manha.jpg'
        document.body.style.background = '#e2cd9f'
        msg.innerText+= `Bom dia!`
    } else if (hora >= 12 && hora <18) {
        //boa tarde
        img.src= 'imagens/tarde.jpg'
        document.body.style.background = '#FF8C00'
        msg.innerText+= `Boa tarde!`
    } else{
        //boa noite
        img.src= 'imagens/noite.jpg'
        document.body.style.background = '#191970'
        msg.innerText+= `Boa noite!`
    }
}

setInterval(carregar, 1000);