//declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var rbMas=document.getElementsById("rbMas");
var rbFem=document.getElementsById("rbFem");
var rbOtr=document.getElementsById("rbOtr");
var chkEst=document.getElementById("chkEst");

//creamos procedimentos para validar
//nombre

function validarNombre(){

    if(txtNom.value=="" || txtNom.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese sus nombres</li>";
        
    }else{
        error.style.display="none";
    }
    }

    //apellido

function validarApelido(){

    if(txtApe.value=="" || txtNom.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese sus apellidos</li>";
        
    }else{
        error.style.display="none";
    }
    }

    //correo

function validarCorreo(){

    if(txtCor.value=="" || txtNom.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese su correo</li>";
        
    }else{
        error.style.display="none";
    }
    }

     //sexo

function validarSexo(){

    if(rbMas.checked==false && rbFem.checked==false && rbOtr.checked==false){
        error.style.display="block";
        error.innerHTML+="<li>Por favor seleccione el sexo</li>";
        
    }else{
        error.style.display="none";
    }
    }

    //sexo

function validarEstado(){

    if(chkEst.checked==false){
        error.style.display="block";
        error.innerHTML+="<li>Por favor seleccione el estado</li>";
        
    }else{
        error.style.display="none";
    }
    }
//cramos un procedimento para validar

function validar(){
    error.innerHTML="";
    validarNombre();
    validarApelido();
    validarCorreo();
    validarSexo();
    validarEstado();
}

//creamos un procediemnto para asignar la clase error
function LlamarClase(m){
    error.style.display="block";
    error.innerHTML+="<li>"+m+"</li>"
}

//creamos una funcion Registrar
function Registrar (){
    //reiniciamos el estilo errror
    error.innerHTML="";

if(txtNom.value="" || txtNom.value==null){
    LlamarClase("Por favor ingresa tus nombres");
    LlamarClase("Por favor ingresa tus apellidos");
    LlamarClase("Por favor ingrese su correo");
    LlamarClase("Por favor selecione el sexo");
    LlamarClase("Por favor ingrese su estado");
    txtNom.focus();
}else if(txtApe.value==""|| txtApe.value==null){
    LlamarClase("Por favor ingresa tus apellidos");
    LlamarClase("Por favor ingrese su correo");
    LlamarClase("Por favor selecione el sexo");
    LlamarClase("Por favor ingrese su estado");
    txtApe.focus();
}else if (txtCor.value==""|| txtCor.value==null){
    LlamarClase("Por favor ingrese su correo");
    LlamarClase("Por favor selecione el sexo");
    LlamarClase("Por favor ingrese su estado");
    txtCor.focus();
}else if (rbMas.checked==false && rbFem.checked==false && rbOtr.checked==false){
    LlamarClase("Por favor selecione el sexo");
    LlamarClase("Por favor ingrese su estado");
    rbMas.focus();
}else if (chkEst.checked==false){
    LlamarClase("Por favor ingrese su estado");
    chkEst.focus();
}else{
    alert("Se registro Correctamente");
    error.innerHTML="";
}
}