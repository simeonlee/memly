import React, { PropTypes } from 'react'
import EditProfile from '../components/EditProfile'
import axios from 'axios'
class EditProfileContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      userFacebook: {}
    }
  }


  componentWillMount() {
    var context = this;
    axios.get('/user/retrieve/profileinfo/')
      .then(function(res) {
        context.setState({
          userFacebook: res.data,
        });
        console.log('checking userFacebook state for EditProfileContainer ------>', context.state.userFacebook);
      });
  }

  changeProfileInfo(name, email, birthday, gender, bio) {
    var context = this;
    console.log('what is inside email', email);
    console.log('hitting changeProfileInfo');
    name = name || this.state.userFacebook.name;
    email = email || this.state.userFacebook.email;
    birthday = birthday || this.state.userFacebook.birthday;
    gender = gender || this.state.userFacebook.gender;
    bio = bio || this.state.userFacebook.bio;

    axios.post('/user/edit/profileinfo/', 
      {name: name, email: email, birthday: birthday, gender: gender, bio: bio})
      .then(function(res) {
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