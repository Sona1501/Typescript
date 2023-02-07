// Type: Any
let firstName: any = "sonakshi";
firstName = 200;
firstName = true;
console.log(firstName);

//Type: Unknown

let a : unknown = "sonakshi";
a = 20;
let b = a as number;
b = 40;
//b ="sona"; string is not assignable
console.log(b);

// type: Never

let x:never;
 //Never is rarely used

//Type Undefined

let y : string;
console.log(y);

export {}

//Type Null 
let z:null = null;
console.log(z);






