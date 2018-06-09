//Generics: where u can give any type
var GenericList = /** @class */ (function () {
    function GenericList() {
        this.list = [];
    }
    GenericList.prototype.insertToList = function (item) {
        this.list.push(item);
    };
    GenericList.prototype.getItems = function () {
        return this.list;
    };
    return GenericList;
}());
//Can keyin only string list using this instance and cannot insert Number type here
var strList = new GenericList();
strList.insertToList("Hello");
var numList = new GenericList();
numList.insertToList(10);
var GenericLists = /** @class */ (function () {
    function GenericLists() {
        this.list = [];
    }
    GenericLists.prototype.insertToList = function (item1, item2) {
        this.list.push(item1, item2);
    };
    GenericLists.prototype.getItems = function () {
        return this.list;
    };
    return GenericLists;
}());
var strNumList = new GenericLists();
strNumList.insertToList("a", 10);
//String List
var StringList = /** @class */ (function () {
    function StringList() {
        this.list = [];
    }
    StringList.prototype.insertToList = function (item) {
        this.list.push(item);
    };
    StringList.prototype.getItems = function () {
        return this.list;
    };
    return StringList;
}());
//Number List
var NumberList = /** @class */ (function () {
    function NumberList() {
        this.list = [];
    }
    NumberList.prototype.insertToList = function (item) {
        this.list.push(item);
    };
    NumberList.prototype.getItems = function () {
        return this.list;
    };
    return NumberList;
}());
