function validarFormulario() {

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let edad = document.getElementById("edad").value;
    let fecha = document.getElementById("fecha").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (nombre === "") {
        alert("Falta capturar los datos requeridos");
        return;
    }

    if (correo === "") {
        alert("Falta capturar el correo");
        return;
    }

    if (edad === "" || edad < 18 || edad > 65) {
        alert("La edad debe estar entre 18 y 65 años");
        return;
    }

    if (fecha === "") {
        alert("Falta capturar la fecha");
        return;
    }

    // VALIDACIÓN SIMPLE POR AÑO
    let edadIngresada = parseInt(edad);
    let anioNacimiento = new Date(fecha).getFullYear();
    let anioActual = new Date().getFullYear();

    let edadCalculada = anioActual - anioNacimiento;

    if (edadIngresada !== edadCalculada && edadIngresada !== (edadCalculada - 1)) {
    alert("La edad no coincide con la fecha de nacimiento");
    return;
    }


    if (password.length < 6) {
        alert("La contraseña debe tener mínimo 6 caracteres");
        return;
    }

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
    }

    // SI TODO ESTÁ BIEN
    alert("Todo bien, registro enviado");

    // ocultar Formulario
    document.getElementById("login").style.display = "none";
    // mostrar contenido
    document.getElementById("contenido").style.display = "block";
}
