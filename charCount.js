// Function Contract
// The behaviour of the function given in terms of its inputs, outputs,
// and side-effects. Side-effects include: console.log, mutating objects,
// throwing errors.

// Function Signature
// The name of the function, the names and types of its input arguments,
// the type of its return value, and any errors that can be thrown.

/**
* Takes a string as input, returns an object whose keys are letters that
* occur in the string and whose values are the number of occurrences of
* that letter.
*
* @param {String} word - The word whose letters to count
* @return {Object} An object with the letter counts
*/
function countLetters(word) {
  // 1. Initialize an object to return
  var letterCounts = {};
  // 2. Mutate the object so that it has the correct keys and values
  var letters = letterCounts.toString();
  for (var i = 0; i < letters.length; i++) {
    var seen = 0;
    if (letters[i] == "a") {
      seen += 1;
    }
  }
  return seen;
}
  // i. Loop over each letter in word
    // ii. Determine whether that letter has been seen before
      // iii. Otherwise, increment the value in letterCounts at that key by 1
      // iv. If it has not been seen, set the value in letterCounts at the letter to 1
 // 3. Return the object
  // return letterCounts;
// }

console.log(countLetters(''));
console.log(countLetters('a'));
console.log(countLetters('aa'));
console.log(countLetters('ab'));
console.log(countLetters('aba'));


// Write a function countLetters that can return to us all the unique characters that exist in a string that is passed into the function.

// Furthermore, the function should also report back how many instances of each letter were found in the string.

// Functions can only return one thing. That thing can (as we've seen) be a primitive data type, like a number, a boolean, null or a string.

// However, our function countLetters needs to return an object that can represent the stats for the sentence it is given: all the characters found in the input string, and their respective counts.


//for a given word
//return all unique characters in the word
//return count for all instances of all unique characters
//

// function countLetters(word) {
//   var word = {};
//   for
//   // return typeof word;
//   // console.log(word2);
//   return word2;
// }

// function countLetters(word) {
//   for (var i = 0; i < word.length; i++) {
//     if (word ==
//     }
//   }
// }

// console.log(countLetters("lighthouse"));
// console.log(countLetters("lighthouse in the house"));
