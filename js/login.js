const userLogueado = JSON.parse(localStorage.getItem('UserLog'));

const comprobaruser = (usser)=>{
  if(usser != undefined){
    window.location = './index.html';
  }
} 

comprobaruser(userLogueado);

const loguear = ()=>{
  const users = JSON.parse(localStorage.getItem('Users'));
  const userEmail = document.login.usuario.value.toLowerCase();
  const userPassword = document.login.contraseña.value;
  let userLog;
  let flag = false;
  users.map((user)=>{
    if (user.email === userEmail && user.password === userPassword){
      if (user.alta == true || user.alta === 'admin') {
        userLog = user;
        localStorage.setItem('UserLog', JSON.stringify(userLog));
        if (userEmail == "admin123@gmail.com" && userPassword == "admin159"){
          window.location = "./indexAdmin.html"
        } else {
          window.location = "./index.html"
        }
        flag = true;
      } else {
        swal.fire({
          title:"Error",
          text:"En espera de alta por el administrador.",
          icon:"error",
          confirmButtonText:'Reintentar',
          backdrop: true,
          allowOutsideClick: false,
          confirmButtonColor: '#2C74B3'
          })
      }
    };
  })
  if (flag == false) {
    swal.fire({
      title:"Error",
      text:"Correo Electronico o Contraseña Incorrecta.",
      icon:"error",
      confirmButtonText:'Reintentar',
      backdrop: true,
      allowOutsideClick: false,
      confirmButtonColor: '#2C74B3'
      })
  }
}

