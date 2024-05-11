//Write a program to find the second highest number in an array in Java

function SecondHighest(arr){
    let temp=0;
for(let i=0;i<arr.length;i++){
for(let j=i+1;j<arr.length;j++){
    if(arr[i]>arr[j]){
        temp = arr[i]
    arr[i] = arr[j]
    arr[j] =temp;
    }
}
}
//console.log(arr)
return arr[1];
}
SecondHighest([78,1,5,90])