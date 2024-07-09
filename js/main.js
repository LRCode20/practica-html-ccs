(() => {

  // definicion de variables
  // const denunciaBtn = document.getElementById('denuncia');
  const loginBtn = document.getElementById('login');
  const usuarioHtml = document.getElementById('usuario');
  const emailHtml = document.getElementById('email');
  const passwordHtml = document.getElementById('password');
  const nuew = document.createElement('div');


  const contenedorArticulos = document.querySelector('#contenedor-articulos');
  const articulosDb = [
    {
      img: 'https://www.trabajo.gob.hn/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-31-at-9.44.59-AM-1024x676.jpeg',
      title: 'Es oficial:SIHCAL ya fue Publicado en la Gaceta',
      date: 'Feb 1, 2024 | Noticias',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maxime, asperiores consequuntur molestiae ullam accusantium quod temporibus magnam id impedit, rerum esse eius repellendus amet, sapiente omnis accusamus! Quidem, ratione?'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-F4Xy9Yfk8gkZrXZZhds6H8CXnAcn7VMOUw&s',
      title: 'Trabajo del Campo',
      date: 'Feb 6, 2024 | Noticias',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maxime, asperiores consequuntur molestiae ullam accusantium quod temporibus magnam id impedit, rerum esse eius repellendus amet, sapiente omnis accusamus! Quidem, ratione?'
    },
    {
      img: 'https://hondudiario.com/wp-content/uploads/2024/07/FotoJet-34-1.png',
      title: 'Nuevo ministro nombrado',
      date: 'Feb 8, 2024 | Noticias',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maxime, asperiores consequuntur molestiae ullam accusantium quod temporibus magnam id impedit, rerum esse eius repellendus amet, sapiente omnis accusamus! Quidem, ratione?'
    }
  ];


  loginBtn.addEventListener('click', (evento) => {
    console.log(usuarioHtml.value)
    if (usuarioHtml.value != "" && emailHtml.value != "" && passwordHtml.value != "") {
      alert('Bienvenido  ' + usuarioHtml.value + ', gracias por acceder al sistema')
    } else {
      alert(' Es requerido ingresar usuario, email y contraseña')
    }
  });

  const agregarArticulos = (articulo) => {
    let { img, title, date, description } = articulo;
    contenedorArticulos.innerHTML += `
    <article>
          <img src="${img}" alt="Gaceta">
          <h2>${title}</h2>
          <p>${date}</p>
          <p>${description}</p>
        </article>
    `;
  }

  articulosDb.map((articulo) => agregarArticulos(articulo))


})();

