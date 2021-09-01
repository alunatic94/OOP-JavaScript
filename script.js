'use strict';
/*      Constructors        */
const Person=function(firstName,birthYear){
    this.firstName=firstName;
    this.birthYear=birthYear;
}

const jonas=new Person('Jonas,1991');


/*      Prototypes        */
Person.prototype.calcAge=function(){
    console.log(2037-this.birthYear);
}

jonas.calcAge();
//Person.prototype is the prototype of jonas
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));

Person.prototype.species='Homo Sapiends';