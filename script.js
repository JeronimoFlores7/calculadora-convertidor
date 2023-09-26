function sumar(num1, num2) {
  return +num1 + +num2;
}

function restar(num1, num2) {
  return num1 - num2;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}

function dividir(num1, num2) {
  return num1 / num2;
}


const botones = document.querySelectorAll("button");

for (let boton of botones) {
  boton.addEventListener("click", function() {
    
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

   
    const resultado = this.id === "suma" ? sumar(num1, num2) :
      this.id === "resta" ? restar(num1, num2) :
      this.id === "multiplicacion" ? multiplicar(num1, num2) :
      dividir(num1, num2);

   
    const signo = this.id === "suma" ? "+" :
      this.id === "resta" ? "-" :
      this.id === "multiplicacion" ? "*" :
      "/";

    
      document.getElementById("resultado").value = `${resultado}`;
      document.getElementById("operador").value = `${signo}`;
  });
}
