//declaramos las variables para los controles 
var txtCod = document.getElementById("txtCod"); 
var txtNom = document.getElementById("txtNom"); 
var txtApe = document.getElementById("txtApe"); 
var txtDni = document.getElementById("txtDni"); 
var txtFec = document.getElementById("txtFec"); 
var txtDir = document.getElementById("txtDir"); 
var cboDistrito = document.getElementById("CboDistrito"); 
var txtTel = document.getElementById("txtTel"); 
var txtCel = document.getElementById("txtCel"); 
var txtCor = document.getElementById("txtCor"); 
var rbMas = document.getElementById("rbMas"); 
var rbFem = document.getElementById("rbFem"); 
var rbotr = document.getElementById("rbotr"); 
var chkEst = document.getElementById("chkEst"); 
var btnRegistrar = document.getElementById("btnRegistrar"); 
var btnActualizar = document.getElementById("btnActualizar"); 
//creamos un procedimiento para cargar el combo 
function CargarDistritoo() { 
//se selecciona la tabla 
var db = database.ref("distrito"); 
db.once("value", function (snapshot) { 
    if (snapshot.exists()) { 
        snapshot.forEach(function (data) { 
        // capturamos la informacion 
        var cod = data.key; 
        var nom = data.val().nombre; 
        // creamos un elemento 
        var options = document.createElement("option"); 
        //agregamos el nombre y el codigo al option 
        options.text = nom; 
        options.value = cod; 
        //agregamos los options al combo 
        cboDistrito.add(options); 
        }); 
    }
        });
    }
        // creamos un procedimiento para mostrar los datos de la tabla 
        function Mostrar() { 
        //declaramos una variable para contar el numero de filas 
        var i = 0; 
        // selecciono el tbody de la tabla donde voy a mostrar la informacion 
        var tbody = document.querySelector("#tbAlumno tbody"); 
        tbody.innerHTML = "";
        //seleccionamos la tabla que se quiere mostrar 
        var db = database.ref().child("alumno"); 
        db.once("value", function (snapshot) { 
if (snapshot.exists()) { 
    snapshot.forEach(function (data) { 
    var cod = data.key; 
    var nom = data.val().nombre; 
    var ape = data.val().apellido; 
    var dni = data.val().dni; 
    var fec = data.val().fecha; 
    var dir = data.val().direccion; 
    var dis = data.val().distrito; 
    var tel = data.val().telefono; 
    var cel = data.val().celular; 
    var cor = data.val().correo; 
    var sex = data.val().sexo; 
    var est = data.val().estado; 
    //declaramos una variable para las filas 
    var fila = tbody.insertRow(i); 
    //declaramos variables para los titulos 
    var titulonom = fila.insertCell(0); 
    var tituloape = fila.insertCell(1); 
    var titulodni = fila.insertCell(2); 
    var titulofec = fila.insertCell(3); 
    var titulodir = fila.insertCell(4); 
    var titulodis = fila.insertCell(5); 
    var titulotel = fila.insertCell(6); 
    var titulocel = fila.insertCell(7); 
    var titulocor = fila.insertCell(8); 
    var titulosex = fila.insertCell(9); 
    var tituloest = fila.insertCell(10); 
    var tituloact = fila.insertCell(11); 
    var titulobor = fila.insertCell(12); 
    //agregamos los valores 
    titulonom.innerHTML = nom; 
    tituloape.innerHTML = ape; 
    titulodni.innerHTML = dni; 
    titulofec.innerHTML = fec; 
    titulodir.innerHTML = dir; 
    titulodis.innerHTML = dis; 
    titulotel.innerHTML = tel; 
    titulocel.innerHTML = cel; 
    titulocor.innerHTML = cor; 
    titulosex.innerHTML = sex; 
    tituloest.innerHTML = est; 
    tituloact.innerHTML = 
    "<a href='#' onclick=Buscar('" + cod + "')>Seleccionar</a>"; 
    titulobor.innerHTML = 
    "<a href='#' onclick=Eliminar (" + cod + "')>Seleccionar</a>"; 
    tbody.appendChild(fila); 
    i++; 
});
}
});
        } 
// creamos un procedimiento para cargar informacion 
function Inicio() { 
Mostrar();
CargarDistrito();
}  
//llamamos al procedimiento para cargar combo 

window.onload = Inicio; 
// creamos un procedimiento para registrar 
function Registrar() { 
// capturando valores 
var nom = txtNom.value; 
var ape = txtApe.value; 
var dni = txtDni.value; 
var fec = txtFec.value; 
var dir = txtDir.value; 
var dis = cboDistrito.options [cboDistrito.selectedIndex] .text; 
var tel = txtTel.value; 
var cel = txtCel.value; 
var cor = txtCor.value; 
var sexo = ""; 
if (rbMas.checked == true) { 
sexo = "Masculino"; 
} else if (rbFem.checked == true) { 
sexo = "Femenino"; 
} else if (rbotr.checked == true) { 
sexo = "Otros"; 
} else { 
sexo = "";
}
var est = ""; 
if (chkEst.checked == true) { 
est = "Habilitado"; 
} else { 
est = "Deshabilitado"; 
//llamando a la funcion para registrar del firebase 
// writeUserData(nom, ape, cor); 
// creamos la tabla si no existiera y la seleccionamos 
var db = database.ref("alumno"); 
//asignamos los valores a la tabla que ha sido creada 
var registros = db.push(); 
//le paso los campos y los valores que tendra la tabla 
registros.set({ 
nombre: nom, 
apellido: ape, 
dni: dni, 
fecha: fec, 
direccion: dir, 
distrito: dis, 
telefono: tel, 
celular: cel, 
correo: cor, 
sexo: sexo, 
estado: est, 
}); 
alert("Se registro el alumno"); 
//llamamos al procedimiento mostrar 
// Mostrar(); 
window.location = "pagina11.html";
}
// creamos un procedimiento para buscar 
function Buscar(codigo) { 
// seleccionamos la tabla que se quiere buscar 
var db = database.ref().child("alumno"); 
db.once("value", function (snapshot) { 
    snapshot.forEach(function (data) { 
//declaramos una variable para obtener el ID (KEY) de la tabla 
var key = data.key; 
//verificar si el codigo es igual al ID de la tabla 
if (key == codigo) { 
//declaramos variables para capturar los datos 
var cod = key; 
var nom = data.val().nombre; 
var ape = data.val().apellido; 
var dni = data.val().dni; 
var fec = data.val().fecha; 
var dir = data.val().direccion; 
var dis = data.val().distrito; 
var tel = data.val().telefono; 
var cel = data.val().celular; 
var cor = data.val().correo; 
var sex = data.val().sexo; 
var est = data.val().estado; 
//le asignamos los valores a los controles
txtCod.value = cod; 
txtNom.value = nom; 
txtApe.value = ape; 
txtDni.value = dni; 
txtFec.value = fec; 
txtDir.value = dir; 
for (var i = 0; i < cboDistrito.options.length; i++) { 
    if (cboDistrito.options[i].text == dis) { 
        CboDistrito.options[i].selected = true; 
        break;
    }
}
        txtTel.value = tel; 
        txtCel.value = cel; 
        txtCor.value = cor; 
        if (sex == "Masculino") { 
        rbMas.checked = true; 
    } else if (sex == "Femenino") { 
        rbFem.checked = true; 
    } else if (sex == "Otros") { 
        rbotr.checked = true; 
    } else { 
        rbMas.checked = false; 
        rbFem.checked = false; 
        rbotr.checked = false; 
        } 
        if (est == "Habilitado") { 
        chkEst.checked = true; 
    } else { 
        chkEst.checked = false;
    }
}
    });
});
}
        //creamos el procedimiento para actualizar 
        function Actualizar() { 
//capturando valores 
var cod = txtCod.value; 
var nom = txtNom.value; 
var ape = txtApe.value; 
var dni = txtDni.value; 
var fec = txtFec.value; 
var dir = txtDir.value; 
var dis = cboDistrito.options[cboDistrito.selectedIndex] .text; 
var tel = txtTel.value; 
var cel = txtCel.value; 
var cor = txtCor.value; 
var sexo = ""; 
if (rbMas.checked == true) { 
sexo = "Masculino"; 
} else if (rbFem.checked == true) { 
    sexo = "Femenino"; 
} else if (rbotr.checked == true) { 
    sexo = "Otros"; 
} else { 
    sexo = ""; 
}
    
    var est = ""; 
    if (chkEst.checked == true) { 
    est = "Habilitado"; 
} else { 
    est = "Deshabilitado"; 
} 
//seleccionamos la tabla que queremos actualizar con el codigo del registro 
var db = database.ref("alumno/" + cod); 
//le asiganmos los valores que se van actualizar 
db.update({ 
    nombre: nom, 
    apellido: ape, 
    dni: dni, 
    fecha: fec, 
    direccion: dir, 
    distrito: dis, 
    telefono: tel, 
    celular: cel, 
    correo: cor, 
    sexo: sexo, 
    estado: est, 
}); 
alert("Se actualizo el dato"); 
//llamamos al procedimiento mostrar 
Mostrar(); 
        }
    //creamos un procedimiento para eliminar 
    function Eliminar(codigo) { 
    //preguntamos si se quiere eliminar el registro 
    var result = confirm("¿Estas seguro que quieres eliminar el registro?"); 
    // Evaluamos la respuesta 
    if (result) { 
    // creamos una variable para el codigo 
    var cod = codigo;
    //seleccionamos la tabla con el codigo a borrar y la borramos 
    var db = database.ref("alumno/" + cod).remove(); 
    alert("Se elimino el dato"); 
    //llmamaos al procedimiento Mostrar 
    Mostrar(); 
    }
}

//llamamos al procedimiento para registrar 
btnRegistrar.addEventListener("click", Registrar); 
btnActualizar.addEventListener("click", Actualizar);