import AppDispatcher from '../AppDispatcher';

export const addTodo = () => {
    AppDispatcher.dispatch({
        // telling what info should be passed to Store
        payload: 'Item for adding',
        // mention type so Store can know what action (Name of the action)
        type: 'ADD_TODO'
    })
};