/*
// Desafio 10
function techList(tecArray, name) {
  // seu código aqui
  if (!tecArray) {
    return 'Vazio!';
  }
  let listaDesejosTec = [];
  for (let tec of tecArray) {
    listaDesejosTec.push({ tech: tec, name });
  }
  if (listaDesejosTec.length === 0) {
    return 'Vazio!';
  }
  if (listaDesejosTec.length === 5) {
    listaDesejosTec.sort(function (a, b) {
      return a.tech < b.tech ? -1 : a.tech > b.tech ? 1 : 0;
    });
  }
  return listaDesejosTec;
}

// Desafio 11
function generatePhoneNumber(numeros) {
  // seu código aqui
  let numeroTelefone = [];
  for (let numero of numeros) {
    numeroTelefone.push(numero);
  }
  if (numeroTelefone.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  if (numeroTelefone.some((elem) => elem < 0)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (numeroTelefone.some((elem) => elem > 9)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  for (let i = 0; i < numeroTelefone.length; i += 1) {
    let cont = 0;
    for (let j = 0; j < numeroTelefone.length; j += 1) {
      if (numeroTelefone[i] === numeroTelefone[j]) {
        cont += 1;
      }
      if (cont === 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return `(${numeroTelefone[0]}${numeroTelefone[1]}) ${numeroTelefone[2]}${numeroTelefone[3]}${numeroTelefone[4]}${numeroTelefone[5]}${numeroTelefone[6]}-${numeroTelefone[7]}${numeroTelefone[8]}${numeroTelefone[9]}${numeroTelefone[10]}`;
}

// Desafio 12
function triangleCheck(a, b, c) {
  // seu código aqui
  if ((a < b + c && b < a + c && c < a + b) && (a > Math.abs(b - c) && b > Math.abs(a - c) && c > Math.abs(a - b))) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(pedido) {
  // seu código aqui

  let recebido = pedido.match(/\d+/g).map(Number);
  let soma = 0;
  for (let i of recebido) {
    soma += i;
  }
  if (soma > 1) {
    return `${soma} copos de água`;
  }
  return `${soma} copo de água`;
}
*/

// Desafio 10
const techList = (array, name) => {
  if (!array || !array.length) {
    return 'Vazio!';
  } if (array.length < 5) {
    return 'Lista com número inferior de tecnologia';
  }

  array.sort();
  const listOfTech = [];
  array.forEach((tech) => listOfTech.push({ tech, name }));

  return listOfTech;
};

// Desafio 11
const checkPhoneNumbers = (numbers) => {
  for (let number of numbers) {
    if (number < 0 || number > 9) {
      return true;
    }
  }
};

const mostRepeated = (numbers) => {
  let mostNumberRepeated = 0;
  const repeated = {};
  numbers.forEach((number) => {
    if (!Object.prototype.hasOwnProperty.call(repeated, number)) {
      repeated[number] = 0;
    }
    repeated[number] += 1;
    if (mostNumberRepeated < repeated[number]) {
      mostNumberRepeated = repeated[number];
    }
  });
  return mostNumberRepeated;
};

const getPhoneNumber = (numbers) => {
  let phoneNumber = '(';
  numbers.forEach((number, ind) => {
    phoneNumber = `${phoneNumber}${number}`;
    if (ind === 1) {
      phoneNumber = `${phoneNumber}) `;
    } else if (ind === 6) {
      phoneNumber = `${phoneNumber}-`;
    }
  });
  return phoneNumber;
};

const generatePhoneNumber = (numbers) => {
  const message = 'não é possível gerar um número de telefone com esses valores';
  if (numbers.length !== 11) return 'Array com tamanho incorreto.';
  if (checkPhoneNumbers(numbers)) return message;
  const mostNumberRepeated = mostRepeated(numbers);
  if (mostNumberRepeated >= 3) return message;
  const phoneNumber = getPhoneNumber(numbers);
  return phoneNumber;
};

// Desafio 12
const checkLine = (lineA, lineB, lineC) => {
  const result = lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);
  return result;
};

const triangleCheck = (lineA, lineB, lineC) => {
  const resultA = checkLine(lineA, lineB, lineC);
  const resultB = checkLine(lineB, lineA, lineC);
  const resultC = checkLine(lineC, lineA, lineB);
  return resultA && resultB && resultC;
};

// Desafio 13
const hydrate = (order) => {
  const received = order.match(/\d+/g).map(Number);
  const sum = received.reduce((soma, qtd) => soma + qtd);
  if (sum < 2) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
};

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
