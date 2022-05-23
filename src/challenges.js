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
  return (array[array.length - 1] + ', ' + array[0]);
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
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === highNumber) {
      count += 1;
    }
  } return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((Math.abs(cat2 - mouse)) > (Math.abs(mouse - cat1))) {
    return 'cat1';
  } else if ((Math.abs(cat1 - mouse)) > (Math.abs(mouse - cat2))) {
    return 'cat2';
  } else if ((Math.abs(cat1 - mouse)) === (Math.abs(cat2 - mouse))) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let index in array) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      newArray.push('fizz');
    } else if (array[index] % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(array) {
  let newArray = '';
  for (let index in array) {
    switch (array[index]) {
    case 'a':
      newArray += 1;
      break;
    case 'e':
      newArray += 2;
      break;
    case 'i':
      newArray += 3;
      break;
    case 'o':
      newArray += 4;
      break;
    case 'u':
      newArray += 5;
      break;
    default:
      newArray += array[index];
    }
  } return newArray;
}

function decode(array) {
  let newArray = '';
  for (let index in array) {
    switch (array[index]) {
    case '1':
      newArray += 'a';
      break;
    case '2':
      newArray += 'e';
      break;
    case '3':
      newArray += 'i';
      break;
    case '4':
      newArray += 'o';
      break;
    case '5':
      newArray += 'u';
      break;
    default:
      newArray += array[index];
    }
  } return newArray;
}

// Desafio 10
function techList(array, string) {
  array.sort();
  let newArray = [];
  if (array.length === 0) {
    newArray = 'Vazio!';
  } else {
    for (let index in array) {
      dados = {
        tech: array[index],
        name: string,
      };
      newArray.push(dados);
    }
  }
  return newArray;
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
