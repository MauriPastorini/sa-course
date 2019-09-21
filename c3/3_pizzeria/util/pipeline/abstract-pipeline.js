const EventEmitter = require('events'),
    Util = require('util');

class AbstractPipeline {
    constructor() {
        this.filters = [];
        EventEmitter.call(this); //Mirar *1 abajo
        Util.inherits(AbstractPipeline, EventEmitter);
    }
    use(filter) {
        this.filters.push(filter);
        return this;
    }
    run(input) {
        throw new Error('Not implemented');
    }
}

module.exports = AbstractPipeline;



//*1: Esta linea permite heredar de las funciones de la clase EventEmitter. Mirar el siguiente ejemplo:

//An example EventEmitter
// function EventEmitter(){
//     //for example, if EventEmitter had these properties
//     //when EventEmitter.call(this) is executed in the Dog constructor
//     //it basically passes the new instance of Dog into this function as "this"
//     //where here, it appends properties to it
//     this.foo = 'foo';
//     this.bar = 'bar';
//   }

//   //And your constructor Dog
//   function Dog(name) {
//       this.name = name;
//       //during instance creation, this line calls the EventEmitter function
//       //and passes "this" from this scope, which is your new instance of Dog
//       //as "this" in the EventEmitter constructor
//       EventEmitter.call(this);
//   }

//   //create Dog
//   var newDog = new Dog('furball');
//   //the name, from the Dog constructor
//   newDog.name; //furball
//   //foo and bar, which were appended to the instance by calling EventEmitter.call(this)
//   newDog.foo; //foo
//   newDoc.bar; //bar