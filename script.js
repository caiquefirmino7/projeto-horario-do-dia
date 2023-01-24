function atualizar(){
    var img = window.document.getElementById('imagem')
    var msg = window.document.querySelector('div#msg')
    var data= new Date()
    var hora=  data.toLocaleTimeString()
    setInterval(atualizar,1)
    
 
    msg.innerHTML=` <strong>Agora são ${hora}</strong> <br>`

    if (hora >= 4 ){
        msg.innerHTML+=`<strong>Boa madrugada!</strong>`
        img.src = 'imagens/madrugada.jpg'
        document.body.style.background = '#2F4F4F'
    } else if ( hora >= 12){
        msg.innerHTML+=`<strong>Bom Dia!</strong>`
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 18){
        msg.innerHTML+=`<strong>Boa tarde!</strong>`
        img.src='imagens/tarde.jpg'
        document.body.style.background='#FF8C00'
    } else {
        msg.innerHTML+=`<strong>Boa noite!</strong>`
        img.src= 'imagens/noite.jpg'
        document.body.style.background='#191970'
        
    }
    
}  