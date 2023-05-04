window.onclick = (e) => {
  let operaciones = document.getElementById("operaciones");
  let resultado = document.getElementById("resultado");

  if (e.target.className == "num" || e.target.className == "simbolo") {
    // Comprueba si el ultimo caracter es un simbolo
    if (
      e.target.className == "simbolo" &&
      (operaciones.innerText.slice(-1) == "+" ||
        operaciones.innerText.slice(-1) == "-" ||
        operaciones.innerText.slice(-1) == "*" ||
        operaciones.innerText.slice(-1) == "/")
    ) {
      operaciones.innerText = operaciones.innerText.slice(0, -1);
    }
    operaciones.innerText += e.target.textContent;
  }

  // Elimina ultimo caracter de operaciones
  if (e.target.textContent == "DEL") {
    operaciones.innerText = operaciones.innerText.slice(0, -1);
  }

  // Elimina todo de operaciones
  if (e.target.textContent == "AC") {
    operaciones.innerText = "";
    resultado.innerText = "";
  }

  // Calcula el resultado
  if (e.target.id == "igual") {
    console.log("resultado");
    let primerDigito = operaciones.innerText.slice(
      0,
      operaciones.innerText.search(/\D/)
    );
    let operacion = operaciones.innerText
      .slice(operaciones.innerText.search(/\D/))
      .slice(0, 1);
    let segundoDigito = operaciones.innerText
      .slice(operaciones.innerText.search(/\D/))
      .slice(1);

    switch (operacion) {
      case "+":
        resultado.innerText = (
          Number(primerDigito) + Number(segundoDigito)
        ).toFixed(10);
        break;
      case "-":
        resultado.innerText = (
          Number(primerDigito) - Number(segundoDigito)
        ).toFixed(10);
        break;
      case "*":
        resultado.innerText = (
          Number(primerDigito) * Number(segundoDigito)
        ).toFixed(10);
        break;
      case "/":
        resultado.innerText = (
          Number(primerDigito) / Number(segundoDigito)
        ).toFixed(10);
        break;
    }
    operaciones.innerText = "";
  }

  if (e.target.textContent == "+/-") {
    resultado.innerText = -Number(operaciones.innerText);
    operaciones.innerText = "";
  }

  if (e.target.textContent == "1/x") {
    resultado.innerText = 1 / Number(operaciones.innerText);
    operaciones.innerText = "";
  }

  if (e.target.textContent == "√") {
    resultado.innerText = Math.sqrt(Number(operaciones.innerText));
    operaciones.innerText = "";
  }

  if (e.target.textContent == "^2") {
    resultado.innerText = Math.pow(Number(operaciones.innerText), 2);
    operaciones.innerText = "";
  }
};
