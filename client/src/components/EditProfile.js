import React, { PropTypes } from 'react'
import {Grid, Row, Col, Nav, NavItem} from 'react-bootstrap'


const EditProfile = (props) => {
  
  
  return (
    <div>
      <Grid>
        <Row className = "show-grid">
          <form id="usrform" onSubmit ={(event)=>{event.preventDefault(); var name=document.getElementById('editName').value; var email=document.getElementById('editEmail').value; var birthday=document.getElementById('editBirthday').value; var gender=document.getElementById('editGender').value; var bio=document.getElementById('editBio').value; props.changeProfileInfo(name, email, birthday, gender, bio);}}>
            <input className ="editProfileInput" id="editName" type="text" placeholder ='Name:' maxLength='40'/>
            <input className ="editProfileInput" id="editEmail" placeholder ='Email:' maxLength='40'/>
            <input className ="editProfileInput" id="editBirthday" type="date" data-date="" data-date-format="DD MMMM YYYY"/>
            <input className ="editProfileInput" id="editGender" placeholder ='Gender:'/>
            <textarea className="editProfileInput" id="editBio" name="comment" form="usrform" maxLength='50' placeholder='About me:'></textarea>
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