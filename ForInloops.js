//The For In Loop
//The JavaScript for in statement loops through the properties of an Object:



const obj={

name:"babar",
nick:"rizwan",
bowler:"shaheen",
};

for(let n in obj)
{
    console.log(obj[n]);
}
const arr=[1,2,3,4,5,7];

for(let b in arr){
    console.log(arr[b]);
}

