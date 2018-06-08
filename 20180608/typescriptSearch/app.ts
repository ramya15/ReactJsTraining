(function(){
    interface IPerson {
        name: string,
        age: number
    }

    const people: Array<IPerson> = [{
        name: "Name1",
        age: 10
    },
    {
        name: "Name2",
        age: 20
    }];

    class SearchPerson{
        constructor(public list:Array<IPerson>){  
        }
        renderList(){
            const divP: HTMLDivElement = document.querySelector('#disp') as HTMLDivElement;
            const ulEL: HTMLUListElement = document.createElement('ul');
            
            divP.innerHTML = null;
            this.list.forEach((item:IPerson) => {
               const liEl:HTMLLIElement = document.createElement('li');
               liEl.textContent = item.name;
               ulEL.appendChild(liEl);
            });
            divP.appendChild(ulEL);
        }
    }
    new SearchPerson(people).renderList();

    const inP:HTMLInputElement = document.querySelector('input');
    inP.addEventListener('keyup', (e) => {
        const inKey: HTMLInputElement = e.target as HTMLInputElement;
        const inKeyVal = inKey.value;
        const filteredList: Array<IPerson> = people.filter((u:IPerson)=>u.name.includes(inKeyVal) || ''+u.age === inKeyVal);
        
        new SearchPerson(filteredList).renderList();
    })

    
})()