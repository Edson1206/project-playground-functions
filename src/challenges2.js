// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > (Math.abs(lineB)) - (Math.abs(lineC))) {
    return true;
  } else {
    return false;
  } if (lineB < lineA + lineC && lineB > (Math.abs(lineA)) - (Math.abs(lineC))) {
    return true;
  } else {
    return false; 
  } if (lineC < lineB + lineA && lineC > (Math.abs(lineB)) - (Math.abs(lineA))) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
