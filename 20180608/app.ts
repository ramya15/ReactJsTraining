const a: string ="abc";

//array of string
const ar: Array<string>  = ['2', '3', '4'];   
const ar2: string[] =['a', 'b'];

// array of objects
const users: Array<Object> = [
    {
        name: 'a',
        age: 10
    },
    {
        name: 'b',
        age:16
    }
];

//Interface
interface IUser {
    name: string;
    age: number;
}

let user: Array<IUser> = [{
    name: 'Dave',
    age: 10
}];

user.push({
    name: 'John',
    age: 12
});

//simple function
function add(x:number,y:number): number{
    return x+y;
}
//fat array function
const add1 = (x:number,y:number): number => x+y;

function log(msg: string): void {
    console.log(msg);
}

const abc = log('hello');

// ========================================
//Tell structure here
interface IUtil {
    name: string;
    log(msg:string): string;
}

//Implement Interface here
const util1: IUtil = {
    name: 'hello',
    log: (msg:string): string => {
        return msg + this.name;
    }
}

const util2: IUtil = {
    name: 'hello',
    log: function(msg:string): string {
        return msg + util1.name;
    }
}

const res: string = util1.log('hi ');
console.log(res);

//Access Modifiers
class Properties {
    private myProp: string;
    public outProp: string; //available to both child and instance classes
    protected someProp: string; //available only to child class and not instance
}

class Prop1 extends Properties {
    metric(msg: string): void {
        console.log( 'hi' + msg)
    }
}

const inst1 = new Properties();
const inst2 = new Prop1();

inst2.metric('Props');


