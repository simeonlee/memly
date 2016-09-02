import React, { PropTypes } from 'react'
import Test from '../components/Test'

class TestContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      test: ''
    }
  }

  render() {
    return(
      <Test />
      )
  }

}

export default TestContainer