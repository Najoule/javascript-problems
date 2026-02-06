/*Steps: 
	1. Write a function that accepts a string as a parameter to find the longest word
 	2. Declare and assign variables “let” & “const” to “longestWord” & “arrayOfLetters” 
	4. Use a “for loop” to perform repeatedly over elements “arrayOfLetters.length”
	5. If statement is true, return longest word*/ 


function findTheLongestWord(str){
  let longestWord = "";
  const arrayOfWords = str.toLowerCase().split(" ");
  
 for(let i = 0; i < arrayOfWords.length; i++){
    if(arrayOfWords[i].length > longestWord.length){
      longestWord = arrayOfWords[i];
    }    
  }
  
  return longestWord;
}
console.log(findTheLongestWord("Trying to find the longest word"));
