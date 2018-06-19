import * as React from 'react';

interface IProps{
    todos: string[]
}

class TodoList extends React.Component<IProps, {}> {
    constructor(props: IProps){
        super(props);
    }
    public render(){
        const items = this.props.todos.map((item: string,index: number) => <li key={index}>{item}</li>)
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