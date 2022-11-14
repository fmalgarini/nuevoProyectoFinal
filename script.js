//valor del ticket!

let precioActualDelTicket = 200;
let pPrecioActual = document.getElementById("pPrecioActual");
pPrecioActual.innerHTML = `VALOR DEL TICKET: $${precioActualDelTicket}`;

let descuentoDe80 = precioActualDelTicket - (precioActualDelTicket * 80) / 100;
let descuentoDe50 = precioActualDelTicket - (precioActualDelTicket * 50) / 100;
let descuentoDe15 = precioActualDelTicket - (precioActualDelTicket * 15) / 100;
const btnBorrar = document.getElementById("btnBorrar");
const btnResumen = document.getElementById("btnResumen");
const selectSeniority = document.getElementById("selectSeniority");
const pResultado = document.getElementById("pResultado");
let inputNombre = document.getElementById("inputNombre");

//funcion btn para obtener Resumen.
function obtenerResumen() {
  if (selectSeniority.value === "Junior") {
    pResultado.innerHTML = `${inputNombre.value} el precio es de: $${precioActualDelTicket} pero como sos ${selectSeniority.value} tenes un descuento del 15% entonces pagas: $${descuentoDe15}`;
  } else if (selectSeniority.value === "Trainee") {
    pResultado.innerHTML = `${inputNombre.value} el precio es de: $${precioActualDelTicket} pero como sos ${selectSeniority.value} tenes un descuento del 50% entonces pagas: $${descuentoDe50}`;
  } else if (selectSeniority.value === "Estudiante") {
    pResultado.innerHTML = `${inputNombre.value} el precio es de: $${precioActualDelTicket} pero como sos ${selectSeniority.value} tenes un descuento del 80% entonces pagas: $${descuentoDe80}`;
  }
}

//funcion btn para borrar lo escrito.
function borrarResumen() {
  pResultado.innerHTML = `Debe seleccionar ESTUDIANTE-TRAINEE-JUNIOR`;
}

//Calling functions
btnBorrar.onclick = borrarResumen;
btnResumen.onclick = obtenerResumen;
