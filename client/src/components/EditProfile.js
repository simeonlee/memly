import React, { PropTypes } from 'react'
import {Grid, Row, Col, Nav, NavItem} from 'react-bootstrap'


const EditProfile = (props) => {
  return (
    <div>
      <Grid>
        <Row className = "show-grid">
          <form onSubmit ={(event)=>{event.preventDefault(); var name=document.getElementById('editName').value; var email=document.getElementById('editEmail').value; var birthday=document.getElementById('editBirthday').value; var gender=document.getElementById('editGender').value; var bio=document.getElementById('editBio').value; props.changeProfileInfo(name, email, birthday, gender, bio);}}>
            <input className ="editProfileInput" id="editName" type="text" placeholder ='Name:'/>
            <input className ="editProfileInput" id="editEmail" placeholder ='Email:'/>
            <input className ="editProfileInput" id="editBirthday" type="date" data-date="" data-date-format="DD MMMM YYYY"/>
            <input className ="editProfileInput" id="editGender" placeholder ='Gender:'/>
            <input className ="editProfileInput" id="editBio" placeholder='About Me:'/>
            <button id="editProfileButton">
            Edit Profile
            </button>
          </form>
        </Row>
      </Grid>
    </div>

  )


}

export default EditProfile