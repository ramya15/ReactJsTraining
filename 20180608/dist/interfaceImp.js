// can multiple types to same
(function () {
    var someVar;
    someVar = 10;
    var Animal = /** @class */ (function () {
        function Animal() {
            this.name = "animal";
        }
        Animal.prototype.walk = function (nsg) {
            return '${this.name} is walking';
        };
        return Animal;
    }());
    function Role(usr) {
        var myUser = usr;
    }
})();
