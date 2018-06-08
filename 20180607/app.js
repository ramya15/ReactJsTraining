const Persons = [
    {
        name: 'John'
    },
    {
        name: 'Dave'
    },
    {
        name: 'Depp'
    }
];

const a = document.querySelector('input');

a.addEventListener('keyup', (e) => {
    const inputValue = e.target.value;
    const filterList = Persons.filter(u => u.name.includes(inputValue));
    renderList(filterList);
});

function renderList(list){
    const ulEl = document.createElement('ul');

    list.forEach((user) => {
        const liEl = document.createElement('li');
        liEl.textContent = user.name;
        ulEl.appendChild(liEl);
    });

    document.body.appendChild(ulEl);
}




