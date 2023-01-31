// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) return 'Array com tamanho incorreto.';

  const invalidNumbers = array
    .filter((num) => num < 0 || num > 9 || array
      .filter((item) => item === num).length >= 3);
  if (invalidNumbers.length > 0) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return `(${array.slice(0, 2).join('')}) ${array.slice(2, 7).join('')}-${array.slice(7).join('')}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB > lineC && lineB + lineC > lineA && lineA + lineC > lineB) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  const numberDrinks = string.replace(/[^0-9]/g, '').split('');
  let total = 0;

  for (const drink of numberDrinks) {
    const amount = parseInt(drink.split(' ')[0], 10);
    total += amount;
  }

  return total === 1 ? `${total} copo de água` : `${total} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
