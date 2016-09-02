import React, { PropTypes } from 'react'
import Home from '../components/Home'

class HomeContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      test: ''
    }
  }

  render() {
    return(
      <div>
        <Home />
        {this.props.children}
      </div>
      )
  }

}

export default HomeContainer