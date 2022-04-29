var arr=[{name:"ali",age:10},
{name:"shahbz",age:40},
{name:"asad",age:40}
]
// console.log(arr);//array of objects

//For accessing the index of array of the object

// console.log(arr[1].name);

for(var i=0;i<arr.length;i++){
    // console.log(arr[i].age);
}
//*******************Array map********************** */
const a=arr.map(fun)
function fun(){
    for(var i=0;i<arr.length;i++){
        const ans=arr[i].age*10
        console.log(arr[i]);
    }
}