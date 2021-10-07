export const validarCampoRequerido = (input) => {
  //preguntar si un input tiene un cadena de texto vacia tmb se lo puede hacer con .length
  if (input.value.trim() != "") {
    
    input.className = "form-control is-valid";
    return true;
  } else {
    
    input.className = "form-control is-invalid";
    return false;
  }
};
export const validarCodigo = (input) => {
  //preguntar si un input tiene un cadena de texto vacia tmb se lo puede hacer con .length
  if (input.value.trim() != "" && input.value.trim().length >= 3) {
    
    input.className = "form-control is-valid";
    return true;
  } else {
    
    input.className = "form-control is-invalid";
    return false;
  }
};
export const validarNros = (input) => {
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
export const validarURL = (input) => {
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
export const validarGeneral = () => {
  //preventdefault previene q recarge la pagina
  //console.log('desde la funcion validar general')
  

  let alerta = document.querySelector("#msjAlerta");
  //if(true),else(false)
  if (
    validarCodigo(codigo) &&
    validarURL(url) &&
    validarNros(cantidad) &&
    validarCampoRequerido(producto)
  ) {
    alerta.className = "alert alert-danger mt-4 d-none";
    return true
  } else {
    //aqui quiero mostrar el alert del maquetado

    alerta.className = "alert alert-danger mt-4 ";
    return false
  }
};


