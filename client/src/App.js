import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div>
      <span>Hello World!</span>
      <div>
      <span>Testing123</span>
      </div>
      </div>
    );

  }



}


render(
<App />, document.getElementById('app')
  );