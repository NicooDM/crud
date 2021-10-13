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
    agregarProducto();
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
};
const cargaInicial=()=>{
  //traer los podructos del local storage si no dejar el arreglo vacio
  listaProductos = JSON.parse(localStorage.getItem('listaproductosKey')) || []
}
cargaInicial()