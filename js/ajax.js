var boton = document.getElementById("boton-redi");
boton.onclick = loadDoc;

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("demo").innerHTML =
            this.responseText;
    }
    xhttp.open("GET", "QS.html");
    xhttp.send();
}
document.getElementById("body").innerHTML;