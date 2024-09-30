//1. Write a program where you need to extract the middle part of the string and converted it to upperacse
let middleString = "howareyounaNNA";
let middlePortion = middleString.slice(5, 11); 
console.log(middlePortion.toUpperCase (middlePortion)); 

// 2.Write a program that converts a string to uppercase and then calculates the length of the resulting string.
var a="kalise durga bhavani";
console.log(a.toUpperCase(a));
console.log(a.length);

//3. Write a program that retrieves the character at a specific position in a string, and then finds the ASCII value (character code) of that character.
var str1="bhavani";
var str2=str1.charAt(2);
console.log(str2.charCodeAt(str2));

//4. Write a program that removes extra spaces from the start and end of a string, and then slices a portion of the string starting from the second character to the fourth character.
var a1=" hello good morning ";
var triming=a1.trim(a1)
var sliceofa1=triming.slice(1,4)
console.log(sliceofa1);

// 5.Write a program that concatenates two strings where the first string is in its original case and the second string is converted to lowercase before concatenation.
var string1="HAPPY";
var string2="BIRTHDAY";
var lowercase=string2.toLowerCase(string2);
var concat=string1.concat(lowercase);
console.log(concat);

//6.Write a program that removes leading spaces from a string, and then slices the string starting from the second character to the end.
var Name=" mobile";
var triming=Name.trim(Name);
var slicename=triming.slice(1,6);
console.log(slicename);

//7. Write a program that retrieves a specific character from a string and converts it to uppercase.
var Name="hi friends";
var character=Name.charAt(3);
var upperacse= character.toUpperCase(character)
console.log(upperacse);

// 8.Write a program that removes trailing spaces from a string and then concatenates it with another string.
var string1="happy ";
var trimed=string1.trim(string1);
var string2=" new year";
var cominded=trimed.concat(string2);
console.log(cominded);

// 9.Write a program that:
// Trims extra spaces from the start and end of a string.
// Converts the trimmed string to uppercase.
// Extracts a substring from the second character to the fifth character from the uppercase string.

var string=" happy birthday ";
var trimmed= string.trim(string);
var upperacse=trimmed.toUpperCase(trimmed);
var character=trimmed.substring(1,5)
console.log(character);

// 10.Write a program that:
// Converts two strings to lowercase.
// Concatenates the two lowercase strings with a space in between.
// Retrieves the first character of the concatenated result.

var b1="LAPTOP";
var b2="MOBILE";
var str1=b1.toLowerCase(b1);
var str2=b2.toLowerCase(b2);
var resultstr=str1.concat(" ",str2);
var charvalue=resultstr.charCodeAt(0)
console.log(charvalue);


