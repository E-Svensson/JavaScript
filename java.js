let knapp = document.getElementById("knapp");
knapp.addEventListener("click", Funk);

function Funk(){
    document.getElementById("text").innerHTML = "Hello world";
}

let knapp2 = document.getElementById("knapp2");
knapp2.addEventListener("click", Funk2);

function Funk2(){
    alert("Hejsan David");
}