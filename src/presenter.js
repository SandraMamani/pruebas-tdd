import FizzBuzz from "./FizzBuss";
const numero_imput = document.querySelector("#num");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-mult");


form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const numero_fb= Number.parseInt(numero_imput.value);
    const fb = new FizzBuzz();
    div.innerHTML = "<p>" + fb.generar(numero_fb) + "</p>";
  });