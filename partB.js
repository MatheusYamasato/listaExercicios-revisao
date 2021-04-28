//Parte B - Hora do Jogo!
//Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors
const getShirtsColorsAmount = ({products: { shirts: {colors}}}) => colors;

//A partir do objeto abaixo, desestruture e utilize ​spread operator​ para instaciar uma
// variável que tenha apenas os dados de roupas que não são calças, ou seja, somente ​shirts e​ ​ socks
const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
};

const {pants, ...roupas} = clothes
console.log(roupas);

//Utilizando os dois arrays abaixo, desestruture cada array com spread para clonar todos itens menos o primeiro
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

const [a, ...b] = arr
const [c, ...d] = arr2

//A partir do objeto abaixo, retorne um array onde cada item é o nome completo 
// de cada pessoa no array. Utilize arrow function.
const persons = [
    { firstname: 'Malcom', lastname: 'Reynolds' },
    { firstname: 'Kaylee', lastname: 'Frye' },
    { firstname: 'Jayne', lastname: 'Cobb' },
];

const nomeSobrenome = persons.map(elemento => {
    const nome = `${elemento.firstname} ${elemento.lastname}`
    return nome
})