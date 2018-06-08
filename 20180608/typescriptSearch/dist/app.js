(function () {
    var people = [{
            name: "Name1",
            age: 10
        },
        {
            name: "Name2",
            age: 20
        }];
    var SearchPerson = /** @class */ (function () {
        function SearchPerson(list) {
            this.list = list;
        }
        SearchPerson.prototype.renderList = function () {
            var divP = document.querySelector('#disp');
            var ulEL = document.createElement('ul');
            divP.innerHTML = null;
            this.list.forEach(function (item) {
                var liEl = document.createElement('li');
                liEl.textContent = item.name;
                ulEL.appendChild(liEl);
            });
            divP.appendChild(ulEL);
        };
        return SearchPerson;
    }());
    new SearchPerson(people).renderList();
    var inP = document.querySelector('input');
    inP.addEventListener('keyup', function (e) {
        var inKey = e.target;
        var inKeyVal = inKey.value;
        var filteredList = people.filter(function (u) { return u.name.includes(inKeyVal); });
        new SearchPerson(filteredList).renderList();
    });
})();
