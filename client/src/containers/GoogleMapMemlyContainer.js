import React, { PropTypes, Component } from 'react'
import { UserLocation, GoogleMapMemly } from '../components/GoogleMapMemly' 

export default class GoogleMapMemlyContainer extends Component {
  static propTypes = {
    // GoogleMap pass $hover props to hovered components
    // to detect hover it uses internal mechanism created by react library
    $hover: PropTypes.bool,
    text: PropTypes.string
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps;
  }

  render() {
    if(this.props.representUserCurrentLocation){
      return (
        <UserLocation />
      );
    } else {
      return (
        <div className='googlemapmemly'> 
          <GoogleMapMemly {...this.props} />
        </div>
      );
    }
  }
}