function soloLetras(e) {
    var key = e.keyCode || e.which,
        tecla = String.fromCharCode(key).toLowerCase(),
        letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
        especiales = [8, 37, 39, 46],
        tecla_especial = false;

    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
    }
}
function validarCampos(){
	var valor5  = document.getElementById("contrasena").value;
	regexp_password = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

	if(!regexp_password.test(valor5))
	{		
		alert("Error: la contraseña debe contener al menos 8 caracteres, una mayúscula y una minúscula");
	        return false;
	}
	else
	{
	        return true;
	}
}

        
