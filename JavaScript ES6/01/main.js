const $ = document;
const print = console.log;
class List {
  constructor() {
    this.data = [];
  }
  add(data) {
    this.data.push(data);
    print(this.data);
  }
}

class TodoList extends List {
  //a class extend a List portanto ela obtem os metodos da class List
  constructor() {
    super();
    this.usuario = "Tulio";
  }
  // ainda é pocivel adicionar novos metodos incrementando a class List atravez da TodoList usando o "super()" para referenciar a "List" e criando um novo item como "usuario" e novo metodo como "mostraUsuario"
  mostraUsuario() {
    print(this.usuario);
  }
}

const MinhaLista = new TodoList();

$.getElementById("novoTodo").onclick = function () {
  MinhaLista.add("Novo Todo");
};

MinhaLista.mostraUsuario();

class Matematica {
  // quando usado o static quer dizer que o metodo não depende da classe sendo metodos de auxilio a operações não precisando aplicar um "new" em sua criação
  static soma(a, b) {
    return a + b;
  }
}
print(Matematica.soma(1, 2));

const arr = [1, 8, 5, 9, 4, 6];

const newArr = arr.map(function (item, index) {
  //item é o valor do array e index é a posição do array
  return item * index;
});
print(newArr);

const sum = arr.reduce(function (total, next) {
  // reduce pega o valor do retorno e aplica em total e pega o proximo valor no next
  return total + next;
});
print(sum);

const filter = arr.filter(function (item) {
  //com o filter ele pega os elemento que o retorno for verdadeiro e adiciona na constante nesse exemplo pega os numeros pares do array arr
  return item % 2 === 0;
});
print(filter);

const find = arr.find(function (item) {
  //"find" usado para buscar no array o item que a condição é verdadeira
  return item === 2;
});
print(find);

//formas de uso com Arrow Functions
/*
 * pode ser omitido a function
  const newArr = arr.map((item)=> {
    return item * 2;
  });
 * se for uma variavel pode ser omitido os parenteses
  const newArr = arr.map(item=> {
    return item * 2;
  });
 * se for uma operação simples pode ser removido o return e os ()
  const newArr = arr.map(item=>item * 2);
*/
// DESCONSTRUÇÃO
const usuario = {
  nome: "Hubs",
  idade: 28,
  endereco: {
    cidade: "São Paulo",
    estado: "SP",
  },
};
print(usuario);
const { nome, idade } = usuario;
print(nome);
print(idade);
const {
  endereco: { cidade },
} = usuario;
print(cidade);

function mostraNome(usuario) {
  print(usuario.nome);
}
mostraNome(usuario);
//uma opção desconstrução na função
function mostraNomeD({ nome, idade }) {
  print(nome, idade);
}
mostraNomeD(usuario);
