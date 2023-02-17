const post = JSON.parse(localStorage.getItem('Posts'));
const comprobar = (compr) => {
  if(compr == undefined){
    const posts = JSON.stringify(
    [
      {
        title: "The Legend of Zelda: Breath of the Wild",
        id: 1,
        description: `Diez mil años antes del comienzo del juego, Hyrule es una civilización avanzada que construyó cuatro enormes máquinas con formas de animales llamadas bestias divinas y una legión de guardianes para protegerse de Ganon. Cuando Ganon regresó, fue derrotado por una princesa con la ayuda de los cuatro campeones y un caballero.
        Unos nueve mil novecientos años después, los habitantes de Hyrule se enteraron por medio de una profecía de que se avecinaba el «Gran Cataclismo». La princesa Zelda entrena para despertar su poder y sellar a Ganon, Link es elegido como el portador de la Espada Maestra, mientras que Daruk, Revali, Mipha y Urbosa son elegidos para pilotar a las bestias divinas. Sin embargo, Ganon ideó un plan para contrarrestar los intentos defensivos, corrompiendo a todas las máquinas, matando a los campeones y diezmando al reino. Link queda gravemente herido en la batalla y es llevado a una cámara de resurrección conocida como el santuario de la vida, mientras que Zelda usa su magia para atrapar a Ganon.
        Transcurren cien años y Link despierta sin memoria de la cámara en un reino posapocalíptico devastado, al salir del santuario conoce a un anciano que se revela a sí mismo como el espíritu del rey Rhoam. El rey le explica que Zelda ha estado en una batalla en el castillo de Hyrule y que su poder se está desvaneciendo, por lo que le ruega a Link que derrote a Ganon antes de que se libere y destruya el mundo. Tras la petición del rey, Link emprende un viaje a través de todo Hyrule para recuperar sus memorias. Con la ayuda de las tribus del reino aborda las bestias divinas para derrotar a las manifestaciones de Ganon que derrotaron a los campeones cien años antes y liberar sus espíritus. Después de obtener la Espada Maestra, Link se dirige al castillo de Hyrule para derrotar a Ganon con la ayuda de las bestias divinas`,
        url: "https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg",
        category:"accion",
        destacado: true
      },
      {
        title: "Hogwarts Legacy",
        id: 2,
        description: `Hogwarts Legacy es un RPG de acción en un mundo abierto ambientado en el universo de los libros de Harry Potter. Por primera vez, disfruta de Hogwarts en el siglo XIX. Tu personaje es un estudiante que tiene la clave de un antiguo secreto que amenaza con destruir el mundo mágico. Ahora puedes tomar el control de la acción y ser el centro de tu propia aventura en el mundo mágico. La leyenda de Hogwarts es tuya. Crea tu propio legado. En Hogwarts Legacy los jugadores controlan a un estudiante que tiene la clave de un antiguo secreto que amenaza con destruir el mundo mágico. El juego ofrece a los jugadores la oportunidad de explorar el castillo y sus alrededores, así como aprender hechizos y descubrir misterios.
        Explora un mundo abierto, El mundo mágico te espera. Explora libremente Hogwarts, Hogsmeade, el Bosque Prohibido y el ara circundante. Aprende hechizos, prepara pociones, cultiva plantas y cuida animales mágicos a lo largo de tu aventura. Elige tu casa, forja relaciones y domina las habilidades para convertirte en la bruja o mago que quieres ser. Vive la experiencia del mundo mágico en una era inexplorada para descubrir una verdad escondida de su pasado. Lucha contra trols, magos tenebrosos, duendes y más, mientras te enfrentas a un peligroso villano que amenaza el destino del mundo mágico. Dentro de unos días hará su aparición en el mercado Hogwarts Legacy, el juego de rol más esperado de 2023, que está ambientado en el universo mágico de Harry Potter. Mientras esperas, te contamos lo que se dice de este juego del que todos hablan.`,
        url: "https://images8.alphacoders.com/110/thumb-1920-1102284.jpg",
        category:"aventura",
        destacado: false
      },
      {
        title: "GTA V",
        id: 3,
        description: "Michael Townley, Trevor Philips y Brad Snider eran ladrones de bancos, Michael, queriendo huir de esa vida, planea un atraco falso junto al agente federal corrupto Dave Norton. Dave tenía que matar a Trevor y arrestar a Brad mientras Michael fingía su muerte.",
        url: "https://wallpapercave.com/wp/wp8617955.jpg",
        category:"accion",
        destacado: false
      },
      {
        title: "GTA IV",
        id: 4,
        description: "Grand Theft Auto IV narra la historia de Niko Bellic, un inmigrante ilegal y veterano de la Guerra de Bosnia. Tras ser convencido por su primo Roman, que emigró a Liberty City años antes del comienzo de la historia en el juego, Niko decide abandonar Europa del Este con rumbo a Liberty City, donde espera olvidar su pasado criminal.",
        url: "https://images3.alphacoders.com/274/274397.jpg",
        category:"accion",
        destacado: false
      },
      {
        title: "Call of Duty Black Ops III",
        id: 5,
        description: "40 años después de los acontecimientos en Call of Duty: Black Ops II, el mundo tiene lugar en un futuro distópico, situado en 2065, donde la ciencia y la tecnología han cambiado radicalmente a la especie humana, con la sociedad violenta y las protestas y el intento de detener el progreso de la tecnología.",
        url: "https://wallpaperaccess.com/full/641787.jpg",
        category:"accion",
        destacado: false
      },
      {
        title: "GTA san andreas",
        id: 6,
        description: "Ambientada en los principios de la década de 1990, concretamente en 1992, Grand Theft Auto: San Andreas narra la historia de Carl Johnson (CJ), quien decide volver a Los Santos para asistir al funeral de su madre, Beverly, quien resultó asesinada en un tiroteo.",
        url: "https://images5.alphacoders.com/596/596248.jpg",
        category:"accion",
        destacado: false
      },
      {
        title: "GTA IV",
        id: 7,
        description: "Grand Theft Auto IV narra la historia de Niko Bellic, un inmigrante ilegal y veterano de la Guerra de Bosnia. Tras ser convencido por su primo Roman, que emigró a Liberty City años antes del comienzo de la historia en el juego, Niko decide abandonar Europa del Este con rumbo a Liberty City, donde espera olvidar su pasado criminal.",
        url: "https://images3.alphacoders.com/274/274397.jpg",
        category:"accion",
        destacado: false
      },
      {
        title: "Call of Duty Black Ops III",
        id: 8,
        description: "40 años después de los acontecimientos en Call of Duty: Black Ops II, el mundo tiene lugar en un futuro distópico, situado en 2065, donde la ciencia y la tecnología han cambiado radicalmente a la especie humana, con la sociedad violenta y las protestas y el intento de detener el progreso de la tecnología.",
        url: "https://wallpaperaccess.com/full/641787.jpg",
        category:"accion",
        destacado: false
      },
      {
        title: "GTA san andreas",
        id: 9,
        description: "Ambientada en los principios de la década de 1990, concretamente en 1992, Grand Theft Auto: San Andreas narra la historia de Carl Johnson (CJ), quien decide volver a Los Santos para asistir al funeral de su madre, Beverly, quien resultó asesinada en un tiroteo.",
        url: "https://images5.alphacoders.com/596/596248.jpg",
        category:"accion",
        destacado: false
      },
      {
        title: "GTA san andreas",
        id: 10,
        description: "Ambientada en los principios de la década de 1990, concretamente en 1992, Grand Theft Auto: San Andreas narra la historia de Carl Johnson (CJ), quien decide volver a Los Santos para asistir al funeral de su madre, Beverly, quien resultó asesinada en un tiroteo.",
        url: "https://images5.alphacoders.com/596/596248.jpg",
        category:"accion",
        destacado: false
      },
      {
        title: "GTA san andreas",
        id: 11,
        description: "Ambientada en los principios de la década de 1990, concretamente en 1992, Grand Theft Auto: San Andreas narra la historia de Carl Johnson (CJ), quien decide volver a Los Santos para asistir al funeral de su madre, Beverly, quien resultó asesinada en un tiroteo.",
        url: "https://images5.alphacoders.com/596/596248.jpg",
        category:"aventura",
        destacado: false
      },
      {
        title: "GTA san andreas",
        id: 12,
        description: "Ambientada en los principios de la década de 1990, concretamente en 1992, Grand Theft Auto: San Andreas narra la historia de Carl Johnson (CJ), quien decide volver a Los Santos para asistir al funeral de su madre, Beverly, quien resultó asesinada en un tiroteo.",
        url: "https://images5.alphacoders.com/596/596248.jpg",
        category:"aventura",
        destacado: false
      },
      {
        title: "GTA san andreas",
        id: 13,
        description: "Ambientada en los principios de la década de 1990, concretamente en 1992, Grand Theft Auto: San Andreas narra la historia de Carl Johnson (CJ), quien decide volver a Los Santos para asistir al funeral de su madre, Beverly, quien resultó asesinada en un tiroteo.",
        url: "https://images5.alphacoders.com/596/596248.jpg",
        category:"aventura",
        destacado: false
      },
      {
        title: "GTA san andreas",
        id: 14,
        description: "Ambientada en los principios de la década de 1990, concretamente en 1992, Grand Theft Auto: San Andreas narra la historia de Carl Johnson (CJ), quien decide volver a Los Santos para asistir al funeral de su madre, Beverly, quien resultó asesinada en un tiroteo.",
        url: "https://images5.alphacoders.com/596/596248.jpg",
        category:"aventura",
        destacado: false
      },
      {
        title: "GTA san andreas",
        id: 15,
        description: "Ambientada en los principios de la década de 1990, concretamente en 1992, Grand Theft Auto: San Andreas narra la historia de Carl Johnson (CJ), quien decide volver a Los Santos para asistir al funeral de su madre, Beverly, quien resultó asesinada en un tiroteo.",
        url: "https://images5.alphacoders.com/596/596248.jpg",
        category:"aventura",
        destacado: false
      },
      {
        title: "GTA san andreas",
        id: 16,
        description: "Ambientada en los principios de la década de 1990, concretamente en 1992, Grand Theft Auto: San Andreas narra la historia de Carl Johnson (CJ), quien decide volver a Los Santos para asistir al funeral de su madre, Beverly, quien resultó asesinada en un tiroteo.",
        url: "https://images5.alphacoders.com/596/596248.jpg",
        category:"aventura",
        destacado: false
      },
      {
        title: "GTA san andreas",
        id: 17,
        description: "Ambientada en los principios de la década de 1990, concretamente en 1992, Grand Theft Auto: San Andreas narra la historia de Carl Johnson (CJ), quien decide volver a Los Santos para asistir al funeral de su madre, Beverly, quien resultó asesinada en un tiroteo.",
        url: "https://images5.alphacoders.com/596/596248.jpg",
        category:"aventura",
        destacado: false
      },
      {
        title: "GTA san andreas",
        id: 18,
        description: "Ambientada en los principios de la década de 1990, concretamente en 1992, Grand Theft Auto: San Andreas narra la historia de Carl Johnson (CJ), quien decide volver a Los Santos para asistir al funeral de su madre, Beverly, quien resultó asesinada en un tiroteo.",
        url: "https://images5.alphacoders.com/596/596248.jpg",
        category:"aventura",
        destacado: false
      },
      {
        title: "GTA san andreas",
        id: 19,
        description: "Ambientada en los principios de la década de 1990, concretamente en 1992, Grand Theft Auto: San Andreas narra la historia de Carl Johnson (CJ), quien decide volver a Los Santos para asistir al funeral de su madre, Beverly, quien resultó asesinada en un tiroteo.",
        url: "https://images5.alphacoders.com/596/596248.jpg",
        category:"aventura",
        destacado: false
      },
      {
        title: "GTA san andreas",
        id: 20,
        description: "Ambientada en los principios de la década de 1990, concretamente en 1992, Grand Theft Auto: San Andreas narra la historia de Carl Johnson (CJ), quien decide volver a Los Santos para asistir al funeral de su madre, Beverly, quien resultó asesinada en un tiroteo.",
        url: "https://images5.alphacoders.com/596/596248.jpg",
        category:"accion",
        destacado: false
      },
      {
        title: "The legend of zelda nuevo",
        id: 21,
        description: "hyrule en peligro nuevo",
        url: "https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg",
        category:"accion",
        destacado: false
      },
      {
        title: "GTA san andreas",
        id: 22,
        description: "Ambientada en los principios de la década de 1990, concretamente en 1992, Grand Theft Auto: San Andreas narra la historia de Carl Johnson (CJ), quien decide volver a Los Santos para asistir al funeral de su madre, Beverly, quien resultó asesinada en un tiroteo.",
        url: "https://images5.alphacoders.com/596/596248.jpg",
        category:"deportes",
        destacado: false
      },
      {
        title: "The legend of zelda nuevo",
        id: 23,
        description: "hyrule en peligro nuevo",
        url: "https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg",
        category:"deportes",
        destacado: false
      },
      {
        title: "GTA san andreas",
        id: 24,
        description: "Ambientada en los principios de la década de 1990, concretamente en 1992, Grand Theft Auto: San Andreas narra la historia de Carl Johnson (CJ), quien decide volver a Los Santos para asistir al funeral de su madre, Beverly, quien resultó asesinada en un tiroteo.",
        url: "https://images5.alphacoders.com/596/596248.jpg",
        category:"deportes",
        destacado: false
      },
      {
        title: "The legend of zelda nuevo",
        id: 25,
        description: "hyrule en peligro nuevo",
        url: "https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg",
        category:"deportes",
        destacado: false
      },
      {
        title: "GTA san andreas",
        id: 26,
        description: "Ambientada en los principios de la década de 1990, concretamente en 1992, Grand Theft Auto: San Andreas narra la historia de Carl Johnson (CJ), quien decide volver a Los Santos para asistir al funeral de su madre, Beverly, quien resultó asesinada en un tiroteo.",
        url: "https://images5.alphacoders.com/596/596248.jpg",
        category:"deportes",
        destacado: false
      },
      {
        title: "The legend of zelda nuevo",
        id: 27,
        description: "hyrule en peligro nuevo",
        url: "https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg",
        category:"deportes",
        destacado: false
      },
      {
        title: "GTA san andreas",
        id: 28,
        description: "Ambientada en los principios de la década de 1990, concretamente en 1992, Grand Theft Auto: San Andreas narra la historia de Carl Johnson (CJ), quien decide volver a Los Santos para asistir al funeral de su madre, Beverly, quien resultó asesinada en un tiroteo.",
        url: "https://images5.alphacoders.com/596/596248.jpg",
        category:"deportes",
        destacado: false
      },
      {
        title: "The legend of zelda nuevo",
        id: 29,
        description: "hyrule en peligro nuevo",
        url: "https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg",
        category:"deportes",
        destacado: false
      },
      {
        title: "GTA san andreas",
        id: 30,
        description: "Ambientada en los principios de la década de 1990, concretamente en 1992, Grand Theft Auto: San Andreas narra la historia de Carl Johnson (CJ), quien decide volver a Los Santos para asistir al funeral de su madre, Beverly, quien resultó asesinada en un tiroteo.",
        url: "https://images5.alphacoders.com/596/596248.jpg",
        category:"deportes",
        destacado: false
      },
      {
        title: "The legend of zelda nuevo",
        id: 31,
        description: "hyrule en peligro nuevo",
        url: "https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg",
        category:"deportes",
        destacado: false
      },
      {
        title: "GTA san andreas",
        id: 32,
        description: "Ambientada en los principios de la década de 1990, concretamente en 1992, Grand Theft Auto: San Andreas narra la historia de Carl Johnson (CJ), quien decide volver a Los Santos para asistir al funeral de su madre, Beverly, quien resultó asesinada en un tiroteo.",
        url: "https://images5.alphacoders.com/596/596248.jpg",
        category:"estrategia",
        destacado: false
      },
      {
        title: "The legend of zelda nuevo",
        id: 33,
        description: "hyrule en peligro nuevo",
        url: "https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg",
        category:"estrategia",
        destacado: false
      },
      {
        title: "GTA san andreas",
        id: 34,
        description: "Ambientada en los principios de la década de 1990, concretamente en 1992, Grand Theft Auto: San Andreas narra la historia de Carl Johnson (CJ), quien decide volver a Los Santos para asistir al funeral de su madre, Beverly, quien resultó asesinada en un tiroteo.",
        url: "https://images5.alphacoders.com/596/596248.jpg",
        category:"estrategia",
        destacado: false
      },
      {
        title: "The legend of zelda nuevo",
        id: 35,
        description: "hyrule en peligro nuevo",
        url: "https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg",
        category:"estrategia",
        destacado: false
      },
      {
        title: "GTA san andreas",
        id: 36,
        description: "Ambientada en los principios de la década de 1990, concretamente en 1992, Grand Theft Auto: San Andreas narra la historia de Carl Johnson (CJ), quien decide volver a Los Santos para asistir al funeral de su madre, Beverly, quien resultó asesinada en un tiroteo.",
        url: "https://images5.alphacoders.com/596/596248.jpg",
        category:"estrategia",
        destacado: false
      },
      {
        title: "The legend of zelda nuevo",
        id: 37,
        description: "hyrule en peligro nuevo",
        url: "https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg",
        category:"estrategia",
        destacado: false
      },
      {
        title: "GTA san andreas",
        id: 38,
        description: "Ambientada en los principios de la década de 1990, concretamente en 1992, Grand Theft Auto: San Andreas narra la historia de Carl Johnson (CJ), quien decide volver a Los Santos para asistir al funeral de su madre, Beverly, quien resultó asesinada en un tiroteo.",
        url: "https://images5.alphacoders.com/596/596248.jpg",
        category:"estrategia",
        destacado: false
      },
      {
        title: "The legend of zelda nuevo",
        id: 39,
        description: "hyrule en peligro nuevo",
        url: "https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg",
        category:"estrategia",
        destacado: false
      },
      {
        title: "GTA san andreas",
        id: 40,
        description: "Ambientada en los principios de la década de 1990, concretamente en 1992, Grand Theft Auto: San Andreas narra la historia de Carl Johnson (CJ), quien decide volver a Los Santos para asistir al funeral de su madre, Beverly, quien resultó asesinada en un tiroteo.",
        url: "https://images5.alphacoders.com/596/596248.jpg",
        category:"estrategia",
        destacado: false
      },
      {
        title: "The legend of zelda nuevo",
        id: 41,
        description: "hyrule en peligro nuevo",
        url: "https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg",
        category:"estrategia",
        destacado: false
      }
    ]);
    localStorage.setItem('Posts', posts);
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
      },
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