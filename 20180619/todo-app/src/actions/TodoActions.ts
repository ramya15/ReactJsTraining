import AppDispatcher from '../AppDispatcher';

export const addTodo = (todoItem: string) => {
    AppDispatcher.dispatch({
        // telling what info should be passed to Store
        payload: todoItem,
        // mention type so Store can know what action (Name of the action)
        type: 'ADD_TODO'
    });
};