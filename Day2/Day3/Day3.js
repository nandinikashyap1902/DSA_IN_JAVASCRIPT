//Reverse a string
//first method
function reverseString(s){
    let s1="";
    for(let i=s.length-1;i>=0;i--){
  s1+=s.charAt(i);
    }
    console.log(s1)
  }
  reverseString("nandini")

  //second method
  function reverseString(s){
    let s1= s.split("").reverse().join("");
     console.log(s1)
   }
   reverseString("nandini")

//palindrome number or string
  
  function checkForPalindrome(s){
    let s1="";
 s1= s.split("").reverse().join("");
    return(s1===s)
  }
  console.log(checkForPalindrome("madam"))

  