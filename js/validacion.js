// PASO#1: ESCUCHAR O DETECTAR EL INGRESO DE DAROS 
// EN EL NAVEGADOR
window.addEventListener('DOMContentLoaded',function(){

  //PASO#2: CREAMOS UNA CONSTANTE QUE PERMITA ALMACENAR 
  //O ENLAZAR O QUE DICTEMOS EN CADA INPUT O CAJA
  const nombres = document.getElementById('nombres');
  const  dni= document.getElementById('dni');
  const direc = document.getElementById('direc');
  const resic = document.getElementById('resic');
  const celuAp = document.getElementById('celuAp');
  const celuAL = document.getElementById('celuAL');
  const nomUsu = document.getElementById('nomUsu');
  const contraseña = document.getElementById('contraseña');


  //ASIGNAMOS A CADA CONSTANTE SU RESPECTIVA FUNCION.
  nombres.addEventListener('input', validarNombre);
  dni.addEventListener('input', validarDni);
  direc.addEventListener('input', validarDireccion);
  resic.addEventListener('input', validarResidencia);
  celuAp.addEventListener('input', validarCelular)
  celuAL.addEventListener('input', validarCelular);
  nomUsu.addEventListener('input', validarNombreUsuario);
  contraseña.addEventListener('input', validarContraseña);

  //PASO#4: FINALEMNTE, CREAMOS CADA UNA DE LAS FUNCIONES
  function validarNombre(event){
    const n= event.data;
    if(!/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/.test(n)){
        Swal.fire({
            icon: "error",
            title: "¡Error!",
            text: "Solo se acepta letras NO numeros",
            footer: '<a href="#">Validacion de Sistema</a>'
          });
    }
  }
  
  function validarDni(event){
    const n= event.data;
    if(!/^[0-9]+$/.test(n)){
        Swal.fire({
            icon: "error",
            title: "¡Error!",
            text: "Solo se acepta letras NO numeros",
            footer: '<a href="#">Validacion de Sistema</a>'
          });
    }
  }

  function validarDireccion(event){
    const n= event.data;
    if(!/^[a-zA-Z0-9\s\-\#\.]+$/.test(n)){
        Swal.fire({
            icon: "error",
            title: "¡Error!",
            text: "Solo se acepta letras NO numeros",
            footer: '<a href="#">Validacion de Sistema</a>'
          });
    }
  }

  
  function validarResidencia(event){
    const n= event.data;
    if(!/^[a-zA-Z0-9\s\-\#\.]+$/.test(n)){
        Swal.fire({
            icon: "error",
            title: "¡Error!",
            text: "Solo se acepta letras NO numeros",
            footer: '<a href="#">Validacion de Sistema</a>'
          });
    }
  }

   
  function validarCelular(event){
    const n= event.data;
    if(!/^[0-9]+$/.test(n)){
        Swal.fire({
            icon: "error",
            title: "¡Error!",
            text: "Solo se acepta letras NO numeros",
            footer: '<a href="#">Validacion de Sistema</a>'
          });
    }
  }

  function validarNombreUsuario(event){
    const n= event.data;
    if(!/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/.test(n)){
        Swal.fire({
            icon: "error",
            title: "¡Error!",
            text: "Solo se acepta letras NO numeros",
            footer: '<a href="#">Validacion de Sistema</a>'
          });
    }
  }


  function validarContraseña(event){
    const n= event.data;
    if(!
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/.test(n)){
        Swal.fire({
            icon: "error",
            title: "¡Error!",
            text: "Solo se acepta letras NO numeros",
            footer: '<a href="#">Validacion de Sistema</a>'
          });
    }
  }
})