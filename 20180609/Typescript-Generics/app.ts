//Generics: where u can give any type
class GenericList<T> {
    private list: Array<T> = [];
    insertToList(item:T): void {
        this.list.push(item);
    }
    getItems():Array<T>{
        return this.list;
    }
}

//Can keyin only string list using this instance and cannot insert Number type here
const strList = new GenericList<string>();
strList.insertToList("Hello");

const numList = new GenericList<number>();
numList.insertToList(10);

class GenericLists<T, X> {
    private list: Array<T> = [];
    insertToList(item1:T, item2: X): void {
        this.list.push(item1, item2);
    }
    getItems():Array<T>{
        return this.list;
    }
}
const strNumList = new GenericLists<string, number>();
strNumList.insertToList("a", 10);


//String List
class StringList {
    private list: Array<string> = [];
    insertToList(item:string): void {
        this.list.push(item);
    }
    getItems():Array<string>{
        return this.list;
    }
}

//Number List
class NumberList {
    private list: Array<number> = [];
    insertToList(item:number): void {
        this.list.push(item);
    }
    getItems():Array<number>{
        return this.list;
    }
}