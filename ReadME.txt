https://github.com/wmonk/create-react-app-typescript

>npm install -g create-react-app

>create-react-app <project-name> --scripts-version=react-scripts-ts

>npm start

https://www.mockapi.io/ : creates dummy json for the project created

>npm install axios --save

//Axios doesnt has type definitions
>npm uninstall axios --save

>npm install superagent --save
//Installation of type-definitions of superagent
>npm install --save-dev @types/superagent

>npm run build

>npm run deploy


--Use shouldComponentUpdate() when you don not want to update specific component unless there is a change/impact to it/child component
EX: set return= false for Product comp, if there is change is cart compo


StatelessFunctionComponent (SFC): does not have state, purpose is to just display the data retrieved from parent

::Destructuring::
const myobj = {
	a: "abc",
	b: "bcd"
}

==== above function is == to: const {a, b} = myobj


Note: where u define states,, define ur logic in same component

POSTMAN

call(): used to execute fn and set context as well, immediately execute
apply(): same as call except it tks params in array
Ex: a.apply(obj, [10,20])
bind(): even before executing the context is set
Ex: const fn = a.bind(obj, 10,20);
fn();



===============
Settings-->GIthub pages-enable
2. In package.json --> put attri "homepage": "copied url from Github pg"
3. install >npm install gh-pages --save-dev

4. Add below under scripts section
"predeploy": "npm run build"
"deploy" : "gh-pages -d build"

5. npm run deploy

6. Goto GitHub settings again-> select created branch and save