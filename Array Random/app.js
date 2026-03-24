let nameList = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

 console.log(nameList);

// represents the index of array
let n = Math.floor(Math.random()*nameList.length);

function myController(){
    return nameList[n];
}

let person = myController();
console.log( person + "is going to buy lunch today!");