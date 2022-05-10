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
    nombre:"producto8",
    precio:500000,
    estado:"Nuevo",
    foto:""
}

let producto9={
    nombre:"producto9",
    precio:500000,
    estado:"Nuevo",
    foto:""
}

let producto10={
    nombre:"producto10",
    precio:500000,
    estado:"Nuevo",
    foto:""
}

let producto11={
    nombre:"producto11",
    precio:500000,
    estado:"Nuevo",
    foto:""
}

let producto12={
    nombre:"producto12",
    precio:500000,
    estado:"Nuevo",
    foto:""
}

let producto13={
    nombre:"producto13",
    precio:500000,
    estado:"Nuevo",
    foto:""
}

let producto14={
    nombre:"producto14",
    precio:500000,
    estado:"Nuevo",
    foto:""
}

let producto15={
    nombre:"producto15",
    precio:500000,
    estado:"Nuevo",
    foto:""
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
productos.forEach(function(producto){
    console.log(producto.nombre)
})

