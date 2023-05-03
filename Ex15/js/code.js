window.onclick = (e) => {
  var image = document.getElementById("imagenDisplay");
  var figcaption = document.getElementById("imagenCaption");

  // Comprueba si se ha presionado una imagen de las miniaturas
  if (e.target.className == "miniatura") {
    // Cambia la imagen
    if (e.target.id == "mario") {
      image.src = "img/mario.png";
    } else if (e.target.id == "samus") {
      image.src = "img/samus.png";
    } else if (e.target.id == "link") {
      image.src = "img/link.png";
    } else if (e.target.id == "fox") {
      image.src = "img/fox.png";
    } else if (e.target.id == "pikachu") {
      image.src = "img/pikachu.png";
    } else if (e.target.id == "iceClimbers") {
      image.src = "img/iceClimbers.png";
    } else if (e.target.id == "megaman") {
      image.src = "img/megaman.png";
    } else if (e.target.id == "kirby") {
      image.src = "img/kirby.png";
    }
    // Cambia la captura de la imagen
    figcaption.innerText = e.target.alt;
  }
};
