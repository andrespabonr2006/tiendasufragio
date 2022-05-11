//OBJETOS
let producto1={
    nombre:"ark",
    precio:40000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tiendita-27a12.appspot.com/o/ak.png?alt=media&token=40b2e0ac-ae15-47bd-ad04-7861ebe05e5b"
}

let producto2={
    nombre:"bo3",
    precio:100000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tiendita-27a12.appspot.com/o/bo3.png?alt=media&token=da388689-dfe4-4dcb-ab53-48e58b2e4890"
}

let producto3={
    nombre:"budokai tenkaichi 3",
    precio:50000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tiendita-27a12.appspot.com/o/bt3.png?alt=media&token=f7205bd5-0367-408b-a156-15829158c6ef"
}

let producto4={
    nombre:"csgo",
    precio:40000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tiendita-27a12.appspot.com/o/csgo.png?alt=media&token=acb9a229-7a8e-4a2a-8d56-cf2e4b2e8713"
}

let producto5={
    nombre:"elden ring",
    precio:200000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tiendita-27a12.appspot.com/o/er.png?alt=media&token=8680a5ff-0328-4a2e-b89b-9a625a29b021"
}

let producto6={
    nombre:"fifa",
    precio:200000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tiendita-27a12.appspot.com/o/fifa.png?alt=media&token=13a3dca0-7795-484d-ac41-b4c8c3aca9b1"
}

let producto7={
    nombre:"dota 2",
    precio:0,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tiendita-27a12.appspot.com/o/fifa.png?alt=media&token=13a3dca0-7795-484d-ac41-b4c8c3aca9b1"
}

let producto8={
    nombre:"gta 5",
    precio:90000,
    estado:"Nuevo",
    foto:""
}

let producto9={
    nombre:"halo infinite",
    precio:100000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tiendita-27a12.appspot.com/o/halo.png?alt=media&token=6a199bb8-d60e-4841-b918-a3b5369096d1"
}

let producto10={
    nombre:"producto10",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tiendita-27a12.appspot.com/o/gta5.png?alt=media&token=86e35afa-4be3-43cf-a077-2b19b376cdd2"
}

let producto11={
    nombre:"lol",
    precio:0,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tiendita-27a12.appspot.com/o/lol.png?alt=media&token=8de6d13d-fd44-4bfe-8cf5-70522fda7ab0"
}

let producto12={
    nombre:"los sims",
    precio:45000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tiendita-27a12.appspot.com/o/lossims.png?alt=media&token=e4482c68-d224-4f3e-8b19-832437376964"
}

let producto13={
    nombre:"minecraft",
    precio:55000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tiendita-27a12.appspot.com/o/minecraft.png?alt=media&token=9230f3c5-8e1d-42e6-9fa3-2ddcdd931fc0"
}

let producto14={
    nombre:"mario kart",
    precio:65000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tiendita-27a12.appspot.com/o/mk.png?alt=media&token=ed89f3be-7716-4660-b949-2e0ced3e28b9"
}

let producto15={
    nombre:"the witcher 3",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tiendita-27a12.appspot.com/o/tw.png?alt=media&token=7b8b4b1d-4eba-44ef-bbe9-98d9982b649f"
}

//ARREGLO
let productos=Array(
    producto1,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6,
    producto7,
    producto8,
    producto9,
    producto10,
    producto11,
    producto12,
    producto13,
    producto14,
    producto15
)

//RECORRO EL ARREGLO
let contenedor=document.getElementById("contenedor")
productos.forEach(function(producto){
    let foto=document.createElement("img")
    foto.classList.add("w-100","img-fluid")
    foto.src=producto.foto
    let columna=document.createElement("div")
    columna.classList.add("col")
    let targeta=document.createElement("div")
    targeta.classList.add("card")
    targeta.appendChild(foto)
    columna.appendChild(targeta)
    contenedor.appendChild(columna)









})

