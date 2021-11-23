//PARA ELIMINAR
var btnEliminar= document.getElementById("eliminar")
btnEliminar.addEventListener("click", function () {
    axios.post("http://localhost:4567/usuarioE", {
        email : document.getElementById("emailE").value
        //password : document.getElementById("password").value
    })
    .then(function (response) {
        alert("mensaje: Usuario eliminado con exito");
    })
    .catch(function (error) {
        console.log(error);
    })
})