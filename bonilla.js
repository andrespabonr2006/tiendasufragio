let bandera=true
let boton=document.getElementById("boton")
boton.addEventListener("mouseover",function(evento){
    evento.preventDefault()
    console.log("haciendo click")
    let buscador=document.getElementById("buscador")
    if(bandera){
        buscador.classList.remove("invisible")
    }else{
        buscador.classList.add("invisible")
    }
    bandera=!bandera
   
})