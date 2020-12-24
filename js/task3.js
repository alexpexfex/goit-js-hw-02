// Напиши фукцнию findLongestWord(string),
// которая принимает параметром произвольную
// строку(в строке будут только слова и пробелы)
// и возвращает самое длинное слово в этой строке.

const findLongestWord = function (string) {
  // твой код
  const words = string.split(' ');

  let longestWord;
  let startElementLenght = 0;
  for (const word of words) {
    if (word.length > startElementLenght) {
      startElementLenght = word.length;
      longestWord = word;
    }
  }
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
