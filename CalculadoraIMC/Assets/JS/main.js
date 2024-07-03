const form = document.querySelector("#formularioIMC");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputPeso = e.target.querySelector("#input-peso");
  const inputAltura = e.target.querySelector("#input-altura");
  const repPeso = inputPeso.value.replace(",", ".");
  const repAltura = inputAltura.value.replace(",", ".");
  const peso = Number(repPeso);
  const altura = Number(repAltura);
  console.log(peso, altura);

  if (!peso && !altura) {
    setResultado("Valores Inválidos <i class='fas fa-times-circle'></i>", false, "invalid");
    return;
  } else if (!peso) {
    setResultado("Peso Inválido <i class='fas fa-times-circle'></i>", false, "invalid");
    return;
  } else if (!altura) {
    setResultado("Altura Inválida <i class='fas fa-times-circle'></i>", false, "invalid");
    return;
  } else {
    const imc = calculaImc(peso, altura);
    const categoria = categoriaImc(imc);

    console.log(categoria);
    setResultado(`Resultado IMC: ${imc.toFixed(2)} - ${categoria}`, true, categoria);
    return;
  }
});

function calculaImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, isValid, categoria) {
  const resultado = document.querySelector("#resultado");
  const p = criaP();
  resultado.innerHTML = "";
  p.innerHTML = msg;

  if (isValid) {
    p.classList.add("resultado-positivo", categoria);
  } else {
    p.classList.add("resultado-negativo", categoria);
  }

  resultado.appendChild(p);
}

function categoriaImc(imc) {
  if (imc < 18.5) {
    return "abaixo-do-peso";
  } else if (imc >= 18.5 && imc <= 24.9) {
    return "peso-normal";
  } else if (imc >= 25 && imc <= 29.9) {
    return "sobrepeso";
  } else if (imc >= 30 && imc <= 34.9) {
    return "obesidade-grau-1";
  } else if (imc >= 35 && imc <= 39.9) {
    return "obesidade-grau-2";
  } else {
    return "obesidade-grau-3";
  }
}
