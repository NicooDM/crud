const validarCampoRequerido = (input) => {
  //preguntar si un input tiene un cadena de texto vacia tmb se lo puede hacer con .length
  if (input.value.trim() != "") {
    console.log("el dato es correcto");
    input.className="form-control is-valid"
  } else {
    console.log("corregir el dato");
    input.className="form-control is-invalid"
  }
};
const validarNros=(input)=>{
    //creamos la expresion regular
    let patron=/^[0-9]{1,3}$/
    if(patron.test(input.value)){
        input.className="form-control is-valid"
    }
    else{
        input.className="form-control is-invalid"
    }
}

//traer los inputs(o textarea) que quiera validar
let codigo= document.querySelector('#codigo')
let cantidad = document.querySelector('#cantidad')

//le agregamos el evento que queremos
codigo.addEventListener('blur',()=>{validarCampoRequerido(codigo)})
cantidad.addEventListener('blur',()=>{validarNros(cantidad)})

