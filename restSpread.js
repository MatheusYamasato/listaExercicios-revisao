//Rest & Spread
//Utilizando um operador clone o objeto c​lothes
const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
};
// Clonar usamos o spread dentro de {}
const newClothes = {...clothes}
console.log(newClothes);

const newClothesAdd = {...clothes, shoes: {colors: ['yellow', 'purple']}}
console.log(newClothesAdd);