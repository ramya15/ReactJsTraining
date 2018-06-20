import * as React from 'react';
import {Link} from 'react-router-dom';

interface IProps {
    onAddTodo:(todoItem: string) => void;
}
const AddTodoComponent: React.SFC<IProps> = ({onAddTodo}:IProps) => {
    let inputEl: HTMLInputElement;
    const setInputEl = (el: HTMLInputElement) =>{
        inputEl = el;
    };
    const onBtnClick = () =>{
        onAddTodo(inputEl.value);
    }
    return(
        <div className="form-group">
            <input type='text' ref={setInputEl} />
            <Link to='/' className="btn btn-default" onClick={onBtnClick}>Add Todo</Link>
        </div>
        )
};

export default AddTodoComponent;