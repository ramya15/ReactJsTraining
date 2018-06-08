var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _this = this;
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
//Implement Interface here
var util1 = {
    name: 'hello',
    log: function (msg) {
        return msg + _this.name;
    }
};
var util2 = {
    name: 'hello',
    log: function (msg) {
        return msg + util1.name;
    }
};
var res = util1.log('hi ');
console.log(res);
//Access Modifiers
var Properties = /** @class */ (function () {
    function Properties() {
    }
    return Properties;
}());
var Prop1 = /** @class */ (function (_super) {
    __extends(Prop1, _super);
    function Prop1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Prop1.prototype.metric = function (msg) {
        console.log('hi' + msg);
    };
    return Prop1;
}(Properties));
var inst1 = new Properties();
var inst2 = new Prop1();
inst2.metric('Props');
