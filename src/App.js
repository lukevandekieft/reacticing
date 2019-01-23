import React, { Component } from 'react';
import TreeView from './components/TreeView/TreeView';

//styles
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateTester: true
    }
  }

  render() {
    return (
      <div>
        <TreeView/>
        <p>Hello World!</p>
      </div>
    );
  }
}

export default App;
