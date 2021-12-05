// Desafio 10
function techList(tecArray, name) {
  // seu código aqui
  if (!tecArray || !name){
    return 'Vazio!'
  } else {
    listaDesejosTec = [];
    for (let tec of tecArray){
      listaDesejosTec.push({'tech': tec, 'name': name});
    }
    listaDesejosTec.sort(function(a,b){
      return a.tech < b.tech ? -1 : a.tech > b.tech ? 1 : 0;
    })
    return listaDesejosTec;
  }
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

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
