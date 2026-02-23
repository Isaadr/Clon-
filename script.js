//console.log("Bienvenido");

const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");

const textos = ["uno", "dos", "tres", "cuatro", "cinco"];
console.log(textos[0]);
let textoOriginal = true; //variable de tipo booleano: dos valores verdadero o falso
let iTxt = 0;

console.log(titulo);

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



