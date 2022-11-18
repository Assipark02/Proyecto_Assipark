
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input')

const expresiones = {
    correo: /^[a-zA-Z0-9.+-_]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^-{4,12}$/
}

const validarFormulario = (e) => {
    switch(e.target.name) {
        case "correo":
            if(expresiones.correo.test(e.target.value)){
                document.getElementById('grupo__correo').classList.remove('formulario__grupo-incorrecto')
                document.getElementById('grupo__correo').classList.add('formulario__grupo-correcto')
                document.querySelector('#grupo__correo #icono1').classList.remove('fa-times-circle')
                document.querySelector('#grupo__correo #icono1').classList.add('fa-check-circle')
            }else {
                document.getElementById('grupo__correo').classList.add('formulario__grupo-incorrecto');
                document.getElementById('grupo__correo').classList.remove('formulario__grupo-correcto');
                document.querySelector('#grupo__correo #icono1').classList.add('fa-times-circle')
                document.querySelector('#grupo__correo #icono1').classList.remove('fa-check-circle')
 
            }
        break;
        case "password":
            if(expresiones.correo.test(e.target.value)){
                document.getElementById('grupo__password').classList.remove('formulario__grupo-incorrecto')
                document.getElementById('grupo__password').classList.add('formulario__grupo-correcto')
                document.querySelector('#grupo__password #icono2').classList.remove('fa-times-circle')
                document.querySelector('#grupo__password #icono2').classList.add('fa-check-circle')
            }else {
                document.getElementById('grupo__password').classList.add('formulario__grupo-incorrecto');
                document.getElementById('grupo__password').classList.remove('formulario__grupo-correcto');
                document.querySelector('#grupo__password #icono2').classList.add('fa-times-circle')
                document.querySelector('#grupo__password #icono2').classList.remove('fa-check-circle')

            }
            
        break;
    }
    
}

inputs.forEach((input) => {
    input.addEventListener('keyup',  validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
 e.preventDefault();

});

hola = 1