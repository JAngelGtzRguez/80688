//PARA MODIFICAR 
var btnModificar = document.getElementById("modificar")
btnModificar.addEventListener("click", function () {
    axios.post("http://localhost:4567/usuarioM", {
        email : document.getElementById("emailM").value,
        password : document.getElementById("passwordM").value,
        id : document.getElementById("idM").value

    })
    .then(function (response) {
        alert("mensaje: Usuario modificado con exito");
    })
    .catch(function (error) {
        console.log(error);
    })
})