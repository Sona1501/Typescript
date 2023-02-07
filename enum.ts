// Numeric Enums
enum Direction {
    Up = 1,
    Down ,
    Left,
    Right,
}
console.log(Direction);

//we can declared enum without initialization

enum Directions {
    North,
    East,
    South,
    West

}
console.log(Directions);

//Enum as a function argument

enum AppStatus {
    ACTIVE,
    INACTIVE,
    ONHOLD

}
function checkStatus(status:AppStatus){
    console.log(status);
}
checkStatus(AppStatus.INACTIVE);

// STRING ENUMS

enum CardinalDirections  {
    North = 'North',
    East = 'East',
    South = "South",
    West = 'West'
};
console.log(CardinalDirections.East);
console.log(CardinalDirections.West);

// Heterogeneous Enums
// it contains both string and numeric values.

enum AppStatus1 {
    active = "yes",
    inactive = 1,
    onhold = 2,
    onstop = 'stop'
}
console.log(AppStatus1.active);
console.log(AppStatus1.onhold);