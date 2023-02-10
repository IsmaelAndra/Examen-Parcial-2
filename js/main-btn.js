let btn_inicio = document.getElementById('btn-inicio');
let btn_acerca = document.getElementById('btn-acerca');
let btn_contacto = document.getElementById('btn-contacto');

function alerta(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Primero Inicie Sesión para Ingresar a estas paginas!',
      })
}

btn_inicio.addEventListener('click', alerta);
btn_acerca.addEventListener('click', alerta);
btn_contacto.addEventListener('click', alerta);