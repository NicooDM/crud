import {
  validarCodigo,
  validarCampoRequerido,
  validarNros,
  validarURL,
  validarGeneral,
} from "./validaciones.js";
import { Producto } from "./productoClass.js";
let codigo = document.querySelector("#codigo");
let cantidad = document.querySelector("#cantidad");
let url = document.querySelector("#url");
let producto = document.querySelector("#producto");
let descripcion = document.querySelector("#descripcion");
let formulario = document.querySelector("#formProducto");
let listaProductos = [];
let productoExistente=false; //si es false significa que tengo que agregar un nuevo producto
// true significa que tengo que modificar un producto existente
let btnNuevoProducto = document.querySelector('#botonnuevoProducto')
                  
codigo.addEventListener("blur", () => {
  validarCodigo(codigo);
});
cantidad.addEventListener("blur", () => {
  validarNros(cantidad);
});
url.addEventListener("blur", () => {
  validarURL(url);
});
producto.addEventListener("blur", () => {
  validarCampoRequerido(producto);
});
descripcion.addEventListener("blur", () => {
  validarCampoRequerido(descripcion);
});

const guardarProducto = (e) => {
  e.preventDefault();
  //verificar que pase todas las validaciones
  if (validarGeneral()) {

    //tengo que crear el producto (true)
    if(productoExistente===false){
      agregarProducto();


    }
    else{
     actualizarProducto()

    }
    

    //tengo que modificar un producto
  } else {
    console.log("no");
  }
};
formulario.addEventListener("submit", guardarProducto);
const agregarProducto = () => {
  //crear objeto producto
  let productoNuevo = new Producto(
    codigo.value,
    producto.value,
    descripcion.value,
    cantidad.value,
    url.value
  );

  //el arreglo listaProductos lo almaceno en localstorage
  listaProductos.push(productoNuevo);
  console.log(listaProductos);
  localStorage.setItem("listaproductosKey", JSON.stringify(listaProductos));
  //limpiar el formulario
  limpiarForm();

  //mostrar un mensaje al usuario

  //mostrar el objeto en una tabla
};
const limpiarForm = () => {
  //limpia los value del formulario
  formulario.reset();
  //limpiar los estilos
  codigo.className = "form-control";
  cantidad.className = "form-control";
  url.className = "form-control";
  descripcion.className = "form-control";
  cantidad.className = "form-control";
  producto.className = "form-control";
  //resetear el valor de la variable booleana
  productoExistente=false;
};
const cargaInicial = () => {
  //traer los podructos del local storage si no dejar el arreglo vacio
  listaProductos = JSON.parse(localStorage.getItem("listaproductosKey")) || [];
  listaProductos.forEach((itemProducto) => {
    crearFilas(itemProducto);
    //codigo que se ejecuta por cada elemento del arreglo
  });
};

const crearFilas = (parametroFilas) => {
  let tabla = document.querySelector("#tablaProducto");
  console.log(parametroFilas);
  tabla.innerHTML += `<tr>
  <th scope="row">${parametroFilas.codigo}</th>
  <td>${parametroFilas.nombre}</td>
  <td>${parametroFilas.descripcion}</td>
  <td>${parametroFilas.cantidad}</td>
  <td>${parametroFilas.url}</td>
  <td>
    <button class="btn btn-danger">Borrar</button>
    <button class="btn btn-success"onclick="prepararEdicion('${parametroFilas.codigo}')">Editar</button>
  </td>
</tr>`;
};

window.prepararEdicion = (codigoProducto) => {
  //buscar el objeto
  let productoBuscado = listaProductos.find((itemProducto) => {
    return itemProducto.codigo == codigoProducto;
  });
  console.log(productoBuscado);
  //mostrarlo en formulario
  codigo.value = productoBuscado.codigo;
  cantidad.value=productoBuscado.cantidad;
  descripcion.value=productoBuscado.descripcion;
  url.value=productoBuscado.url;
  producto.value=productoBuscado.nombre;
  //cambio el valor de la variable PRODUCTOEXISTENTE
  productoExistente=true;
};

cargaInicial();
btnNuevoProducto.addEventListener('click',limpiarForm)

const actualizarProducto=()=>{
  //buscar la posicion del elemento a modificar
  let posiciondeProducto = listaProductos.findIndex((itemProducto)=>{return itemProducto.codigo==codigo.value})
  console.log(posiciondeProducto)
  //modificar los datos
  listaProductos[posiciondeProducto].nombre = producto.value;
  listaProductos[posiciondeProducto].cantidad = cantidad.value;
  listaProductos[posiciondeProducto].url = url.value;
  listaProductos[posiciondeProducto].descripcion = descripcion.value;
  


  //modificar el localstorage
  localStorage.setItem("listaproductosKey",JSON.stringify(listaProductos))
  //volver a dibujar la tabla
  borrarFilas();
  listaProductos.forEach((itemProducto)=>{crearFilas(itemProducto)})
  limpiarForm()

}

const borrarFilas=()=>{
  let tabla = document.querySelector("#tablaProducto");
  
  tabla.innerHTML = ""

}