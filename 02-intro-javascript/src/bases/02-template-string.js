//console.log('')
const nombre = "Carlos";
const apellido = "Quintero";

const metodo = () => {
    return apellido
}
//const nombreCompleto = nombre+' '+apellido;
const nombreCompleto = `${nombre} ${ metodo() }`;


console.log(nombreCompleto)