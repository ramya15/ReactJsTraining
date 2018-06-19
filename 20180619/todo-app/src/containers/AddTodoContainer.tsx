import {Container} from 'flux/utils';
import {addTodo} from '../actions/TodoActions';
import * as React from 'react';
import TodoStore from '../stores/TodoStore';
import AddTodoComponent from '../components/AddTodoComponent';

class AddTodoContainer extends React.Component<{},{}>{
    public static getStores() {
        return [
            TodoStore
        ];
    }
    public static calculateState(){
        return{};
    }
    public render(){
        return(
            <AddTodoComponent onAddTodo={addTodo} />
        )
    }
}

export default Container.create(AddTodoContainer);