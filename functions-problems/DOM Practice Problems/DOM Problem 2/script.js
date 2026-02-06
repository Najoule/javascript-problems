/*Steps: 
	1. Write a function that accepts a string as a parameter to count number of vowels
 	2. Declare and assign variables “let” & “const” to “vowelCount”, “arrayOfLetters” and “arrayOfVowels” 
	4. Use a “for loop” to perform repeatedly over elements “arrayOfLetters.length”, “arrOfVowels” and “includes” method 
	5. If statement is true, return vowel count*/ 


function numberOfVowels(str){
  let vowelCount = 0;
  const arrOfLetters = str.toLowerCase().split("");
  const arrOfVowels = ["a","e","i","o","u","y"];
  
  for(let i = 0; i < arrOfLetters.length; i++){
    if(arrOfVowels.includes(arrOfLetters[i])){
      vowelCount += 1;
    }
  }

  return vowelCount;
}
console.log(numberOfVowels("Keep showing up Najoule"))
