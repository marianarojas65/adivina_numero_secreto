// Genero un número aleatorio entre 1 y 100
const generarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 100) + 1;
};

let numero_secreto = generarNumeroAleatorio();

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
  if(numeroAdivinado == numeroSecreto) {
    console.log('¡Felicitaciones! ¡Adivinante el número secreto!');
  } else if (numeroAdivinado > numeroSecreto) {
    console.log('El número secreto es menor. ¡Sigue intentando!');
  } else {
    console.log ('El número secreto es mayor. ¡Sigue intentando!');
  }
};

module.exports = {
  generarNumeroAleatorio,
  verificarAdivinanza
};
