var a = "abc";
//array of string
var ar = ['2', '3', '4'];
var ar2 = ['a', 'b'];
// array of objects
var users = [
    {
        name: 'a',
        age: 10
    },
    {
        name: 'b',
        age: 16
    }
];
var user = [{
        name: 'Dave',
        age: 10
    }];
user.push({
    name: 'John',
    age: 12
});
//simple function
function add(x, y) {
    return x + y;
}
//fat array function
var add1 = function (x, y) { return x + y; };
function log(msg) {
    console.log(msg);
}
var abc = log('hello');
