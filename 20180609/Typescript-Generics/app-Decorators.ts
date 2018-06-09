//Decorators:
//shall always a function /(class)
//can attach deco to properties, function, class
//target: current instance
//name:name of function
//descriptor: object that contains original function
function logger(target, name, descriptor){  //target: current instance
    console.log(target);
    console.log(name);
    console.log('inside logger');

    const originFn = descriptor.value;
    //overriding originFunction with new function
    descriptor.value = function(){
        console.log(name + 'is being executed');
        originFn.call(this); 
        //1.call():-pass args one by one 
        //- similar to 2.apply()-pass args as array
        //-executes immediately
        /*
        function abc(){
            console.log(this.myname);
        }

        var obj = {
            myname : 'myobj',
            fn()
        }

        abc.call();

        3.bind: give same reference: doesnt execute immediately
        */
    }
    return descriptor;  
}
class Person {
    name: string = 'people';
    @logger
    //original function
    walk(){
        console.log(this.name + 'are walking');
    }
}

const p = new Person();
p.walk();

class Aliens {
    @logger
    fly(){
        console.log('flying');
    }
}

//Higher Order Function: function that returns another function
//child fn can access any parent fn
// function parent() {
//     const a =10;
//     return function(){
//         console.log(a);
//     }
// }

// const innerFn = parent();
// innerFn();   //--o/p=11

//CLOSURE: each obj shall be provided with seperate memory location
//innerFn();   //--o/p=12

//const innerFn2 = parent();
// innerFn2();  //--o/p=11

//innerFn();   //--o/p=13