import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';

class App extends React.Component<{},{}> {
  public render() {
    return (
      <React.Fragment>
          <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
            <a className="navbar-brand" href="#">Todo App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
              </ul>
            </div>
          </nav>

          <main role="main" className="container">
              <h1>Todo List</h1>
              <Route exact={true} path="/" component={HomeContainer} />
          </main>
      </React.Fragment>
    );
  }
}

export default App;
