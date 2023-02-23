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
        title: "Dead Space Remake",
        id: 7,
        description: "Isaac Clarke es un ingeniero cualquiera con la misión de reparar la descomunal nave extractora USG Ishimura, pero descubrirá que algo ha ido terriblemente mal. La tripulación de la nave ha sido asesinada y su querida compañera Nicole está perdida en algún lugar a bordo.Sin nadie que lo acompañe y armado únicamente con sus herramientas y habilidades de ingeniería, Isaac tendrá que darse prisa para encontrar a Nicole mientras va desvelando el terrorífico misterio de lo sucedido a bordo del Ishimura.",
        url: "https://images3.alphacoders.com/127/1277778.jpg",
        category:"aventura",
        destacado: false
      },
      {
        title: "God of War: Ragnarok",
        id: 8,
        description: "God of War: Ragnarok para PlayStation 5 es la secuela de God of War, el reinicio y a la vez secuela de los anteriores God of War para consolas PlayStation. Desarrollado por el prestigioso estudio Sony Santa Monica y con la dirección de Cory Barlog, encontraremos una nueva historia en la que Kratos deberá enfrentarse a diversos enemigos de inspiración nórdica. Explorando los mitos del Ragnarok, el apocalipsis que todo lo devorará según esta tradición del norte, la secuela se espera que llegue en 2021.",
        url: "https://images3.alphacoders.com/127/1273405.jpg",
        category:"accion",
        destacado: false
      },
      {
        title: "Elden Ring",
        id: 9,
        description: "Elden Ring es el nuevo videojuego de FromSoftware, creadores de Dark Souls, Sekiro o Bloodborne. Se trata del nuevo título de acción y rol para un jugador ideado por Hidetaka Miyazaki, que en esta ocasión, estrenará un mundo abierto más grande y ambicioso. Su argumento y mitología están firmados por George R.R. Martin, autor de Canción de hielo y fuego.",
        url: "https://images4.alphacoders.com/115/1151249.jpg",
        category:"aventura",
        destacado: false
      },
      {
        title: "Atomic Heart",
        id: 10,
        description: "Atomic Heart es un videojuego de acción en primera persona con toques de supervivencia para Xbox Series X, PS5 y PC, así como Xbox One y PS4. El título, desarrollado por Mindfish nos trasladará a un Moscú alternativo en el que los usuarios tendrán que arreglárselas para devolver la paz a un terreno convulso y peligroso, destrozado por el inminente colapso de una todopoderosa y omnipresente Unión Soviética.",
        url: "https://wallpapercave.com/dwp1x/wp10082977.jpg",
        category:"accion",
        destacado: false
      },
      {
        title: "The Last of Us: Parte I",
        id: 11,
        description: "Disfruta de la emotiva historia y los inolvidables personajes de The Last of Us, ganador de más de 200 premios de Juego del Año, ahora recreado desde cero.",
        url: "https://images5.alphacoders.com/408/408539.jpg",
        category:"aventura",
        destacado: false
      },
      {
        title: "Forspoken",
        id: 12,
        description: "Forspoken, anteriormente conocido como Project Athia, es el nuevo videojuego de acción y rol de Square Enix para PS5 y PC cuya protagonista deberá explorar un mundo repleto de naturaleza y grandes monstruos, aprovechándose de su agilidad, un aspecto que le permite saltar por grandes acantilados y capacidad para poder para controlar la naturaleza. Desarrollado en Luminous Engine, aprovechará las características técnicas de PS5.",
        url: "https://images6.alphacoders.com/121/1219079.jpg",
        category:"aventura",
        destacado: false
      },
      {
        title: "The Last of Us: Part II",
        id: 13,
        description: "The Last of Us 2 es la secuela de The Last of Us, uno de los juegos más aclamados de la consola PS3, que apareció en 2015 en PS4 en versión remasterizada. Esta continuación ha sido anunciada en el evento PlayStation Experience de diciembre de 2016, generando grandísimas expectativas entre los jugadores.",
        url: "https://images.alphacoders.com/783/783254.png",
        category:"aventura",
        destacado: false
      },
      {
        title: "FIFA 23",
        id: 14,
        description: "Vive la emoción del mayor torneo futbolístico con EA SPORTS FIFA 23 y la actualización de la FIFA World Cup masculina. EA SPORTS FIFA 23 lleva el juego del mundo al campo, con la tecnología HyperMotion2 que ofrece una experiencia de juego aún más realista, tanto la FIFA World Cup masculina como la femenina, la incorporación de equipos femeninos, funciones de juego cruzado y mucho más. Disfruta de una autenticidad única con más de 19 000 jugadores, más de 700 equipos, 100 estadios y más de 30 ligas en FIFA 23.",
        url: "https://images2.alphacoders.com/127/1276415.jpg",
        category:"deportes",
        destacado: false
      },
      {
        title: "Inazuma Eleven: Victory Road of Heroes",
        id: 15,
        description: "Inazuma Eleven Ares es la nueva entrega de la famosa saga de videojuegos de fútbol con toques de rol y acción. Este capítulo será un proyecto transmedia en el que nos contará su historia a través de un anime y de un videojuego, ofreciendo interactividad entre ambas versiones y formatos.",
        url: "https://images4.alphacoders.com/675/675017.jpg",
        category:"deportes",
        destacado: false
      },
      {
        title: "Paragon",
        id: 16,
        description: "Paragon para PC es un juego de acción estilo MOBA que sigue el modelo gratuito. Tendremos que acabar con la base del equipo rival en mapas parecidos a los MOBA tipo League of Legends, con tres pasillos que defender con torres. Dentro de las partidas ganaremos experiencia e iremos mejorando a nuestros héroes.",
        url: "https://images2.alphacoders.com/731/731784.png",
        category:"estrategia",
        destacado: false
      },
      {
        title: "Metal Slug Tactics",
        id: 17,
        description: "Metal Slug regresa con una nueva entrega de este universo. Descubre una nueva faceta del emblemático run'n'gun y sumérgete en un dinámico juego de rol táctico con elementos de roguelike. Divertido y desenfadado, Metal Slug Tactics coge los elementos que hacen que Metal Slug sea tan especial y único y los lleva al género táctico.",
        url: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_MetalSlugTactics.jpg",
        category:"estrategia",
        destacado: false
      },
      {
        title: "eFootball 2022",
        id: 18,
        description: "Ya está aquí una nueva era del fútbol virtual: \"PES\" evoluciona para convertirse en \"eFootball\". Disfruta ya de un nuevo capítulo en los juegos de fútbol con \"eFootball\" con este título gratuito actualizado a la nueva temporada 22/23, con mejoras gráficas y plantillas al día.",
        url: "https://wallpapercave.com/dwp1x/wp9844257.jpg",
        category:"deportes",
        destacado: false
      },
      {
        title: "Horizon Forbidden West",
        id: 19,
        description: "Horizon 2: Forbbiden West es la segunda parte de Horizon: Zero Dawn, el videojuego de acción en tercera persona y mundo abierto de Guerrilla Games para PlayStation 5 en exclusiva. Auspiciado por Sony, y como una de las nuevas sagas que han demostrado su poder y presencia en la sobremesa, nos narrará una épica historia de ciencia ficción postapocalíptica en la que la humanidad intenta sobrevivir tras la aparición de una serie de máquinas y robots que han sustituido a los seres vivos como especie dominante en la Tierra.",
        url: "https://images6.alphacoders.com/108/1082417.jpg",
        category:"aventura",
        destacado: false
      },
      {
        title: "The Callisto Protocol",
        id: 20,
        description: "The Callisto Protocol es un juego de acción y terror con planteamiento de survival horror para PS5, Xbox Series S/X y PC que lleva a los jugadores a una historia que transcurre en el año 2320 en Calisto, uno de los satélites de Júpiter. El objetivo del título es marcar un punto de inflexión en el género de horror y supervivencia en esta nueva generación, justo como hizo Dead Space.",
        url: "https://images3.alphacoders.com/128/1288485.jpg",
        category:"aventura",
        destacado: false
      },
      {
        title: "Resident Evil 4 Remake",
        id: 21,
        description: "Resident Evil 4 es un remake del Resident Evil 4 original del 2005.Conservando la esencia del juego original, Resident Evil 4 es la experiencia de Survival Horror definitiva en la cual se cruzan la vida y la muerte, el terror y la catarsis. Una experiencia que ha sido enriquecida con mecánicas de juego actualizadas, una historia reimaginada y gráficos de última generación.",
        url: "https://images4.alphacoders.com/124/1244847.jpg",
        category:"aventura",
        destacado: false
      },
      {
        title: "Fire Emblem Engage",
        id: 22,
        description: "La nueva entrega de la serie Fire Emblem se desarrolla en Elyos, un continente formado por cuatro naciones que rodean un Tierra Sagrada. Hace mil años se desencadenó una cruenta guerra entre Elyos y el Dragón Caído. Durante el conflicto, los habitantes de Elyos invocaron a héroes de otros mundos para que los ayudaran: los llamados Emblemas. Los guerreros de las distintas naciones lucharon unidos junto a ellos y, finalmente, lograron desterrar al Dragon Caído. Sin embargo, ciertas señales auguran el inminente regreso de este temible enemigo.",
        url: "https://images4.alphacoders.com/127/1272160.jpg",
        category:"estrategia",
        destacado: false
      },
      {
        title: "Marvel's Midnight Suns",
        id: 23,
        description: "Cuando la demoníaca Lilith y su temible horda se unen a los malvados ejércitos de Hydra, toca desatar el lado oscuro de Marvel. Como Hunter, tu misión es liderar un equipo de experimentados Superhéroes y peligrosos guerreros sobrenaturales hacia la victoria. ¿Podrán leyendas como Doctor Strange, Iron Man y Blade dejar a un lado sus diferencias ante una creciente amenaza apocalíptica? Si quieres salvar el mundo, tendrás que forjar alianzas y liderar al equipo a la batalla como los legendarios Midnight Suns. Con una serie de personajes y habilidades mejorables que te permitirán construir tu versión única de Hunter, elegirás cómo enviar al ejército de Lilith de vuelta al inframundo.",
        url: "https://images5.alphacoders.com/124/1245975.jpg",
        category:"estrategia",
        destacado: false
      },
      {
        title: "Age of Empires II: Definitive Edition",
        id: 24,
        description: "Age of Empires II: Definitive Edition celebra el vigésimo aniversario de una de las sagas de estrategia más populares y queridas del ocio digital, presentando ahora sus gráficos en 4K, remasterizando su audio y los efectos sonoros y estrenando una campaña nueva llamada The Last Khans.",
        url: "https://wallpapercave.com/dwp1x/wp4884170.jpg",
        category:"estrategia",
        destacado: false
      },
      {
        title: "Company of Heroes 3",
        id: 25,
        description: "Company of Heroes 3 continúa la saga de juegos de estrategia en tiempo real desarrollada por Relic Entertainment. Este llega cargado de novedades entre las que destacan nuevos modos de escaramuza para la campaña y el multijugador competitivo.",
        url: "https://venturebeat.com/wp-content/uploads/2022/07/COH3-North-Africa-Key-Art-Landscape.jpg?w=1200&strip=all",
        category:"estrategia",
        destacado: false
      },
      {
        title: "Warpips",
        id: 26,
        description: `Warpips es un videojuego de estrategia en tiempo real de tiro y afloja profundo y complejo pero rápido de aprender. La producción promete poner a prueba al jugador y desplegar la combinación correcta de soldados, tanques, helicópteros y aviones. "Si Command & Conquer y Nexus Wars tuvieran un hijo lleno de tanques y napalm, ¡este sería Warpips!"`,
        url: "https://wallpapercave.com/dwp1x/wp12005405.jpg",
        category:"estrategia",
        destacado: false
      },
      {
        title: "Park Beyond",
        id: 27,
        description: "Park Beyond es un videojuego de estrategia de gestión para PC y consolas donde los jugadores pueden crear el parque de atracciones de sus sueños sin que nada los pare, ¡ni siquiera la gravedad! Con controles accesibles y un modo campaña guíado por la historia, esta aventura invita a los usuarios a dar rienda suelta a su creatividad, pudiendo diseñar montañas rusas modulares, con el apoyo de Phil.",
        url: "https://static.bandainamcoent.eu/high/park-beyond/01-news/park-beyond-announcement.jpg",
        category:"estrategia",
        destacado: false
      },
      {
        title: "Football Manager 2023",
        id: 28,
        description: "Football Manager 2023, un videojuego de simulación y deportes a cargo de Sports Interactive y Sega para PC, Xbox One, PlayStation 5 y Xbox Series, no consiste únicamente en elegir las tácticas o crear un equipo, consiste en afrontar retos y abrir nuevos caminos mientras defines tu propio estilo. Toma el control de tu club y disfruta de una profundidad y unos detalles sin igual. Para pertenecer a la élite, tendrás que protagonizar titulares, ganarte el cariño y el respeto de la afición e imponerte a tus rivales.",
        url: "https://wallpapercave.com/dwp1x/wp11769748.jpg",
        category:"deportes",
        destacado: false
      },
      {
        title: "NBA 2K23",
        id: 29,
        description: "NBA 2K23 es un videojuego de deportes y baloncesto a cargo de Visual Concepts y 2K Sports para PC, PlayStation 4, Xbox One, PlayStation 5, Xbox Series y Switch. Ponte a la altura de las circunstancias y desarrolla todo tu potencial en NBA 2K23. Ponte a prueba contra los mejores jugadores del mundo y demuestra tu talento en Mi CARRERA. Combina a las estrellas actuales con leyendas eternas en MyTEAM. Construye tu propia dinastía en Mi GM o lleva la NBA en una nueva dirección con Mi LIGA. Enfréntate a equipos de la NBA o de la WNBA en JUGAR AHORA y experimenta un juego real.",
        url: "https://wallpapercave.com/dwp1x/wp11351398.jpg",
        category:"deportes",
        destacado: false
      },
      {
        title: "OlliOlli World",
        id: 30,
        description: "Atraviesa el genial mundo de Radland y conoce a personajes memorables mientras haces todo tipo de trucos sobre tu tabla para descubrir a los dioses místicos del skate en busca de Gnarvana. OlliOlli World es un videojuego de deporte y skate a cargo de Roll7 y Private Division para PC, PlayStation 4, Xbox One, PlayStation 5, Xbox Series y Switch.",
        url: "https://wallpapercave.com/dwp1x/wp10569460.jpg",
        category:"deportes",
        destacado: false
      },
      {
        title: "WWE 2K22",
        id: 31,
        description: "WWE 2K22 es una nueva entrega de la saga de deportes y lucha libre WWE 2K a cargo de Visual Concepts y 2K Games para PC, PlayStation 4, Xbox One, PlayStation 5 y Xbox Series. Levántate de la grada y toma el control de toda la fuerza del Universo WWE, desde los controles a los gráficos, para que la sensación sea la misma que estar al pie del ring en un WrestleMania. Reparte puñetazos, movimientos personales y remates con las Superstars y las leyendas más grandes y de aspecto más realista de la WWE: The Rock, Sasha Banks, Goldberg, “Stone Cold” Steve Austin, Brock Lesnar y más.",
        url: "https://wallpapercave.com/dwp1x/wp9962122.png",
        category:"deportes",
        destacado: false
      },
      {
        title: "MLB The Show 22",
        id: 32,
        description: "MLB The Show 22 es un videojuego de deportes y béisbol a cargo de Sony San Diego Studios y Sony Interactive Entertainment para PlayStation 4, Xbox One, PlayStation 5, Xbox Series y Switch. Crea y usa a múltiples jugadores de béisbol: ve más allá de la experiencia de béisbol al estilo de los RPG de Road to the Show y personaliza a tus jugadores para que te ayuden en tu progreso. ¡Diamond Dynasty vuelve mejor que nunca! Juega, consigue y crea tu colección de cartas de fantasía y haz que cobren vida en el campo.",
        url: "https://wallpapercave.com/dwp1x/wp10950418.jpg",
        category:"deportes",
        destacado: false
      },
      {
        title: "Madden NFL 23",
        id: 33,
        description: "Cuélate en los libros de historia con Madden NFL 23, un videojuego de deportes y fútbol americano a cargo de EA Tiburon y Electronic Arts para PC, PlayStation 4, Xbox One, PlayStation 5 y Xbox Series. Controla el impacto de tus decisiones de nuevas formas. Da órdenes en Franchise con actualizaciones de la lógica de traspasos y la agencia libre, cuélate en los libros de historia en Face of the Franchise: The League y reúne la plantilla más potente en Madden Ultimate Team.",
        url: "https://wallpapercave.com/dwp1x/wp11382343.jpg",
        category:"deportes",
        destacado: false
      },
      {
        title: "Mario Strikers: Battle League Football",
        id: 34,
        description: "Mario Strikers: Battle League Football es un juego de deportes y fútbol a cargo de Nintendo para Switch. Prepárate para el strike, un juego de cinco contra cinco similar al fútbol en el que el ataque es la clave. Marca goles haciendo remates y pases al resto de compañeros de equipo, y tampoco dudes en recurrir a entradas, objetos y tiros especiales devastadores. Échale el guante a cualquier orbe que veas en el terreno de juego y cárgalo mientras los rivales estén distraídos para ejecutar un hipertrallazo, un tiro especial con el que podrás marcar dos tantos a la vez.",
        url: "https://wallpapercave.com/dwp1x/wp11232877.jpg",
        category:"deportes",
        destacado: false
      },
      {
        title: "Windjammers 2",
        id: 35,
        description: "Windjammers 2, desarrollado y editado por DotEmu para PC, PlayStation 4, Xbox One, PlayStation 5, Xbox Series, Switch y Stadia, es la secuela del célebre juego deportivo de Neo Geo, ahora con gráficos en alta definición con toda la jugabilidad y esencia del original. 25 años más tarde, lanzarles discos voladores a tus rivales sigue molando tanto como antes. Trepidante, estratégico, fácil de aprender pero difícil de dominar: Windjammers 2 sigue los pasos de la primera entrega y recupera todo lo que convierte a la saga Windjammers en un juego competitivo y divertidísimo.",
        url: "https://wallpapercave.com/dwp1x/wp10381072.jpg",
        category:"deportes",
        destacado: false
      },
      {
        title: "Nintendo Switch Sports",
        id: 36,
        description: "Logra la victoria con raquetazos, patadas y remates en Nintendo Switch Sports, una colección de distintos deportes para Switch a cargo de Nintendo, de los que podrás disfrutar de manera muy realista. Disfruta de seis deportes, incluidos voleibol, fútbol y bolos. Los movimientos que hagas en el mundo real se reproducirán dentro del juego.",
        url: "https://wallpapercave.com/dwp1x/wp11051812.jpg",
        category:"deportes",
        destacado: false
      },
      {
        title: "Roller Champions",
        id: 37,
        description: "Roller Champions, desarrollado por Ubisoft Montreal y editado por Ubisoft para PC, PlayStation 4, Xbox One, PlayStation 5, Xbox Series y Switch, es un título de deportes competitivo free to play en el que participamos en frenéticos partidos que mezclan patinaje y velocidad. Compite contra equipos de tres jugadores y gana partidos y fans para acceder a la gloria y a estadios más grandes. Siente la emoción de subir y bajar por la pared de la pista, aplaca a los rivales y esquívalos en el momento justo para dar tantas vueltas como puedas.",
        url: "https://wallpapercave.com/dwp1x/wp11141315.jpg",
        category:"deportes",
        destacado: false
      },
      {
        title: "Crusader Kings III",
        id: 38,
        description: "Crusader Kings III es un título de estrategia a cargo de Paradox Development y Paradox Interactive para PC, PlayStation 5 y Xbox Series, la tercera parte de tan celebrada saga medieval. Crusader Kings III es el heredero de un largo legado de experiencias de gran estrategia histórica y llega con un montón de formas nuevas de garantizar el éxito de tu casa real. Lidera a una entre cientos de familias reales o nobles en el medievo, mientras adquieres poder y prestigio generación tras generación.",
        url: "https://wallpapercave.com/dwp1x/wp7300710.jpg",
        category:"estrategia",
        destacado: false
      },
      {
        title: "Inscryption",
        id: 39,
        description: "Inscryption es un juego de estrategia y cartas a cargo de Daniel Mullins Games y Devolver Digital para PC, PlayStation 4, PlayStation 5 y Switch, una odisea negra como la tinta que mezcla el roguelike de creación de mazos, puzles de estilo escape room y terror psicológico en un batido con un toque de sangre. Pero más oscuros aún son los secretos inscritos en las cartas...",
        url: "https://wallpapercave.com/dwp1x/wp11737540.jpg",
        category:"estrategia",
        destacado: false
      },
      {
        title: "Yu-Gi-Oh! Master Duel",
        id: 40,
        description: "Yu-Gi-Oh! Master Duel es un videojuego de estrategia y cartas a cargo de Konami para PC, PlayStation 4, Xbox One, PlayStation 5, Xbox Series, Switch y dispositivos iOS y Android. ¡Duelos trepidantes con impresionantes gráficos HD y una nueva, y dinámica banda sonora! ¡Prepárate para retar a Duelistas de todo el mundo! ¡La edición definitiva del juego de cartas competitivo que lleva más de 20 años evolucionando!",
        url: "https://wallpapercave.com/dwp1x/wp4561733.jpg",
        category:"estrategia",
        destacado: false
      },
      {
        title: "It Takes Two",
        id: 41,
        description: "It Takes Two es una innovadora aventura de acción cooperativa a cargo de Hazelight Studios y Electronic Arts para PC, PlayStation 4, Xbox One, PlayStation 5, Xbox Series y Switch en la que una mecánica muy diversa y una narrativa emotiva se entrelazan en un fantástico viaje. Embárcate en la aventura más loca de tu vida con It Takes Two, un juego cooperativo multigénero. Invita a un amigo a acompañarte gratis con el Pase de amigo en una emotiva historia repleta de desafíos deliciosamente rompedores.",
        url: "https://wallpapercave.com/dwp1x/wp8787626.jpg",
        category:"aventura",
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
        password: "admin159",
        alta: 'admin'
      },
      {
        name: "Usuario",
        id: 2,
        email: "usuario123@gmail.com",
        password: "usuario159",
        alta: false
      },
      {
        name: "leo",
        id: 3,
        email: "leo123@gmail.com",
        password: "leo159",
        alta: true
      },
      {
        name: "ivan",
        id: 4,
        email: "ivan123@gmail.com",
        password: "ivan159",
        alta: true
      },
      {
        name: "mauro",
        id: 5,
        email: "mauro123@gmail.com",
        password: "mauro159",
        alta: true
      },
      {
        name: "carlos",
        id: 6,
        email: "carlos123@gmail.com",
        password: "carlos159",
        alta: true
      },
      {
        name: "Usuario2",
        id: 7,
        email: "usuario2123@gmail.com",
        password: "usuario2159",
        alta: false
      },
      {
        name: "Usuario3",
        id: 8,
        email: "usuario3123@gmail.com",
        password: "usuario3159",
        alta: false
      },
      {
        name: "Usuario4",
        id: 9,
        email: "usuario4123@gmail.com",
        password: "usuario4159",
        alta: false
      },
    ]);
    localStorage.setItem('Users', user);
  }
}
compro(user);
