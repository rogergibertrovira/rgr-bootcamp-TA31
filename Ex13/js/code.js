window.onclick = (e) => {
  if(e.target.tagName == 'P'){
    console.log('Se presiono un parrafo del documento');
    if(e.target.className == "tabla2"){
        console.log('Se presiono un parrafo contenido en la segunda tabla');
    }
  }
};