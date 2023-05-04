let updateTime = () => {
  // Recoje fecha actual
  const date = new Date();

  // Separa las horas, minutos y segundos y les aplica el formato
  let hora =
    date.getHours().toString().padStart(2, 0) +
    ":" +
    date.getMinutes().toString().padStart(2, 0) +
    ":" +
    date.getSeconds().toString().padStart(2, 0);

  // Pasa la hora al componente "reloj"
  document.getElementById("reloj").textContent = hora;
};

let interval = setInterval(updateTime, 1000);
