//declarando varibles para los controles
var txtxCor=document.getElementById("txtCor");
var txtCon=document.getElementById("txtCon");
var btnRegistrar=document.getElementById("btnRegistrar");
//creamos un procedimento para limpiar las cajas
function Limpiar(){
    txtCor.value="";
    txtCon.value="";
    txtCor.focus();
}
//creamos un procedimiento para registrar el usuario
function RegistrarUsuario(){
   
    if(txtCor.value=="" || txtCor.value==null){
        alert("Ingresa el correo");
    }else if(txtCon.value=="" || txtCon.value==null){
        alert("Ingrese la contraseña");
        txtCon.focus();
    }else{
     //capturando valores
    var cor=txtCor.value;
    var con=txtCon.value;
    //llamamos a la funcion de Firebase para crear usuarios
    auth.createUserWithEmailAndPassword(cor, con)
  .then((userCredential) => {
    // Signed in
    alert("Se registro el usuario en Firebase");
    Limpiar();
  })
  .catch((error) => {
    alert("No se pudo registrar el usuario en Firebase");
    Limpiar();
  });
    }
}

//llamamos al procedimento en el boton
btnRegistrar.addEventListener("click",RegistrarUsuario);