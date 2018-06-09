interface IA{
    name: string;
}


interface IB extends IA{
   age: number;
}

const ab: IB = {
    name: 'hello',
    age: 5
}


//As a Type
type UserType = {
    readonly name: string;  //tells name is a read-only property
    age: number;
}

const u: UserType = {
    name: 'a',
    age: 10
}

//Combination of Types
type User1 ={
    name: string;
    age?: number;   //? indicates that it is optional
}

type UserProfile = {
    email: string;
}

type CompositionUser = User1 & UserProfile;

const user: CompositionUser = {
    name:'Dave',
    age: 10,
    email: 'em@il.com'
}

//Mapped Properties
//To make type as read-only

type ReadOnlyUType = Readonly<User1>;

const noRead: ReadOnlyUType = {
    name: '',
    age:10
}


//To make every property optional

type OptionalType = Partial<User1>;
const opt: OptionalType = {

};