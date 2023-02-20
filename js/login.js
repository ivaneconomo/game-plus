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
  users.map((user)=>{
    if (user.email === userEmail && user.password === userPassword){
      userLog = user;
      localStorage.setItem('UserLog', JSON.stringify(userLog));
      if (userEmail == "admin123@gmail.com" && userPassword == "admin159"){
        window.location = "./indexAdmin.html" }
      else {
        window.location = "./index.html"
      }
    }else {
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
  })
}

