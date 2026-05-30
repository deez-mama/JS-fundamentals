let NAME = "Bishowjeet"; 
let PhoneNumber = "123-456-7890";

console.log(NAME.length); //Outputs the length of the string
console.log(NAME.charAt(0)); //Outputs the character at index 0 (first character)
console.log(NAME.indexOf("j")); //Outputs the first occurence of the character "j" in the string
console.log(NAME.lastIndexOf("o")); //Outputs the last occurence of the character "o" in the string

// iF "   Bishowjeet  " was the string, we do NAME= NAME.trim() to remove spaces before and after the string
console.log(NAME.toUpperCase()); //Outputs the string in uppercase
console.log(NAME.toLowerCase()); //Outputs the string in lowercase


PhoneNumber= PhoneNumber.replace("-","/"); // Replaces "-" with "/". for nothing do "" instead of "/"
console.log(PhoneNumber); //Outputs the phone number with dashes replaced by slashes
 
