// Desafio 10
function techList(tecArray, name) {
  // seu código aqui
  if (!tecArray){
    return 'Vazio!'
  } else {
    let listaDesejosTec = [];
    for (let tec of tecArray){
      listaDesejosTec.push({'tech': tec, 'name': name});
    }
    if (listaDesejosTec.length === 0){
      return 'Vazio!';
    }
    if (listaDesejosTec.length === 5) {
      listaDesejosTec.sort(function(a,b){
        return a.tech < b.tech ? -1 : a.tech > b.tech ? 1 : 0;
      })
    };
    return listaDesejosTec;
  }
}

// Desafio 11
function generatePhoneNumber(numeros) {
  // seu código aqui
  let numeroTelefone = [];
  for (let numero of numeros){
    numeroTelefone.push(numero);
  }
  if (numeroTelefone.length != 11){
    return 'Array com tamanho incorreto.'
  }
  if (numeroTelefone.some(elem => elem < 0)){
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (numeroTelefone.some(elem => elem > 9)){
    return 'não é possível gerar um número de telefone com esses valores';
  }
/*   for (let nT = 0; nT < numeroTelefone.length - 2; nT += 1){
    if (numeroTelefone[nT] === numeroTelefone[nT + 1] && numeroTelefone[nT] === numeroTelefone[nT + 2]){
      return 'não é possível gerar um número de telefone com esses valores';
    } else {
      return `(${numeroTelefone[0]}${numeroTelefone[1]}) ${numeroTelefone[2]}${numeroTelefone[3]}${numeroTelefone[4]}${numeroTelefone[5]}${numeroTelefone[6]}-${numeroTelefone[7]}${numeroTelefone[8]}${numeroTelefone[9]}${numeroTelefone[10]}`;
    }
  } */
  for (let i = 0; i < numeroTelefone.length; i += 1){
    let cont = 0;
    for (let j = 0; j < numeroTelefone.length; j += 1){
      if(numeroTelefone[i] === numeroTelefone[j]){
        cont += 1;
      }
      if (cont === 3){
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return `(${numeroTelefone[0]}${numeroTelefone[1]}) ${numeroTelefone[2]}${numeroTelefone[3]}${numeroTelefone[4]}${numeroTelefone[5]}${numeroTelefone[6]}-${numeroTelefone[7]}${numeroTelefone[8]}${numeroTelefone[9]}${numeroTelefone[10]}`;
}

// Desafio 12
function triangleCheck(a, b, c) {
  // seu código aqui
  if ((a < b + c && b < a + c && c < a + b) && ( a > Math.abs(b - c) && b > Math.abs(a - c) && c > Math.abs(a - b))){
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(pedido) {
  // seu código aqui

  let recebido = pedido.match(/\d+/g).map(Number);
  let soma = 0
  for (let i of recebido){
    soma += i;
  } 
  if (soma > 1) {
    return `${soma} copos de água`;
  }
  return `${soma} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
