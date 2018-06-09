//Decorators:
//target: current instance
//name:name of function
//descriptor: original function
function logger(target, name, descriptor) {
    console.log(target);
    console.log(name);
    console.log('inside logger');
    var originFn = descriptor.value;
    descriptor.value = function () {
        console.log('');
    };
    return descriptor;
}
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'people';
    }
    Person.prototype.walk = function () {
        console.log(this.name + 'are walking');
    };
    return Person;
}());
var p = new Person();
p.walk();
