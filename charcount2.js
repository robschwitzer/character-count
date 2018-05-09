function countLetters(string) {
  var noSpaces = string.split(' ').join('');
  var result = {};

  for (var i = 0; i < noSpaces.length; i++) {
    var currentLetter = noSpaces[i];
    if (result[currentLetter]) {
      result[currentLetter] = result[currentLetter] + 1;
    } else {
      result[currentLetter] = 1;
    }
  }
  return result;
}
console.log(countLetters('string string string'));