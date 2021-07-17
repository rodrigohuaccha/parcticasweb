//crear un vector que contega la informacion del producto 
var producto=[]; 
// creamos un procedimiento para poder registrar 
function Registrar (nomproducto,catproducto, preproducto, canproducto) { 
    var NuevoProducto={ 
        nombre: nomproducto, 
        categoria: catproducto, 
        precio:preproducto, 
        cantidad:canproducto 
    }; 
    producto.push(NuevoProducto);
}
        //creamos una funcion para mostrar la informacion del producto 
        function Mostrar(){ 
return producto; 
        }
