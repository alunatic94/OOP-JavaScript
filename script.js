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

// const car=function(make,speed){
//     this.speed=speed;
//     this.make=make;
// }


// car.prototype.accelerate=function(){
//     this.speed+=10;
//     console.log(`${this.speed}`);
// }
// car.prototype.brake=function(){
//     this.speed-=5;
//     console.log(`${this.speed}`);
// }

// const lexus=new car('lexus',30);
// const toyota=new car('toyota',50);
// lexus.accelerate();
// toyota.accelerate();
// toyota.brake();
// lexus.brake();

//ES6 Classes

//class expression

// const PersonCL=class{

// }

//class decleartion
class PersonCL{
    constructor(fullName,birthYear){
        this.fullName=fullName;
        this.birthYear=birthYear;
    }

    calcAge(){
        console.log(2037-this.birthYear);
    }
    //Set a property that already exists
    set fullName(name){
        if(name.includes(' '))this._fullName=name;
        else{
            alert(`${name} is not a full name`);
        }
    }
    get fullName(){
        return this._fullName;
    }
    //static method
    static hey(){
        console.log(`Hey there ${this.fullName}`)
    }
}

const jessica=new PersonCL('jessica davis',1996);

jessica.calcAge();

//Setters and Getters

const walter=new PersonCL('Walter White',1965);
const account={
    owner:'Jonas',
    movements:[200,530,120,300],

    get latest(){
        //return last element in movement array
        return this.movements.slice(-1).pop();
    },
    set latest(mov){
        this.movements.push(mov);
    }
};

account.latest=50;


PersonCL.hey=function(){
    console.log('Hey there');
}
PersonCL.hey();


//Object Create
const PersonProto={
    calcAge(){
        console.log(2037-this.birthYear);
    },
    //this is not a constructor method b/c
    //we did not use the 'new' operator
    init(firstName,birthYear){
        this.firstName=firstName;
        this.birthYear=birthYear;
    },
};

//The line below creates an empty object that is linked
//to the PersonProto prototype
const steven=Object.create(PersonProto);

//Inheritance through Object.create
const StudentProto=Object.create(PersonProto);
StudentProto.init=function(firstName,birthYear,course){
    PersonProto.init.call(this,firstName,birthYear);
    this.course=course;
}
StudentProto.introduce=function(){
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
}
const jay=Object.create(StudentProto);
jay.init('Jay',2010,'Computer Science');
jay.introduce();
steven.name='Steven';
steven.birthYear=2002;
steven.calcAge();

const sarah=Object.create(PersonProto);
sarah.init('Sarah',1979);
sarah.calcAge();

//Coding challenge #2
// const Car=function(make,speed){
//     this.make=make;
//     this.speed=speed;
// };
//   class car {
//     constructor(make, speed) {
//         this.speed = speed;
//         this.make = make;
//     }
//      accelerate(){
//         this.speed+=10;
//         console.log(`${this.make} is going ${this.speed} km/h`);
//      }
//      brake(){
//         this.speed-=5;
//         console.log(`${this.make} is going ${this.speed} km/h`);
//      }
//      get speedUS(){
//         return this.speed/1.6;
//      }
//      set speedUS(speed){
//         this.speed=speed*1.6;
//     }
// }

 //const ford=new car('ford',120);

// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS=50;
// console.log(ford);

//Inheritance between classes

const Person=function(firstName,birthYear){
    this.firstName=firstName;
    this.birthYear=birthYear;
};

Person.prototype.calcAge=function(){
    console.log(2037-this.birthYear);
}

const Student=function(firstName,birthYear,course){
    Person.call(this,firstName,birthYear)
    this.course=course;
};
class StudentCL extends PersonCL{
    constructor(fullName,birthYear,course){
        //super constructor always has to be called first
        super(fullName,birthYear);
        this.course=course;
    }
    introduce(){
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }
    //This calcAge method overwrites the calcAge method from parent class
    calcAge(){
        console.log(`I am ${2037-this.birthYear} years old but feel older`)
    }
}
const martha=new StudentCL('Martha Jones',2021,'Computer Science');
martha.introduce();
martha.calcAge();
console.log(martha);
//Following line:the student.prototype object is now an object
//that inherits from person.prototype. Linking prototypes
Student.prototype=Object.create(Person.prototype)
// Student.prototype.introduce=function(){
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }

// const mike=new Student('Mike',2020,'Computer Science');
// mike.introduce();
// mike.calcAge();

//Challenge #3
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
const EV=function(make,speed,charge){
    car.call(this,make,speed);
    this.charge=charge;
}
//Link the prototypes
EV.prototype=Object.create(car.prototype);

EV.prototype.chargeBattery=function(chargeTo){
    this.charge=chargeTo;
}

EV.prototype.accelerate=function(){
    this.speed+=20;
    this.charge-=1;
    console.log(`${this.make} going at ${this.speed} with a charge of ${this.charge}`)
}
const bmw= new EV('bmw',50,25);
console.log(bmw)


//Public fields
//Private fields
//Public methods
//Private methods
class Account{
    //Public fields(only occur in the instances and dont show up in proto)
    locale=navigator.language;
    //Private fields
    #movements=[];
    #pin;
    constructor(owner,currency,pin){
        this.owner=owner;
        this.currency=currency;
        //._pin is a Protected property
        this.#pin=pin;
        //._movements is a Protected property
        //this.#movements=[];
        this.locale=navigator.language;
    }
    getMovements(){
        return this.#movements;
    }
    getPin(){
        return this._pin;
    }
//This is the public interface ofthe object
    deposit(val){
        this.#movements.push(val);
        return this;
    }
    withdraw(val){
        this.deposit(-val);
        return this;
    }
    //Protecting the _approveLoan method
    _approveLoan(val){
        return true;
    }
    requestLoan(val){
        if(this._approveLoan(val)){
            this.deposit(val);
            console.log(`Loan approved!`);
            return this;
        }
    }
    //Private methods as of right now are not supported
    //by google chrome
}

const acc1=new Account('Jonas','EUR',1111);
acc1.deposit(250);
acc1.withdraw(140);

//Method chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(250000).withdraw(4000);
console.log(acc1.getMovements())