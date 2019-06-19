function carregar(){
    let titulo = document.title
    document.getElementById("h1").innerHTML = titulo

//    let nomearq = window.location.pathname
  /*
    alert(nomearq)
    */
}

function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
  //  let res = document.querySelector('div#res')
    let res = document.getElementById('res')  
/*Criando um elemento via JS */
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    img.setAttribute('class', 'imge')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex') /* Atenção getElemen[S]ByName */
        let idade =  ano - Number(fano.value)
        let gênero = ''
        if(fsex[0].checked){
            gênero = 'Homem'
            document.body.style.background = "#5380BB"; 
            if(idade < 2){
                img.src = 'img/h1.png'
            } else if(idade < 12){
                img.src = 'img/h2.png'
            } else if(idade < 17){
                img.src = 'img/h3.png'
            } else if(idade < 40){
                img.src = 'img/h4.png'
            } else if(idade < 60){
                img.src = 'img/h5.png'
            } else if(idade < 80){
                img.src = 'img/h6.png'
            } else  {
                img.src = 'img/h7.png'
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            document.body.style.background = "#b300b3"; //"#FF1AFF"; 
            if(idade < 2){
                img.setAttribute('src','img/m1.png')
            } else if(idade < 12){
                img.setAttribute('src','img/m2.png')
            } else if(idade < 17){
                img.setAttribute('src','img/m3.png')
            } else if(idade < 40){
                img.setAttribute('src','img/m4.png')
            } else if(idade < 60){
                img.setAttribute('src','img/m5.png')
            } else if(idade < 80){
                img.setAttribute('src','img/m6.png')
            } else  {
                img.setAttribute('src','img/m7.png')
            }
        }
        res.style.textAling = 'center'
        res.innerHTML = `<p>Detectamos ${gênero} com ${idade} anos.</p>`
        res.appendChild(img)
        
    }
}