import * as React from 'react';
import './TodoCount.css';

interface IProps {
    todoCount: number
}

const TodoCountComponent: React.SFC<IProps> = ({todoCount}:IProps) => {
    return (
        <div className="todo-count">
            There are total {todoCount} items
        </div>
    )
};

export default TodoCountComponent;