const users = JSON.parse(localStorage.getItem('Users'));
const regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
const crearUsuario = () => {
  const nombreRegistro = document.getElementById('nombreRegistro').value;
  const emailIngresado = document.getElementById('emailRegistro').value.toLowerCase();
  let emailRegistro = '';
  const contrasenaIngresada = document.getElementById('contrasenaRegistro').value;
  const repContrasenaIngresada = document.getElementById('repContrasenaRegistro').value;
  let contrasenaRegistro = '';

  // Validando email.
  const validarEmail = () => {
    try {
        if (regexEmail.test(emailIngresado)) {
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
  };
  validarEmail();

  // Validando contraseñas.
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

  // Registrando usuario con los datos validados.
  console.log({nombreRegistro, emailRegistro, contrasenaRegistro});
  const registrarUsuario = () => {
    try {
      if (!(nombreRegistro == ''|| emailRegistro == ''|| contrasenaRegistro == '')) {
        const nuevoUsuario = {
          name: nombreRegistro,
          id: users.length +1,
          email: emailRegistro,
          password: contrasenaRegistro,
        };
        users.push(nuevoUsuario);
        localStorage.setItem('Users', JSON.stringify(users));
      } else {
        throw new Error('Debe completar todos los campos de manera correcta.');
      };
    } catch (error) {
      alert(error.message);
    };
  };
  registrarUsuario();
};