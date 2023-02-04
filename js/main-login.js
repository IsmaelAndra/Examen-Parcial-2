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