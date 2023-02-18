const users = JSON.parse(localStorage.getItem('Users'));

let nombreRegistro = '';
let emailRegistro = '';
let contrasenaRegistro = '';
let contrasenaIngresada = '';
let repContrasenaIngresada = '';

const obtenerNombre = () => {
  nombreRegistro = document.getElementById('nombreRegistro').value;
  return nombreRegistro;
};

const validarEmail = () => {
  const regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  const emailIngresado = document.getElementById('emailRegistro').value.toLowerCase();
  
  if (!document.getElementById('emailDisp').classList.contains('d-none')) {
    document.getElementById('emailDisp').classList.add('d-none');
  };
  if (!document.getElementById('emailNoDisp').classList.contains('d-none')) {
    document.getElementById('emailNoDisp').classList.add('d-none');
  };
  if (!document.getElementById('formatoInvalido').classList.contains('d-none')) {
    document.getElementById('formatoInvalido').classList.add('d-none');
  };

  try {
      if (regexEmail.test(emailIngresado)) {
        const findEmail = users.find((user) => {
            return user.email == emailIngresado;
          });
        if (findEmail == undefined) {
          emailRegistro = emailIngresado;
          document.getElementById('emailDisp').classList.remove('d-none');
          return emailRegistro;
        } else {
          document.getElementById('emailNoDisp').classList.remove('d-none');
          emailRegistro = '';
          throw new Error('Email ingresado ya registrado.');
        };  
      } else {
        document.getElementById('formatoInvalido').classList.remove('d-none');
        emailRegistro = '';
        throw new Error('Formato email no válido.');
      };
  } catch (error) {
    console.warn(error.message);
  };
};

const obtenerContrasena = () => {
  if (!document.getElementById('noCoincide').classList.contains('d-none')) {
    document.getElementById('noCoincide').classList.add('d-none');
  };

  contrasenaIngresada = document.getElementById('contrasenaRegistro').value;

  try {
    if (contrasenaIngresada === repContrasenaIngresada && contrasenaIngresada !== '') {
      contrasenaRegistro = contrasenaIngresada;
      return contrasenaRegistro;
    } else {
      document.getElementById('noCoincide').classList.remove('d-none');
      contrasenaRegistro = '';
      throw new Error('Las contraseñas no coinciden.');
    };
  } catch (error) {
    console.warn(error.message);
  };
};

const verificarContrasenas = () => {
  if (!document.getElementById('noCoincide').classList.contains('d-none')) {
    document.getElementById('noCoincide').classList.add('d-none');
  };

  repContrasenaIngresada = document.getElementById('repContrasenaRegistro').value;

  try {
    if (contrasenaIngresada === repContrasenaIngresada && contrasenaIngresada !== '') {
      contrasenaRegistro = contrasenaIngresada;
      return contrasenaRegistro;
    } else {
      document.getElementById('noCoincide').classList.remove('d-none');
      contrasenaRegistro = '';
      throw new Error('Las contraseñas no coinciden.');
    };
  } catch (error) {
    console.warn(error.message);
  };
};

const registrarUsuario = () => {
  try {
    if (nombreRegistro !== '' && emailRegistro !== '' && contrasenaRegistro !== '') {
      const nuevoId = users[users.length - 1].id + 1;
      const nuevoUsuario = {
        name: nombreRegistro,
        id: nuevoId,
        email: emailRegistro,
        password: contrasenaRegistro
      };
      users.push(nuevoUsuario);
      localStorage.setItem('Users', JSON.stringify(users));
    } else {
      throw new Error('Debe completar todos los campos correctamente para poder registrarse.')
    };
  } catch (error) {
    alert(error.message);
    console.warn(error.message);
  };
};

const mostrarContrasena = () => {
    document.getElementById('contrasenaRegistro').type='text';
    document.getElementById('mostrarContrasena').classList.add('d-none');
    document.getElementById('ocultarContrasena').classList.remove('d-none');
};
const ocultarContrasena = () => {
    document.getElementById('contrasenaRegistro').type='password';
    document.getElementById('mostrarContrasena').classList.remove('d-none');
    document.getElementById('ocultarContrasena').classList.add('d-none');
};

document.getElementById('mostrarContrasena').addEventListener ('click', mostrarContrasena);
document.getElementById('ocultarContrasena').addEventListener ('click', ocultarContrasena);

document.getElementById('nombreRegistro').addEventListener('change', obtenerNombre);
document.getElementById('emailRegistro').addEventListener('change', validarEmail);
document.getElementById('contrasenaRegistro').addEventListener('change', obtenerContrasena);
document.getElementById('repContrasenaRegistro').addEventListener('change', verificarContrasenas);