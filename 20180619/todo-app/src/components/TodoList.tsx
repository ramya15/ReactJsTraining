import * as React from 'react';
// import { Link } from 'react-router-dom';

interface IProps{
    todos: string[];
    deleteTodo: (todoIndex: number) => void;
}

interface IState{
    editItem: boolean;
}

class TodoList extends React.Component<IProps, {}> {
    public state: Readonly<IState> = {
        editItem : false
    };

    constructor(props: IProps){
        super(props);
    }
    
    public render(){
        const onBtnClick = (todoIndex: number) => {
            this.props.deleteTodo(todoIndex);
        }

        const onEditClick = (todoIndex: number, item: string) =>{
            this.setState({
                editItem : true
            });
            let save = null;
            if(this.state.editItem){
                save = (
                    <div>
                        <input key={todoIndex} type="text" value={item}/>
                        <button className="btn btn-link" onClick={""}>Save</button>
                    </div>
                )
                {save}
            }
        }

        const items = this.props.todos.map((item: string,index: number) => {
            return(
                // bind is used to pass index as the param
                <li key={index}>
                    {item}
                    <button className="btn btn-link" onClick={onBtnClick.bind(TodoList, index)}> Delete</button>
                    <button className="btn btn-link" onClick={onEditClick.bind(TodoList, index, item)}>Edit</button>
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