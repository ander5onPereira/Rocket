//REST
const $ = document;
const print = console.log;
const usuario = {
  nome: "Rubens",
  idade: 27,
  empresa: "Iluminios",
};

const { nome, ...resto } = usuario;

print(nome);
print(resto);

function soma(...parametro) {
  return parametro.reduce((total, next) => total + next);
}
print(soma(1, 2, 3));

// SPREAD

const arr1 = [1, 2, 3];
const arr2 = [5, 6, 7];

const arr3 = [...arr1, ...arr2];

print(arr3);

const usuario1 = {
  nome: "Rubens",
  idade: 27,
  empresa: "Iluminios",
};
const usuario2 = { ...usuario1, nome: "Vargas" };
print(usuario2);
