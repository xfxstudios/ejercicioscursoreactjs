//console.log('')

const persona = {
    nombre: "Carlos",
    apellido: "Quintero",
    edad:40,
    direccion:{
        principal:{
            ciudad:'Callao',
            distrito:'Callao',
            pais:'Perú',
            descripcion:'Urb. bocanegra, sec1, Mz.A38, Lt.22, piso 2',
            telefono:'+51 1 215326',
            zip:10071,
            lat:14.326598,
            lng:35.326587
        }
    }
};

const persona2 = {...persona};
persona2.nombre = "Marledys"

console.log(persona)
console.log(persona2)