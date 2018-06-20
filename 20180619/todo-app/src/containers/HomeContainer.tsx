import {Container} from 'flux/utils';
import * as React from 'react';
import TodoList from '../components/TodoList';
import TodoStore from '../stores/TodoStore';
import { deleteTodo } from '../actions/TodoActions';

// we use: {} for import when this is not exported as default

interface IState{
    todos: string[];
}
class HomeContainer extends React.Component<{},IState>{
    // All stores you are interested in
    // flux will get aware which all stores are required
    public static getStores(){
        return[
            TodoStore
        ];
    }
    
    // what data we are interested in
    // whenever there is a change in data, this will be executed
    public static calculateState(): IState{
        return{
            // return the latest state
            todos: TodoStore.getState().todos
        };
    }

    // Pass the data to the dump component
    public render(){
        return(
            <React.Fragment>
                <TodoList 
                    deleteTodo ={deleteTodo}
                    todos={this.state.todos} 
                />
            </React.Fragment>
        )
    }
}

export default Container.create(HomeContainer);
// export default Container.createFunctional(TodoList, getStores, getState);