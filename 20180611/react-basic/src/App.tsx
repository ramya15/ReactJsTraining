import * as React from 'react';
import './App.css';

interface IUser {
  name: string;
}

interface IState {
  title: string;
  users: IUser[];
}

class App extends React.Component {
  public state: Readonly<IState> = {
      title: "Initial title",
      users: [
      {
        name: "Jane"
      },
      {
        name: "Doe"
      },
      {
        name: "Dave"
      }]
    }

  public btnClick = () => {
    this.setState({
      title: "new title"
    });
  }

  public render() {
    const liItems = this.state.users.map((u,index) => (<li key={index}>{u.name}</li>));
    return (
      <div className="App">
        {liItems}
      </div>
    );
  }
}

export default App;
