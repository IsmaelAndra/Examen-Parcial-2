const btn_Login = document.querySelector("#btn-login");
const btn_Cerrar_Login = document.querySelector("#btn-cerrar-login");
const ventana_Login = document.querySelector("#ventana-login");
const btn_Comprar_Ahora = document.querySelector("#btn-Compra-Ahora");
const btn_Aun_No_Registrado = document.querySelector("#btn-Aun-No-Registrado");
const ventana_Registro_login = document.querySelector("#ventana-registro");
const btn_Cerrar_Registro_login = document.querySelector("#btn-cerrar-registro");
const form_Registro_login = document.querySelector("#form-registro");
const form_Login = document.querySelector("#form-login");

btn_Login.addEventListener('click', () => {
    ventana_Login.showModal();
});

btn_Cerrar_Login.addEventListener('click', () => {
    ventana_Login.close();
    form_Login.reset();
});

btn_Comprar_Ahora.addEventListener('click', () => {
    ventana_Login.showModal();
});

btn_Aun_No_Registrado.addEventListener('click', () => {
    ventana_Registro_login.showModal();
});

btn_Cerrar_Registro_login.addEventListener('click', () => {
    ventana_Registro_login.close();
    form_Registro_login.reset();
});

function loguiarse(){
    let usuario = document.getElementById('input-usuario').value;
    let password = document.getElementById('input-contrasenia').value;
    const fiveMinutesInMillis = 5 * 60 * 1000;
    if (usuario == "Ismael" && password=="Ismael") {
        ventana_Login.close();
        Swal.fire({
            icon: 'success',
            title: 'Iniciado Sesion con Exito',
            showConfirmButton: false,
            time: 1500
          })
        setTimeout(pag_inicio, 2000);
    } else if (usuario == "" || password==""){
        ventana_Login.close();
        Swal.fire({
            icon: 'info',
            title: 'Oops...',
            text: 'No está llenado ningun campo o falta uno por llenar',
          })
    }
    else {
        ventana_Login.close();
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Datos Incorrectos Ingresados',
          })
    }
}

function pag_inicio(){
    window.location = '../html/inicio.html';
}


function registrarse(){
    ventana_Registro_login.close();
    ventana_Login.showModal();
}