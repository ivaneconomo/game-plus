
const loguear = ()=>{
      const users = JSON.parse(localStorage.getItem('Users'));
      const userEmail = document.login.usuario.value.toLowerCase();
      const userPassword = document.login.contraseña.value.toLowerCase();
      let userLog;
    users.map((user)=>{
      if (user.email === userEmail && user.password === userPassword){
        userLog = user;
        if (userEmail == "admin123@gmail.com" && userPassword == "admin159"){
          delete userLog.password
              localStorage.setItem('userLog', JSON.stringify(userLog));
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

