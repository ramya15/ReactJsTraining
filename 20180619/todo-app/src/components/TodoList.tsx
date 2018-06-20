import * as React from 'react';
// import { Link } from 'react-router-dom';

interface IProps{
    todos: string[];
    deleteTodo: (todoIndex: number) => void;
}

class TodoList extends React.Component<IProps, {}> {
    constructor(props: IProps){
        super(props);
    }
    public render(){
        const onBtnClick = (todoIndex: number) => {
            this.props.deleteTodo(todoIndex);
        }
        const items = this.props.todos.map((item: string,index: number) => {
            return(
                // bind is used to pass index as the param
                <li key={index}>
                    {item}
                    <button className="link" onClick={onBtnClick.bind(TodoList, index)}> Delete</button>
                </li>
            )
        });
        return(
            <div>
                    Home Page
                    <ul>
                        {items}
                    </ul>
            </div>
        )
    }
    
};

export default TodoList;