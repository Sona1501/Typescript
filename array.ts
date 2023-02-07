var arr:string[]=["php","node","js","ts"];
console.log(arr);

//Empty Array

var names: string[] = [];
names.push("sonakshi");
names.push("raj");
// names.push = 20;  number is not assignable. //error
console.log(names);

//Readonly keyword 

var names1: readonly string[] = ["sonakshi"];
//name.push('sonakshi');  //property 'push' does not exist on type 'readonly string[]'
console.log(names1);

//when not defined datatypes then ANY used.

let names2;
names2 = ["sonakshi", "sona", 20, true];
console.log(names2);

//Array used loop

let numbers:number[] = new Array(4);
numbers[0] = 12;
numbers[1] = 44;
numbers[2] = 55;
numbers[3] = 66;
console.log(numbers[2]);
//Using loop
for(var i = 0; i < numbers.length; i++){
    console.log(numbers[i] + " ");
}



