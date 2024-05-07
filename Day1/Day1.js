//Find duplicate characters in a string.
function FindDuplicate(s){
  let count=[];
for(let i=0;i<s.length;i++){
  for(let j=i+1;j<s.length;j++){
    if(s.charAt(j)===s.charAt(i)){
      if(!count.includes(s.charAt(i)))
count[i]=s.charAt(i);
    }

  }
}
console.log(count)
}
FindDuplicate("nandini")