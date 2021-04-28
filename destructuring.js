//Tendo a função abaixo, usando destructuring, reescreva-a de modo que fique em apenas 2 linhas de código
function handleMouseMove(event) {
    const clientX = event.clientX;
    const clientY = event.clientY;
    console.log(clientX, clientY);
}

function mouseCorrect(event) {
    const [clientX, clientY] = event
    console.log(clientX, clientY);
}
// -----------------------------------

const obj = {first: 'Jane', last: 'Doe'}
const {first} = obj

// ----------------------------------------

//A partir do objeto abaixo, instancie uma variavel que receba ​name​ e outra para colors
const company = {
    name: 'ACME Corp',
    address: 'Nowhere st',
    products: {
      shirts: {
        colors: ['red', 'green', 'blue'],
      },
      socks: {
        colors: ['cyan', 'magenta', 'yellow'],
      },
    }
}

const { name, products: {shirts: { colors: shirtsColors } }, products: {socks: { colors: socksColors } } } = company;
console.log(name);
console.log(shirtsColors)
console.log(socksColors)



