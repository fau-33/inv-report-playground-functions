// Desafio 1 - Crie a função compareTrue
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2 - Crie a função splitSentence
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 3 - Crie a função concatName
function concatName(array) {
  let space = ', ';
  let join = array[array.length - 1].concat(space, array[0]);
  return join;
}

// Desafio 4 - Crie a função footballPoints
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 5 - Crie a função highestCount
function highestCount(array) {
  let maior = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = array[index];
    }
  }
  let contador = 0;
  for (let secondIndex = 0; secondIndex < array.length; secondIndex += 1) {
    if (maior === array[secondIndex]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

// Desafio 7 - Crie a função catAndMouse
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8 - Crie a função fizzBuzz

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
