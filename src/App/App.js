import React, { Component } from 'react';
import { 
  NavBar,
  Footer,
  Body
} from '../Main';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar />
          <Body />
          <Footer />
      </div>
    );
  }
}

export default App;
