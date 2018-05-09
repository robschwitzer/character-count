//write a function that can return all the unique characters that exist in a string
function allLetters (string) {
  string = string.split(' ').join('');
  var array = string.split('');

  return array;
};

allLetters('string string string');

//report back how many instances of each letter were found in the string
function countLetters(string) {
  // var strWithoutSpace = allLetters(string);
  var strWithoutSpace = string.split(' ').join('');

  var result = {};
  for (var i = 0; i < strWithoutSpace.length; i++) {
    var currentLetter = strWithoutSpace[i];
    // 1. If letter already inside result we add one to the count
    if (result[currentLetter]) {
      result[currentLetter] = result[currentLetter] + 1;
    } else {
      // 2. If letter is not inside the result we just set it to 1
      result[currentLetter] = 1;
    }
  }
  return result;
}


console.log(countLetters('ssssss'));
//return an object of which the keys are the letters found and the
//values are the amount of times they are found
