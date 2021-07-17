//variables para los controles 
var txtNom = document.getElementById("txtNom"); 
var txtApe = document.getElementById("txtApe"); 
var txtCor = document.getElementById("txtCor"); 
var btnRegistrar = document.getElementById("btnRegistrar"); 
//utilizamos la funcion para registrar del firebase 
// function writeUserData(n, a, c) { 
    // database.ref("registro/").set({ 
    //nombre: n, 
    //apellido: a, 
    //correo: C, 
    // }); 
    //}
    // creamos un procedimiento para buscar 
    function Buscar (codigo) { 
// seleccionamos la tabla que se quiere buscar 
var db = database.ref().child("registro"); 
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
var cor = data.val().correo; 
//le asignamos los valores a los controles 
txtCod.value = cod; 
txtNom.value = nom; 
txtApe.value = ape; 
txtCor.value = cor; 
}
}); 
});
    }

    //creamos un procedimiento para mostrar los datos de la tabla 
    function Mostrar() { 
    //declaramos una variable para contar el numero de filas 
    var i = 0; 
    // selecciono el tbody de la tabla donde voy a mostrar la informacion 
    var tbody = document.querySelector("#tbRegistro tbody"); 
    tbody.innerHTML = ""; 
    // seleccionamos la tabla que se quiere mostrar 
    var db = database.ref().child("registro"); 
    db.once("value", function (snapshot) { 
    if (snapshot.exists()) { 
    snapshot.forEach(function (data) { 
    var nom = data.val().nombre; 
    var ape = data.val().apellido; 
    var cor = data.val().correo; 
    //declaramos una variable para las filas 
    var fila = tbody.insertRow(i); 
    //declaramos variables para los titulos 
    var titulonom = fila.insertCell(0); 
    var tituloape = fila.insertCell(1); 
    var titulocor = fila.insertCell(2);
    var tituloact = fila.insertCell(3); 
    var titulobor = fila.insertCell(4); 
    //agregamos los valores 
    titulonom.innerHTML = nom; 
    tituloape.innerHTML = ape; 
    titulocor.innerHTML = cor; 
    tituloact.innerHTML = 
"<a href='#' onclick=Buscar('" + cod + "')>Seleccionar</a>"; 
titulobor.innerHTML = 
"<a href='#' onclick=Eliminar('" + cod + "')>Seleccionar</a>"; 
tbody.appendChild(fila); 
i++; 
});
    } 
}); 
} 
//llamamos a la funcion Mostrar cuando carga la pagina 
window.onload = Mostrar; 
// creamos un procedimiento para limpiar 
function Limpiar() { 
txtNom.value = "";
txtape.value = "";
txtCor.value = ""; 
txtNom.focus(); 
}
// creamos un procedimiento para registrar 
function Registrar() { 
if (txtNom.value == "" || txtNom.value == null) { 
alert("Ingrese sus nombres"); 
txtNom. focus(); 
} else if (txtApe.value == "" || txtApe.value == null) { 
alert("Ingrese sus apellidos"); 
txtApe.focus(); 
} else if (txtCor.value == "" || txtCor.value == null) { 
alert("Ingrese el correo"); 
txtCor.focus(); 
} else { 
// capturando valores 
var nom = txtNom.value;
var ape = txtApe.value; 
var cor = txtCor.value; 
//llamando a la funcion para registrar del firebase 
// writeUserData(nom, ape, cor); 
// creamos la tabla si no existiera y la seleccionamos 
var db = database.ref("registro"); 
//asignamos los valores a la tabla que ha sido creada 
var registros = db.push(); 
//le paso los campos y los valores que tendra la tabla 
registros.set({ 
nombre: nom, 
apellido: ape, 
correo: cor, 
}); 
alert("Se registro el dato"); 
//llamamos a la funcion Limpiar 
Limpiar(); 
//llamamos al procedimiento mostrar 
Mostrar(); 
}
}
// creamos el procedimiento para actualizar 
function Actualizar() { 
// capturando valores 
var cod = txtCod.value; 
var nom = txtNom.value; 
var ape = txtApe.value; 
var cor = txtCor.value; 
// seleccionamos la tabla que queremos actualizar con el codigo del registro 
var db = database.ref("registro/" + cod); 
//le asiganmos los valores que se van actualizar 
db.update({ 
nombre: nom, 
apellido: ape, 
correo: cor, 
}); 
alert("Se actualizo el dato"); 
//llamamos al procedimiento Limpiar 
Limpiar(); 
//llamamos al procedimiento mostrar 
Mostrar(); 
}
// creamos un procedimiento para eliminar 
function Eliminar(codigo) { 
//preguntamos si se quiere eliminar el registro 
var result = confirm("¿Estas seguro que quieres eliminar el registro?"); 
//Evaluamos la respuesta 
if (result) { 
// creamos una variable para el codigo 
var cod = codigo;
//seleccionamos la tabla con el codigo a borrar y la borramos 
var db = database.ref("registro/" + cod).remove(); 
alert("Se elimino el dato"); 
//llamamos al procedimiento limpiar 
Limpiar(); 
//llmamaos al procedimiento Mostrar 
Mostrar();
}
}
//asignamos el procedimiento al boton 
btnRegistrar.addEventListener("click", Registrar); 
btnActualizar.addEventListener("click", Actualizar); 