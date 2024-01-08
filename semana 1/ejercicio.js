const colores=["rojo","verde","azul"]

console.log(colores)


var encontrado = colores.find(function(elemento) {
    return elemento === "rojo";
}); 

var elemento = colores.findIndex(function (elemento) {                         
    return elemento === 1;
});