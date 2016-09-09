import React, { PropTypes } from 'react'
import EditProfile from '../components/EditProfile'
import axios from 'axios'
class EditProfileContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      userFacebook: {},
      birthday: ''
    }
  }


  //transforms date from input into a more readable format. ex:'10/31/1990' becomes 'October 31, 1990'
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

  //email validation helper function to test if user entered valid email. returns boolean value.
  validateEmail(email) {
     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(email);
  }



  componentWillMount() {
    var context = this;
    axios.get('/user/retrieve/profileinfo/')
      .then(function(res) {
        context.setState({
          userFacebook: res.data,
          birthday: res.data.birthday
        });
        console.log('checking userFacebook state for EditProfileContainer ------>', context.state.userFacebook);
      });
  }

  changeProfileInfo(name, email, birthday, gender, bio) {
    var context = this;

    if(! this.validateEmail(email)) {
      email = this.state.userFacebook.email;
    } else {
      email = email;
    }

    name = name || this.state.userFacebook.name;
    birthday = birthday || this.state.birthday;
    gender = gender || this.state.userFacebook.gender;
    bio = bio || this.state.userFacebook.bio;

    if (birthday.indexOf('-') !== -1) {
      var birthdayArray = birthday.split('-');
      var year = birthdayArray[0];
      var month = birthdayArray[1];
      var day = birthdayArray[2];
      birthday = `${month}/${day}/${year}`;
    }

    axios.post('/user/edit/profileinfo/', 
      {name: name, email: email, birthday: birthday, gender: gender, bio: bio})
      .then(function(res) {
        console.log('checking out how birthday is formatted', res.data);
        context.setState({
          userFacebook: res.data
        });

        console.log('checking out how birthday is formatted ONE MORE TIME', res.data);
        res.data.birthday = context.DateParser(res.data.birthday);
        console.log('its my birthday!!!!!', res.data);

    // console.log('what is inside email', email);
    // console.log('hitting changeProfileInfo');
    // name = name || this.state.userFacebook.name;
    // email = email || this.state.userFacebook.email;
    // birthday = birthday || this.state.userFacebook.birthday;
    // gender = gender || this.state.userFacebook.gender;
    // bio = bio || this.state.userFacebook.bio;

    // axios.post('/user/edit/profileinfo/', 
    //   {name: name, email: email, birthday: birthday, gender: gender, bio: bio})
    //   .then(function(res) {

        console.log('ClientSide updated profile info successfully');
        context.props.updateUserData(res.data);
      })
  }

  render() {
    return(
      <div id="EditProfileContainer">
        <EditProfile userFacebook={this.state.userFacebook} changeProfileInfo={this.changeProfileInfo.bind(this)}/>
      </div>
    )
  }

}

export default EditProfileContainer