import {ReduceStore} from 'flux/utils';
import AppDispatcher from '../AppDispatcher';

interface IState {
    todos: string[]
}

interface IAction{
    type: string,
    payload: string
}

class TodoStore extends ReduceStore<IState, IAction>{
    constructor(){
        // 1. calling parent fn 
        super(AppDispatcher);
    }
    public getInitialState(): IState {
        return {
            todos: []
        };
    }
    // reduce() of store gets 2 info: 
    // current state and what is the current action
    // based on current action should update the state
    public reduce(state: IState, action: IAction): IState {
        // store now check what it wants
        // if interested, modifies the state else returns existing state
        // should return the complete state
        switch(action.type.toUpperCase()){
            case 'ADD_TODO':
                return {
                    // spread operator(...): doesnt modify original state
                    ...state,
                    todos: [...state.todos, action.payload]
                }
            default:
                return state;
        }
    }
}

// 2. returning instance of TodoStore
export default new TodoStore();