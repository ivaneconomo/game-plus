
// const regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
// const crearUsuario = () => {
//   const nombreRegistro = document.getElementById('nombreRegistro').value;
//   const emailIngresado = document.getElementById('emailRegistro').value.toLowerCase();
//   let emailRegistro = '';
//   const contrasenaIngresada = document.getElementById('contrasenaRegistro').value;
//   const repContrasenaIngresada = document.getElementById('repContrasenaRegistro').value;
//   let contrasenaRegistro = '';

//   // Validando email.
//   const validarEmail = () => {
//     try {
//         if (regexEmail.test(emailIngresado)) {
//             users.map((user) => {
//                 if (user.email !== emailIngresado) {
//                     emailRegistro = emailIngresado;
//                     return emailRegistro;
//                 } else {
//                   throw new Error('El email ingresado ya se encuentra registrado.');
//                 };
//             });
//         } else {
//             throw new Error('El email ingresado no tiene un formato válido.');
//         };
//     } catch (error) {
//         //alert(error.message);
//     };
//   };
//   validarEmail();

//   // Validando contraseñas.
//   const validarContraseña = () => {
//       try {
//           if (contrasenaIngresada === repContrasenaIngresada) {
//               contrasenaRegistro = contrasenaIngresada;
//               return contrasenaRegistro;
//           } else {
//               throw new Error('Las contraseñas ingresadas no coinciden.')
//           };
//       } catch (error) {
//           alert(error.message);
//       };
//   };
//   validarContraseña();

//   // Registrando usuario con los datos validados.
//   console.log({nombreRegistro, emailRegistro, contrasenaRegistro});
//   const registrarUsuario = () => {
//     try {
//       if (!(nombreRegistro == ''|| emailRegistro == ''|| contrasenaRegistro == '')) {
//         const nuevoUsuario = {
//           name: nombreRegistro,
//           id: users.length +1,
//           email: emailRegistro,
//           password: contrasenaRegistro,
//         };
//         users.push(nuevoUsuario);
//         localStorage.setItem('Users', JSON.stringify(users));
//       } else {
//         throw new Error('Debe completar todos los campos de manera correcta.');
//       };
//     } catch (error) {
//       alert(error.message);
//     };
//   };
//   registrarUsuario();
// };



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
          users.map((user) => {
              if (user.email !== emailIngresado && emailIngresado !== '') {
                  emailRegistro = emailIngresado;
                  document.getElementById('emailDisp').classList.remove('d-none');
                  return emailRegistro;
              } else {
                document.getElementById('emailNoDisp').classList.remove('d-none');
                throw new Error('Email ingresado ya registrado.');
              };
          });
      } else {
        document.getElementById('formatoInvalido').classList.remove('d-none');
        throw new Error('Formato email no válido.');
      };
  } catch (error) {
    console.log(error.message);
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
      throw new Error('Las contraseñas no coinciden.');
    };
  } catch (error) {
    console.log(error.message);
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
      throw new Error('Las contraseñas no coinciden.');
    };
  } catch (error) {
    console.log(error.message);
  };
};

document.getElementById('nombreRegistro').addEventListener('change', obtenerNombre);
document.getElementById('emailRegistro').addEventListener('change', validarEmail);
document.getElementById('contrasenaRegistro').addEventListener('change', obtenerContrasena);
document.getElementById('repContrasenaRegistro').addEventListener('change', verificarContrasenas);