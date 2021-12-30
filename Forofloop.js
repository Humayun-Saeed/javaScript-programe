//The For Of Loop
//The JavaScript for of statement loops through the values of an iterable object.

//It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

    const arr=[1,2,3,4,5,7];
    
    for(let b of arr){

        if(b==3){continue;}
        console.log(b);
    }
    
