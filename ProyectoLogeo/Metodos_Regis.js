function obtenerdatos(){
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

}


