const btn_Registro = document.querySelector("#btn-registro");
const btn_Cerrar_Registro = document.querySelector("#btn-cerrar-registro");
const ventana_Registro = document.querySelector("#ventana-registro");
const form_Registro = document.querySelector("#form-registro");

btn_Registro.addEventListener('click', () => {
    ventana_Registro.showModal();
});

btn_Cerrar_Registro.addEventListener('click', () => {
    ventana_Registro.close();
    form_Registro.reset();
});