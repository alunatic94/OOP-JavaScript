'use strict';

/*      Constructors        */

// const Person=function(firstName,birthYear){
//     this.firstName=firstName;
//     this.birthYear=birthYear;
// }

// const jonas=new Person('Jonas,1991');


// /*      Prototypes        */
// Person.prototype.calcAge=function(){
//     console.log(2037-this.birthYear);
// }

// jonas.calcAge();
// //Person.prototype is the prototype of jonas
// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jonas));

// Person.prototype.species='Homo Sapiends';

// /*      Prototype Inheritance and Chain        */

// console.log(jonas.__proto__);//prototype of Jonas Object
// console.log(jonas.__proto__.__proto__);//prototype 

// console.dir(Person.prototype.constructor);//dir gives actual object

// const arr=[3,6,4,5,6,9,3,9,6];
// console.log(arr.__proto__);
// console.log(arr.__proto__===Array.prototype);//true

// console.log(arr.__proto__.__proto__);//this should be the Array Object
// Array.prototype.unique=function(){
//     [...new Set(this)];
// };

// console.log(arr.unique());


//CODING CHALLENGE #1

const car=function(make,speed){
    this.speed=speed;
    this.make=make;
}


car.prototype.accelerate=function(){
    this.speed+=10;
    console.log(`${this.speed}`);
}
car.prototype.brake=function(){
    this.speed-=5;
    console.log(`${this.speed}`);
}

const lexus=new car('lexus',30);
const toyota=new car('toyota',50);
lexus.accelerate();
toyota.accelerate();
toyota.brake();
lexus.brake();