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
  
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
