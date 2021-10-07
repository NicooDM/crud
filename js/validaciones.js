const validarCampoRequerido = (input) => {
  //preguntar si un input tiene un cadena de texto vacia tmb se lo puede hacer con .length
  if (input.value.trim() != "") {
    console.log("el dato es correcto");
    input.className = "form-control is-valid";
    return true;
  } else {
    console.log("corregir el dato");
    input.className = "form-control is-invalid";
    return false;
  }
};
const validarCodigo = (input) => {
  //preguntar si un input tiene un cadena de texto vacia tmb se lo puede hacer con .length
  if (input.value.trim() != "" && input.value.trim().length >= 3) {
    console.log("el dato es correcto");
    input.className = "form-control is-valid";
    return true;
  } else {
    console.log("corregir el dato");
    input.className = "form-control is-invalid";
    return false;
  }
};
const validarNros = (input) => {
  //creamos la expresion regular
  let patron = /^[0-9]{1,3}$/;
  if (patron.test(input.value)) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
};
const validarURL = (input) => {
  let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  if (patron.test(input.value.trim() != "" && input.value.trim())) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
};
//se puede poner event o e :)
const validarGeneral = (e) => {
  //preventdefault previene q recarge la pagina
  //console.log('desde la funcion validar general')
  e.preventDefault();

  let alerta = document.querySelector("#msjAlerta");
  //if(true),else(false)
  if (
    validarCodigo(codigo) &&
    validarURL(url) &&
    validarNros(cantidad) &&
    validarCampoRequerido(producto)
  ) {
    alerta.className = "alert alert-danger mt-4 d-none";
  } else {
    //aqui quiero mostrar el alert del maquetado

    alerta.className = "alert alert-danger mt-4 ";
  }
};
//traer los inputs(o textarea) que quiera validar
let codigo = document.querySelector("#codigo");
let cantidad = document.querySelector("#cantidad");
let url = document.querySelector("#url");
let producto = document.querySelector("#producto");
let descripcion = document.querySelector("#descripcion");
let formulario = document.querySelector("#formProducto");
//le agregamos el evento que queremos
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
formulario.addEventListener("submit", validarGeneral);
