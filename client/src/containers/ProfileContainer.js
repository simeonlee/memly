import React, { PropTypes } from 'react'
import Profile from '../components/Profile'
import axios from 'axios'
class ProfileContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      //some hardcoded user data for test purposes
      user: {name: 'John Doe', bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", city:'San Francisco', photo: 'https://scontent.fsnc1-3.fna.fbcdn.net/t31.0-8/11232282_10153700263958254_6749315989191466632_o.jpg', myMemlys: [{url: 'https://scontent.fsnc1-3.fna.fbcdn.net/t31.0-8/10265664_10152863685678254_2720788227246186432_o.jpg' , location: 'New York'}, {url: 'https://scontent.fsnc1-3.fna.fbcdn.net/v/t1.0-9/11692782_10153548376573254_4076114351065122781_n.jpg?oh=98d0d35e39a1b376c806bee7bb47f075&oe=584175A8', location: 'San Francisco'}], likedMemlys: [{url: 'https://scontent.fsnc1-3.fna.fbcdn.net/t31.0-8/13938311_1131762946908530_6242907422971776062_o.jpg', location: 'San Jose'}, {url: 'https://scontent.fsnc1-3.fna.fbcdn.net/v/t1.0-9/14225455_1107962689239467_1782382838638034127_n.jpg?oh=f36a23bd6873261d9569822fc59db40e&oe=58541FE4', location: 'Napa'}]},
      userFacebook: {},
      memlyCount: 99,
      birthday: ''
    }
  }

  DateParser(date) {
    console.log('checking date format', date);
    var dateArray = date.split('/');
    var month = Number(dateArray[0]);
    if (month === 1) {
      month = 'January';
    } else if (month === 2) {
      month = 'February';
    } else if (month === 3) {
      month = 'March';
    } else if (month === 4) {
      month = 'April';
    } else if (month === 5) {
      month = 'May';
    } else if (month === 6) {
      month = 'June';
    } else if (month === 7) {
      month = 'July';
    } else if (month === 8) {
      month = 'August';
    } else if (month === 9) {
      month = 'September';
    } else if (month === 10) {
      month = 'October';
    } else if (month === 11) {
      month = 'November';
    } else if (month === 12) {
      month = 'December';
    }

    var day = Number(dateArray[1]);
    var year = dateArray[2];

    var dateFormatted = `${month} ${day}, ${year}`;
    return dateFormatted;
  }


  componentWillMount() {
    var context = this;
    axios.get('/user/retrieve/profileinfo/')
      .then(function(res) {
        res.data.birthday = context.DateParser(res.data.birthday);
        context.setState({
          userFacebook: res.data,
          memlyCount: res.data.memlys.length
        });
        console.log('checking userFacebook state ------>', context.state.userFacebook);
      });
    this.props.changeNavToAlreadyLoggedIn();
  }

  updateUserData(data) {
    console.log('calling updateUserdata', data);
    this.setState({
      userFacebook: data
    });
  }



  render() {

    var context = this;
    var childUpdateUserData = this.updateUserData.bind(this);
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        updateUserData: childUpdateUserData,
      })
    );

    return(
      <div>
        <Profile user = {this.state.user} userFacebook = {this.state.userFacebook} memlyCount={this.state.memlyCount}/>

        {childrenWithProps}
      </div>
      )
  }

}

export default ProfileContainer