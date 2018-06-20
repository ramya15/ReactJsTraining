import * as React from 'react';
// import { Link } from 'react-router-dom';

interface IProps{
    todos: string[]
}

class TodoList extends React.Component<IProps, {}> {
    constructor(props: IProps){
        super(props);
    }
    public render(){
        const onBtnClick = (index: number) => {
            items.slice(index);
        }
        const items = this.props.todos.map((item: string,index: number) => 
            <li key={index}>
                {item}
                <button className="link" onClick={onBtnClick(index)}> Delete</button>
            </li>)
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