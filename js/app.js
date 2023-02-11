const post = JSON.parse(localStorage.getItem('Posts'));
const comprobar = (compr) => {
  if(compr == undefined){
    const posts = JSON.stringify(
    [
      {
        title: "The legend of zelda",
        id: 1,
        description: "hyrule en peligro",
        url: "https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg"
      },
      {
        title: "GTA san andreas",
        id: 2,
        description: "el mejor gta xd",
        url: "https://i.blogs.es/9b9d5b/sa/1366_2000.jpg"
      }
    ]);
    localStorage.setItem('Posts', posts);

    // ingresando por aparte
    const newpost = JSON.parse(localStorage.getItem('Posts'));
    const nuevo = {
      title: "The legend of zelda nuevo",
      id: newpost.length + 1,
      description: "hyrule en peligro nuevo",
      url: "https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg"
    };

    newpost.push(nuevo);
    localStorage.setItem('Posts', JSON.stringify(newpost));
  }
}

comprobar(post);

const user = JSON.parse(localStorage.getItem('Users'));
const compro = (compr) => {
  if(compr == undefined){
    const user = JSON.stringify(
    [
      {
        name: "Admin",
        id: 1,
        email: "admin123@gmail.com",
        password: "admin159"
      }
    ]);
    localStorage.setItem('Users', user);
  }
}
compro(user);


const card = () =>{
  const posteos = JSON.parse(localStorage.getItem('Posts'));
  posteos.map((post) =>{
    let pos = document.createElement('div');
    pos.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${post.url}" class="card-img-top" alt="imagen">
    <div class="card-body">
      <h5 class="card-title">${post.title}</h5>
      <p class="card-text">${post.description}</p>
    </div>
    </div>
    `
    document.getElementById('prueba').appendChild(pos);
  })
}