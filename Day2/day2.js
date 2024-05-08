//fibonacci
function fibonacci(n){
    let prev1=0;
    let prev2=1;
    console.log(prev1)
    console.log(prev2)
  for(let i=3;i<=n;i++){
    let current=prev1+prev2;
  console.log(current)
  prev1=prev2;
  prev2=current;
  }
  }
  fibonacci(6)