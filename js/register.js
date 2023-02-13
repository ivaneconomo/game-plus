const users = JSON.parse(localStorage.getItem('Users'));
const validarEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
const crearUsuario = () => {
    const nombreRegistro = document.getElementById('nombreRegistro').value;
    const emailIngresado = document.getElementById('emailRegistro').value.toLowerCase();
    let emailRegistro;
    const contrasenaIngresada = document.getElementById('contrasenaRegistro').value;
    const repContrasenaIngresada = document.getElementById('repContrasenaRegistro').value;
    let contrasenaRegistro;
    // Validando email
    try {
        if (validarEmail.test(emailIngresado)) {
            users.map((user) => {
                if (user.email !== emailIngresado) {
                    emailRegistro = emailIngresado;
                    return emailRegistro;
                } else {
                    throw new Error('El email ingresado ya se encuentra registrado.');
                };
            });
        } else {
            throw new Error('El email ingresado no tiene un formato válido.');
        };
    } catch (error) {
        alert(error.message);
    };

    // Validando contraseñas
    const validarContraseña = () => {
        try {
            if (contrasenaIngresada === repContrasenaIngresada) {
                contrasenaRegistro = contrasenaIngresada;
                return contrasenaRegistro;
            } else {
                throw new Error('Las contraseñas ingresadas no coinciden.')
            };
        } catch (error) {
            alert(error.message);
        };
    };
    validarContraseña();

    console.log({nombreRegistro, emailRegistro, contrasenaRegistro});



//   const nuevoUsuario = {
//     name: document.getElementById('nombreRegsitro').value,
//     id: users.lenght ++,
//     email: document.getElementById('emailRegistro').value,
//     password: document.getElementById('contrasenaRegistro').value,
//   }
}; 