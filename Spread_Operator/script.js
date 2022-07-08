let dado1 = {
  nome:"Jose",
  idade: 25,
  telefone: "(11)-9999-7777",
};

let dado2 = {
  estado:"casado",
  sexo:"masculino"
};

let dadoConsolidado = {dado1,...dado2};
dadoConsolidado.idade = 26;

console.log(dado1);
console.log(dadoConsolidado);
