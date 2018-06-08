// can multiple types to same
(function(){
let someVar: number | Object | Boolean;
someVar = 10;

interface IAnimal {
    name: string;
    walk(nsg: string|number): string;
}

class Animal implements IAnimal{
    name: string = "animal";
    walk(nsg:string): string {
        return '${this.name} is walking';
    }
}

interface IUser {
    name: string;
    role: string;
}

interface IAdmin {
    name: string;
    designation: string;
}

function Role(usr: IAdmin | IUser){
    const myUser:IUser = usr as IUser;
}
})();




