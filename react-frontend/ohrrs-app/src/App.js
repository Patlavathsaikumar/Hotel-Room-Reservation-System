import './App.css';
import React, { Component } from 'react';
import OhrrsApp from './components/ohrrs/OhrrsApp';
import './bootstrap.css';

class App extends Component
{
  render()
  {
    return (
      <div className="App">
        <OhrrsApp/>
      </div>
    );
  }
}

export default App;
