(() => {

  // const denunciaBtn = document.getElementById('denuncia');

  const loginBtn = document.getElementById('login');
  const usuarioHtml = document.getElementById('usuario');
  const emailHtml = document.getElementById('email');
  const passwordHtml = document.getElementById('password');

  loginBtn.addEventListener('click', (evento) => {
    console.log(usuarioHtml.value)
    if (usuarioHtml.value != "" && emailHtml.value != "" && passwordHtml.value != "") {
      alert('Bienvenido  ' + usuarioHtml.value + ', gracias por acceder al sistema')
    } else {
      alert(' Es requerido ingresar usuario, email y contraseña')
    }

  })

})();

