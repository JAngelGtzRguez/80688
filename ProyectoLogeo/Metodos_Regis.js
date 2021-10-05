var MetPost = document.getElementById("MetPost");
MetPost.addEventListener('click', function () {
    // recupero del formulario los valores de los campos email y password mediante sus IDs
    let email = document.getElementById('email').value;
    let pass = document.getElementById('contraseña').value;
    // construyo una URL de parámetros, es decir un quertystring
    var params = new URLSearchParams();
    params.append('usuario', email);
    params.append('contraseña', pass);
    // invocación de la librería AXIOS
    axios.post('http://localhost:4567/saludar', params)
        .then(function (response) {
            console.log(response);
            console.log("verdad: " + response.data);
            alert(response.data)
        })
        .catch(function (error) {
            console.log("error: " + error);
        })
});