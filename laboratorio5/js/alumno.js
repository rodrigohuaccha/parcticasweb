//crear un vector que contega la informacion del producto 
var alumno=[]; 
// creamos un procedimiento para poder registrar 
function Registrar (nomalumno, apealumno, dnialumno, curalumno, turalumno, estalumno ) { 
    var NuevoAlumno={ 
        nombre: nomalumno, 
        apellido:apealumno,
        dni:dnialumno,
        curso:curalumno,
        turno:turalumno,
        estado:estalumno
    }; 
    alumno.push(NuevoAlumno);
}
        //creamos una funcion para mostrar la informacion del producto 
        function Mostrar(){ 
return alumno; 
        }
