
// const loguear = () => {
//   const adminEmail = document.getElementsByName("usuario").value;
//   const adminPassword = document.getElementsByClassName("contraseña").value;
//   const users = JSON.parse(localStorage.getItem('Users'));

//   if (users.email === adminEmail && users.password === adminPassword) {
//     window.location = "./indexAdmin.html"  
//     alert("bienvenido")
//   } else{
//     alert("error")
    
//   }
// };


// const loguear = () => {
//   const userEmail = document.login.usuario.value.toLowerCase();
//   const userPassword = document.login.contraseña.value.toLowerCase();
//   const users = JSON.parse(localStorage.getItem('Users'));
//   let userLog;
//   let flag = false;

// users.map((user)=>{
//     if (user.email === userEmail && user.password === userPassword) {
//     flag = true;
//     userLog = user
//     } 
//   });
//   if (flag) {
//     delete userLog.password
//     localStorage.setItem('userLog', JSON.stringify(userLog));
//     window.location = "./indexAdmin.html"
//   } else {
//     swal.fire({
//       title:"Error",
//       text:"Correo Electronico o Contraseña Incorrecta.",
//       icon:"error",
//       confirmButtonText:'Reintentar',
//       backdrop: true,
//       allowOutsideClick: false,
//       confirmButtonColor: '#2C74B3'
//     })
//   };
// };

const loguear = ()=>{
      const users = JSON.parse(localStorage.getItem('Users'));
      const userEmail = document.login.usuario.value.toLowerCase();
      const userPassword = document.login.contraseña.value.toLowerCase();
      let userLog;
    users.map((user)=>{
      if (user.email === userEmail && user.password === userPassword){
        userLog = user;
        window.location = "./indexAdmin.html"
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