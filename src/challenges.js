// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(texto) {
  // seu código aqui
  return texto.split(" ");
}

// Desafio 4
function concatName(textoArray) {
  // seu código aqui
  let textoIncialFinal = `${textoArray.pop()}, ${textoArray.shift()}`
  return textoIncialFinal;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(valores) {
  // seu código aqui
  let maior = 0;
  let cont = 0;
  for (let valor in valores) {
    if (valores[valor] > maior) {
      maior = valores[valor];
    }
  }
  for (let valor in valores) {
    if (valores[valor] === maior) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat1DistanciaMouse = 0;
  let cat2DistanciaMouse = 0;
  if (mouse > cat1) {
    cat1DistanciaMouse = mouse - cat1;
  } else {
    cat1DistanciaMouse = cat1 - mouse;
  }
  if (mouse > cat2) {
    cat2DistanciaMouse = mouse - cat2;
  } else {
    cat2DistanciaMouse = cat2 - mouse;
  }
  if (cat1DistanciaMouse < cat2DistanciaMouse) {
    return 'cat1';
  } else if (cat2DistanciaMouse < cat1DistanciaMouse) {
    return 'cat2';
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(valores) {
  // seu código aqui
  let resultado = [];
  for (let valor in valores){
    if (valores[valor] % 3 === 0 && valores[valor] % 5 === 0) {
      resultado.push("fizzBuzz");
    } else if (valores[valor] % 3 === 0) {
      resultado.push("fizz");
    } else if (valores[valor] % 5 === 0) {
      resultado.push("Buzz");
    } else {
      resultado.push("Bug!");
    }
  }
  return resultado;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
