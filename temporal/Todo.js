const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

var btnagregar = document.getElementById("agregar");
btnagregar.addEventListener("click", agregar);

var txtTarea = document.getElementById("tarea");
var listTareas = document.getElementById("tareas");

function agregar(){
    let tarea = document.createElement("li");
    tarea.textContent = txtTarea.value;
    listTareas.appendChild(tarea);
    console.log("Dentro de función" +  tarea);
}

console.log("Fuera de función" + tarea);

function marcas(){
    let text = "";
    for(let i=0; i < cars.lenght; i++){
        let tarea = document.createElement("li");
        tarea.textContent = cars[i];
        listTareas.appendChild(tarea);
    }
}