
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