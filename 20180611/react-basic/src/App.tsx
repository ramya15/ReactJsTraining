import * as React from 'react';
import './App.css';

interface IUser {
  name: string;
}

interface IState {
  title: string;
  users: IUser[];
}

// Keeping original array
const userList = [
      {
        name: "Jane"
      },
      {
        name: "Doe"
      },
      {
        name: "Dave"
      }];

class App extends React.Component {
  public state: Readonly<IState> = {
      title: "Initial title",
      users: userList
    }

  public btnClick = () => {
    this.setState({
      title: "new title"
    });
  }

  public onQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const filterUsers = userList.filter((u: IUser) => {
      // const filterUsers = this.state.users.filter((u: IUser) => {
      // For IE use: indexOf
      return u.name.indexOf(inputValue) > -1;
      // return u.name.includes(inputValue);
    });

    this.setState({
      users: filterUsers
    });
  }

  public render() {
    const liItems = this.state.users.map((u,index) => (<li key={index}>{u.name}</li>));
    return (
      <div className="App">
        <input type="text" onChange={this.onQuery}/>
        <ul>
          {liItems}
        </ul>
      </div>
    );
  }
}

export default App;
