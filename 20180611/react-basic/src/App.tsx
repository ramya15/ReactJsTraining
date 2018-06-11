import * as React from 'react';
import './App.css';

class App extends React.Component {
  public state = {
      title: "Initial title"
    }

  public btnClick = () => {
    this.setState({
      title: "new title"
    });
  }
  public render() {
    return (
      <div className="App">
        Hello {this.state.title}
        <button onClick={this.btnClick}>click me!</button>
      </div>
    );
  }
}

export default App;
