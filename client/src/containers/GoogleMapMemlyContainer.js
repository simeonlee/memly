import React, { PropTypes, Component } from 'react'
import { GoogleMapMemly, UserLocation } from '../components/GoogleMapMemly' 
import { memlyStyle, memlyStyleHover } from '../../styles/memlyStyles'

class GoogleMapMemlyContainer extends Component {
  static propTypes = {
    // GoogleMap pass $hover props to hovered components
    // to detect hover it uses internal mechanism creatd by react library
    $hover: PropTypes.bool,
    text: PropTypes.string
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps
  }

  render() {
    if(this.props.currentLocation){
      return(
          <UserLocation />
        )
    } else {
      const style = this.props.$hover ? memlyStyleHover : memlyStyle;
      // const style = this.props.$hover ? memlyStyleHover : memlyStyle;
      // maybe there is a way to pass the $hover prop down to the presentational Memly Component?
      return (
          <div className='googlemapmemly' style={style}> 
            <GoogleMapMemly {...this.props}/>
          </div>
      );
    }
  }
} 

export default GoogleMapMemlyContainer