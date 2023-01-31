// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return (`${array[array.length - 1]}, ${array[0]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(array) {
  let highNumber = array[0];
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > highNumber) {
      highNumber = array[index];
      count = 1;
    } else if (array[index] === highNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((Math.abs(cat2 - mouse)) > (Math.abs(mouse - cat1))) {
    return 'cat1';
  } if ((Math.abs(cat1 - mouse)) > (Math.abs(mouse - cat2))) {
    return 'cat2';
  } if ((Math.abs(cat1 - mouse)) === (Math.abs(cat2 - mouse))) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  return array.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) return 'fizzBuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return 'bug!';
  });
}

// Desafio 9
function encode(array) {
  return array
    .replace(/a/g, '1')
    .replace(/e/g, '2')
    .replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5');
}

function decode(array) {
  return array
    .replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
}

// Desafio 10
function techList(array, string) {
  if (array.length === 0) return 'Vazio!';

  return array.sort().map((tech) => ({ tech, name: string }));
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
