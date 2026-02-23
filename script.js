//console.log("Bienvenido");

const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");

const textos = ["Hace mucho tiempo", "Existia el vacio", "Todo era oscuro", "Hasta que la luz fue creada", "y el agua empezo a fluir", "Los animales fueron puestos en la tierra", "flores, arboles y rocas", "todo fue creado", "Y existio...", "El Edén" ];

let textoOriginal = true; //variable de tipo booleano: dos valores verdadero o falso
let iTxt = 0;

if(undefined === true) {

}else {
    texto.innerText = "Hace mucho tiempo"
}






console.log(texto);

titulo.addEventListener("click", () => {
    console.log("hiciste clik");

    if(textoOriginal === true) {
        titulo.innerText = "hace muho tiempo";
        
    } else {
        titulo.innerText = "antes de todo";
    }  
    textoOriginal = !textoOriginal;

   


    
    //alert("hiciste click");

});

texto.addEventListener("click", () => {
    texto.innerText = textos [iTxt];
    iTxt += 1; 
    

})



