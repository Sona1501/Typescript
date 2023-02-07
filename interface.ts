interface Rectangle {
    height: number,
    width : number
};
const rectangle: Rectangle = {
    height: 20,
    width: 10
};
console.log(rectangle);

interface userTypes {
    name:string,
    age:number
}

let users: userTypes = {
    name:'sonakshi',
    age:21
}
console.log(users);