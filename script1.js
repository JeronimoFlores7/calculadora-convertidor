var f = document.getElementById("fahrenheit");
var c = document.getElementById("celcius");
var resultado1 = document.getElementById("resultado1");
var resultado2 = document.getElementById("resultado2");
var temperatura = document.getElementById("temperatura");

function fahrenheit() {
    var numero = parseFloat(document.getElementById("numero").value);
    if (!isNaN(numero)) {
        gradosF = (numero * 1.8) + 32;
        resultado1.value = gradosF;
        color(gradosF);
    }
    
}

    function color(gradosF) {
      if(gradosF >= 14 && gradosF < 32){
        document.body.style.backgroundColor = "blue";
                  document.body.style.color = "white";
                  temperatura.value = "Temperatura baja";
      }
      else if(gradosF >= 32 && gradosF < 68){
        document.body.style.backgroundColor = "green";
                  document.body.style.color = "black";
                  temperatura.value = "Temperatura adecuada";
      }
      else if(gradosF >= 68 && gradosF < 96){
        document.body.style.backgroundColor = "red";
                  document.body.style.color = "black";
                  temperatura.value = "Temperatura alta";
      }
      else{
        temperatura.style.backgroundColor = "";
                  temperatura.value = "Temperatura desconocida";
      }
    }

function celcius() {
    var numero = parseFloat(document.getElementById("numero").value);
    if (!isNaN(numero)) {
        gradosC = (numero - 32) / 1.8;
        resultado2.value = gradosC;
        console.log(numero);
    }
}

f.addEventListener("click", fahrenheit)
c.addEventListener("click", celcius)