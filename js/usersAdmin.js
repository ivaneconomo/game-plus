const userLogueado = JSON.parse(localStorage.getItem('UserLog'));

const comprobaruser = (usser)=>{
  if(usser == undefined){
    window.location = './login.html';
  }else if (usser.email != 'admin123@gmail.com' && usser.password != 'admin159'){
    window.location = './login.html';
  }
} 

let users = JSON.parse(localStorage.getItem('Users'));
const posts = JSON.parse(localStorage.getItem('Posts'));

let userCant = document.createElement('p')
userCant.innerHTML= `${users.length-1}`;
document.getElementById('usuCant').appendChild(userCant);

let postCant = document.createElement('p')
postCant.innerHTML= `${posts.length}`;
document.getElementById('postCant').appendChild(postCant);

const MoElDe = () =>{
  const userClick = document.querySelectorAll('.bgPos');
  for(let i=0 ; i<userClick.length; i++){
    let id = parseInt(userClick[i].querySelector('span').textContent);
    document.getElementById(`userModId${id}`).addEventListener("click", ()=>{
      let userModal = users.find(element => element.id === id);
      document.getElementById('usersModal').innerHTML = 
      `
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content bg">
            <div class="modal-header text-center">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modificar: ->${userModal.name}<-</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="nameExample">Nombre:</label>
                <input maxlength="50" type="text" class="form-control mt-2 text-dark" id="nameExample" placeholder="${userModal.name}">
              </div>
              <div class="mb-3">
                <label for="emailExample">Email:</label>
                <input type="email" maxlength="60"required class="form-control mt-2 text-dark" placeholder="${userModal.email}" id="emailExample"></input>
              </div>
              <div class="mb-3">
                <label for="altaExample">Alta de usuario:</label>
                <select class="form-select mt-2" aria-label="Default select example" id="altaExample" style="cursor:pointer;">
                  <option value="alta">Dar alta</option>
                  <option value="baja">Dar baja</option>
                </select>
              </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button class="btn botones" id="modificar">Modificar</button>
            </div>
          </div>
        </div>
      </div>
      `;
      document.getElementById('startModal').click();

      document.getElementById('modificar').addEventListener("click", ()=>{
        let newName = document.getElementById('nameExample').value == '' ? userModal.name : document.getElementById('nameExample').value;
        let newEmail = document.getElementById('emailExample').value == '' ? userModal.email : document.getElementById('emailExample').value.toLowerCase();
        let newAlta = document.getElementById('altaExample').value == 'alta' ? true : false;
        const indice = users.indexOf(userModal);
        const validarEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if(validarEmail.test(newEmail)){
          users[indice].name = newName;
          users[indice].email = newEmail;
          users[indice].alta = newAlta;
          localStorage.setItem('Users', JSON.stringify(users));
          window.location.reload();
        }else{
          Swal.fire(
            'Ingresa un Email valido',
            'El email que ingresaste no es correcto!',
            'Hecho'
          )
        }
      });
    }); 
    document.getElementById(`userEliId${id}`).addEventListener("click", ()=>{
      let userr = users.find(element => element.id === id);
      const indic = users.indexOf(userr);
      Swal.fire({
        title: `Estas seguro que deseas eliminar a ${userr.name}`,
        text: "Una vez eliminado no se podrá revertir",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
          users.splice(indic,1);
          localStorage.setItem('Users', JSON.stringify(users));
          Swal.fire(
            'Eliminado!',
            'El usuario fué eliminado!',
            'Hecho'
          ).then((result) => {if(result.isConfirmed){window.location.reload()}})
        }
      })
    });
    document.getElementById(`userAltaId${id}`).addEventListener("click", ()=>{
      let altaUser = users.find(element => element.id === id);
      const indicUser = users.indexOf(altaUser);
      Swal.fire({
        title: `Quieres dar alta a ${altaUser.name}?`,
        text: `Darás de alta a "${altaUser.name}" y podrá iniciar sesión.`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, Dar alta!'
      }).then((result) => {
        if (result.isConfirmed) {
          users[indicUser].alta = true;
          localStorage.setItem('Users', JSON.stringify(users));
          Swal.fire(
            'Dado de alta!',
            'El usuario fué dado de alta!',
            'Hecho'
          ).then((result) => {if(result.isConfirmed){window.location.reload()}})
        }
      })
    });
  }
}

const primerosUsers = () =>{
  if(users.length>6){
    document.getElementById('userss').classList.add('postsScroll');
  }
  for(let i=users.length-1; i>=0; i--){
    if(users[i].alta != 'admin'){
      let confAlta;
      let buttonAlta = `<button class="d-none" id="userAltaId${users[i].id}"></button>`;
      if(users[i].alta == true){
        confAlta = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check-fill text-success" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
        </svg>`;
      }else if(users[i].alta == false){
        confAlta = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle text-danger" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>`;
        buttonAlta = `<button class="btn botones" id="userAltaId${users[i].id}">Dar Alta</button>`;
      }
      let identificador = `<p class="d-none"></p>`;
      if(i == users.length-5){
        identificador = `<p class="d-none" id="ultimoUser">5</p>`;
      };
      let card = document.createElement('div');
      card.className = 'col-12 rounded border border-2 border-white mb-2 text-white p-3 bgPos';
      card.innerHTML = `
      <div class="mb-2">
        <h5 class="me-2 d-inline">Nombre:</h5>
        <p class="d-inline">${users[i].name}</p>
      </div>
      <div class='mb-2'>
        <h5 class="me-2 d-inline">Email:</h5>
        <p class="d-inline">${users[i].email}</p>
        <span class="d-none">${users[i].id}</span>
        ${identificador}
      </div>
      <div class='d-flex mb-2'>
        <h5 class="me-2">Alta de usuario:</h5>
        <h5>${confAlta}</h5>
      </div>
      <div class="mt-2 d-flex justify-content-center justify-content-md-start flex-wrap">
        <button class="btn botones me-1 me-md-2" id="userModId${users[i].id}">Modificar</button>
        <button class="btn botones me-1 me-md-2" id="userEliId${users[i].id}">Eliminar</button>
        ${buttonAlta}
      </div>
      `;
      document.getElementById('userss').appendChild(card);
      document.getElementById('noUserText').classList.add('d-none');
    }
  }
  MoElDe();
};

primerosUsers();

document.getElementById("inputSearch").addEventListener("input", function() {
  const searchText = this.value.toLowerCase();

  const usersFiltrados = users.filter((item) => {
    let name = item.name.toLowerCase()
    return name.includes(searchText);
  });

  document.getElementById('userss').innerHTML = `<h3 class="text-center text-white py-3" id="noUserText">No hay usuarios</h3>`;

  if(searchText == ''){
    primerosUsers();
  }else if(usersFiltrados.length != 0){
    usersFiltrados.forEach((item)=>{
      if(item.alta != 'admin'){
        let confAlta;
        let buttonAlta = `<button class="d-none" id="userAltaId${item.id}"></button>`;
        if(item.alta == true){
          confAlta = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check-fill text-success" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
          </svg>`;
        }else if(item.alta == false){
          confAlta = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle text-danger" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>`;
          buttonAlta = `<button class="btn botones" id="userAltaId${item.id}">Dar Alta</button>`;
        }
        let card = document.createElement('div');
        card.className = 'col-12 rounded border border-2 border-white mb-2 text-white p-3 bgPos';
        card.innerHTML = `
        <div class="mb-2">
          <h5 class="me-2 d-inline">Nombre:</h5>
          <p class="d-inline">${item.name}</p>
        </div>
        <div class='mb-2'>
          <h5 class="me-2 d-inline">Email:</h5>
          <p class="d-inline">${item.email}</p>
          <span class="d-none">${item.id}</span>
        </div>
        <div class='d-flex mb-2'>
          <h5 class="me-2">Alta de usuario:</h5>
          <h5>${confAlta}</h5>
        </div>
        <div class="mt-2 d-flex justify-content-center justify-content-md-start flex-wrap">
          <button class="btn botones me-1 me-md-2" id="userModId${item.id}">Modificar</button>
          <button class="btn botones me-1 me-md-2" id="userEliId${item.id}">Eliminar</button>
          ${buttonAlta}
        </div>
        `;
        document.getElementById('userss').appendChild(card);
        document.getElementById('noUserText').classList.add('d-none');
      }
    });
    if(usersFiltrados.length > 5){
      document.getElementById('userss').classList.add('postsScroll');
      MoElDe();
    }else{
      document.getElementById('userss').classList.remove('postsScroll');
      MoElDe();
    }
  }else{
    document.getElementById('userss').innerHTML = '<h4 class="mt-3 text-white text-center">Sin resultados</h4>';
    document.getElementById('userss').classList.remove('postsScroll');
  }
});

