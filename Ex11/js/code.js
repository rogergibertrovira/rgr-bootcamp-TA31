let tiradas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const tirarDados = () => {
  let min = Math.ceil(1);
  let max = Math.floor(6);
  let dado1 = Math.floor(Math.random() * (max - min + 1) + min);
  let dado2 = Math.floor(Math.random() * (max - min + 1) + min);

  let suma = dado1 + dado2;

  tiradas[suma]++;
};

for (i = 0; i < 10000; i++) {
  tirarDados();
}

console.log("Sumas de los lanzamientos");
document.write("Sumas de los lanzamientos <br>");
for (i = 2; i <= 12; i++) {
  console.log(i + ": " + tiradas[i]);
  document.write(i + ": " + tiradas[i] + "<br>");
}