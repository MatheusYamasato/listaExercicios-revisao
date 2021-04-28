//Arrays e seus método
//A partir da variável abaixo e utilizando um método de array, retorne a raiz quadrada de todos os valores do array original em um novo array
const numbers = [4, 9, 16, 25];
const raizQuadrada = numbers.map(Math.sqrt)
console.log(raizQuadrada);

const numberToBeMulti = [65, 44, 12, 4]
const numberMutiplied = numberToBeMulti.map(numero => numero * 10)
console.log(numberMutiplied);

const ages = [32, 33, 16, 40]
const agesBigger18 = ages.filter(idade => idade > 18)
console.log(agesBigger18);

const data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog',
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog',
    },
  
    {
      name: 'Red',
      age: 1,
      type: 'cat',
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog',
    },
];

const tipoCachorro = data.filter(tipo => tipo.type == 'dog')
const idadesCachorro = tipoCachorro.reduce((acc, valor) => acc + valor.age, 0)
console.log(idadesCachorro);


