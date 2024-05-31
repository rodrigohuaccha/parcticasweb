<?php
if($_SERVER['REQUEST_METHOD']==='POST'){
    #PASO #1: Declaramos las variables
    $nombre=$_POST['nombres'];
    $apellido=$_POST['apelllidos'];
    $email=$_POST['email'];
    $celular=$_POST['celular'];

    #PASO #2: Indicamos el destinatario
    $destinatario='rodriguez.m@gmail.com';

    #PASO #3 : Indicamos el asunto
    $asunto= 'MENSAJE DESDE MI WEB😊';

    #PASO #4 : Diseñamos el cuerpo del mensaje
    $cuerpo ='Nombres: ' . $nombre .'\n';
    $cuerpo .='Apellidos: ' . $apellido .'\n';
    $cuerpo .='Email: ' . $email .'\n';
    $cuerpo .='Celular: ' . $celular .'\n';

    #PASO #5: Programamos el envio al servidor de correo
    if(mail($destinatario, $asunto, $cuerpo)){
        echo " El mensaje se envio satisfactoriamente";
    } else{
        echo "El mensaje no se envio 😢";
    }

}

?>