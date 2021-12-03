// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
return  valor1 && valor2 ? true : false;
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
  let maior = valores[0];
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

console.log(highestCount([0, 0, 0]))

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
  for (let valor in valores) {
    if (valores[valor] % 3 === 0 && valores[valor] % 5 === 0) {
      resultado.push("fizzBuzz");
    } else if (valores[valor] % 3 === 0) {
      resultado.push("fizz");
    } else if (valores[valor] % 5 === 0) {
      resultado.push("buzz");
    } else {
      resultado.push("bug!");
    }
  }
  return resultado;
}

// Desafio 9
function encode(enigma) {
  // seu código aqui
  let codigo = enigma.replace(/a/g,'1');
  codigo = codigo.replace(/e/g,'2');
  codigo = codigo.replace(/i/g,'3');
  codigo = codigo.replace(/o/g,'4');
  codigo = codigo.replace(/u/g,'5');
  return codigo;
}
function decode(enigma) {
  // seu código aqui
  let codigo = enigma.replace(/1/g,'a');
  codigo = codigo.replace(/2/g,'e');
  codigo = codigo.replace(/3/g,'i');
  codigo = codigo.replace(/4/g,'o');
  codigo = codigo.replace(/5/g,'u');
  return codigo;
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
