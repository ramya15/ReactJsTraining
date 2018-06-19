import {Container} from 'flux/utils';
import * as React from 'react';
import TodoCountComponent from '../components/TodoCountComponent';
import TodoStore from '../stores/TodoStore';

interface IState {
    todoCount: number
}

class TodoCountContainer extends React.Component<{},IState> {
    public static getStores() {
        return [
            TodoStore
        ];
    }
    public static calculateState(): IState {
        return {
            todoCount: TodoStore.getState().todos.length
        }
    }
    public render(){
        return (<TodoCountComponent todoCount={this.state.todoCount} />)
    }
}

export default Container.create(TodoCountContainer);