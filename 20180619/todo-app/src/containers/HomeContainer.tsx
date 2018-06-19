import {Container} from 'flux/utils';
import * as React from 'react';
import TodoList from '../components/TodoList';
import TodoStore from '../stores/TodoStore';

interface IState{
    todos: string[]
}
class HomeContainer extends React.Component<{},IState>{
    // All stores you are interested in
    public static getStores(){
        return[
            TodoStore
        ];
    }
    // what data we are interested in
    public static calculateState(): IState{
        return{
            // return the latest state
            todos: TodoStore.getState().todos
        };
    }
    public render(){
        return(
            <TodoList todos={this.state.todos} />
        )
    }
}

export default Container.create(HomeContainer);
// export default Container.createFunctional(TodoList, getStores, getState);