var btnNoSubmitGet = document.getElementById("btnNoSubmitGet");
btnNoSubmitGet.addEventListener('click', function () {
    // recupero del formulario los valores de los campos email y password mediante sus IDs
    let email = document.getElementById('nombre').value;
    let pass = document.getElementById('password').value;
    // construyo una URL de parámetros, es decir un quertystring
    var params = new URLSearchParams();
    params.append('nombre', email);
    params.append('password', pass);
    // console.log(params);
    // console.log(params.get('nombre'));
    // console.log(params.get('password'));
    // invocación de la librería AXIOS
    axios.get('http://localhost:4567/saludar?'+ params)
        .then(function (response) {
            console.log(response);
            console.log("verdad: " + response.data);
            alert(response.data)
        })
        .catch(function (error) {
            console.log("error: " + error);
        })
});


/*function obtenerdatos(){
    var usuario = document.getElementById('usuario').value;
    var passw = document.getElementById('password').value;

        document.registro.usuarioobt.value = usuario;
        document.registro.passobt.value = passw;
    
}

function iniciosesion(){
    var user = document.getElementById('user').value;
    var passw = document.getElementById('contraseña').value;

    if(user == "Angel" && passw == "12345678"){
        document.logeo.usuarioobt.value = user;
        document.logeo.passobt.value = passw;
    }

}*/


