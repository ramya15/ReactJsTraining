import {ReduceStore} from 'flux/utils';
import AppDispatcher from '../AppDispatcher';

interface IState {
    todos: string[]
}

interface IAction{
    type: string,
    payload: string | number
}

class TodoStore extends ReduceStore<IState, IAction>{
    constructor(){
        // 1. calling parent fn 
        super(AppDispatcher);
    }

    // stores how it starts with
    public getInitialState(): IState {
        return {
            todos: []
        };
    }

    // reduce() of store gets 2 info: 
    // current state and what is the current action
    // based on current action should update the state
    // any action is dispatched, this method is executed
    public reduce(state: IState, action: IAction): IState {
        // store now check what it wants
        // if interested, modifies the state else returns existing state
        // should return the complete state
        switch(action.type.toUpperCase()){
            case 'ADD_TODO':
                return {
                    // spread operator(...): doesnt modify original state
                    ...state,
                    todos: [...state.todos, action.payload as string]
                };
            case 'DELETE_TODO':
                return{
                    ...state,
                    todos: [
                        ...state.todos.slice(0, action.payload as number),
                        ...state.todos.slice(action.payload as number +1, state.todos.length)
                        ]
                };
            default:
                return state;
        }
    }
}

// 2. returning instance of TodoStore
export default new TodoStore();