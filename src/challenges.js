/*
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
*/

// Desafio 1
const compareTrue = (valor1, valor2) => (valor1 && valor2);

// Desafio 2
const calcArea = (base, altura) => (base * altura) / 2;

// Desafio 3
const splitSentence = (sentence) => sentence.split(' ');

// Desafio 4
const concatName = (array) => `${array[array.length - 1]}, ${array[0]}`;

// Desafio 5
const footballPoints = (wins, ties) => (wins * 3) + ties;

// Desafio 6
const highestCount = (array) => {
  let highest = array[0];
  let count = 0;
  for (let num of array) {
    if (num === highest) {
      count += 1;
    } else if (num > highest) {
      highest = num;
      count = 1;
    }
  }
  return count;
};

// Desafio 7
const catAndMouse = (mouse, cat1, cat2) => {
  const distanceCat1 = Math.abs(mouse - cat1);
  const distanceCat2 = Math.abs(mouse - cat2);
  const message = 'os gatos trombam e o rato foge';
  if (distanceCat1 === distanceCat2) return message;
  if (distanceCat1 < distanceCat2) return 'cat1';
  return 'cat2';
};

catAndMouse(0, 3, 2);

// Desafio 8
const fizzBuzz = (array) => {
  const result = array.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) return 'fizzBuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return 'bug!';
  });
  return result;
};

// Desafio 9
const encode = (word) => {
  const ENIGMA = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  let code = word;
  for (let char of Object.keys(ENIGMA)) {
    code = code.replaceAll(char, ENIGMA[char]);
  }
  return code;
};

const decode = (code) => {
  const ENIGMA = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  let word = code;
  for (let num of Object.values(ENIGMA)) {
    word = word.replaceAll(num, Object.keys(ENIGMA)[num - 1]);
  }
  return word;
};

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
