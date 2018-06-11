import * as React from 'react';
import './App.css';

class App extends React.Component {
  public onBtnClick = () =>{
      alert('Hello');
    }
  public render() {
    return (
      <div className="App">
        Hello
        <button onClick={this.onBtnClick}>Click Me!</button>  
      </div>
    );
  }
}

export default App;
