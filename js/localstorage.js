var i = document.getElementById('b');
i.addEventListener ("click",save);

var z = document.getElementById('miBoton');
z.addEventListener ("click",remove);

var myArrayObject = [];
var divState;
//verifica el navegador
function init() {
 console.log("Carga de la página finalizada.");
 if(typeof(Storage) == "undefined") {
 alert("El navegador no tiene soporte para HTML5 y almacenamiento local. Se recomienda actualizarlo.");
 }
 else {
 console.log("El navegador soporta tanto localStorage como sessionStorage.");
 divState = document.getElementById("state");
 }
 divState = document.getElementById("state");
 if(typeof(localStorage) == "undefined"){
 divState.style.display = 'none';
 }
 else{
 divState.style.display = 'block';
 }
}
function save() {
    //guarda los datos del formulario en el localstorage
    var nombrem = document.getElementById("nombre");
    var paism = document.getElementById("pais");
    var correom = document.getElementById("correo");
    var mensajem = document.getElementById("mensaje");
    var msg;
    try {
    localStorage.setItem("nombre", nombrem.value);
    localStorage.setItem("pais", paism.value);
    localStorage.setItem("correo", correom.value);
    localStorage.setItem("mensaje", mensajem.value);
    nombrem.value = "";
    paism.value = "";
    correom.value = "";
    mensajem.value = "";
    msg = "Datos guardados en el localStorage.";
    console.log(msg);
    //Mostrar al usuario mensaje de estado
    divState.innerHTML = "<p>" + msg + "</p>";
    }
    catch (e) {
    //Verificar si el límite de almacenamiento no se ha sobrepasado
    if (e >= QUOTA_EXCEEDED_ERR) {
    console.log("Error: Límite para almacenamiento local se ha alcanzado.");
    }
    else {
    console.log("Error: Guardando en el almacenamiento local.");
    }
    }
   }
//remueve los datos del localstorage

var miBoton = document.getElementById("miBoton");
miBoton.onclick = leer;

function remove() {
 console.log("Removiendo dato del localStorage.");
 localStorage.removeItem("nombre");
 localStorage.removeItem("pais");
 localStorage.removeItem("correo");
 localStorage.removeItem("mensaje");
}




   
