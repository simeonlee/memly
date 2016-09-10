import React from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import {Grid, Row, Col, Nav, NavItem} from 'react-bootstrap'



const Profile = (props) => {
  return (

    <Grid>
      <Row className = "show-grid" id ="userProfileContainer">
        <Col sm={4}><img id = "profilePhoto" src={props.userFacebook.profilePhotoUrl}/></Col>
        <Col sm={8}>
          <Row className ="show-grid profileName">
            <span id= "profileName">{props.userFacebook.name}</span>
          </Row>
          <Row className ="show-grid profileRow">
            <span><b>Email:</b> {props.userFacebook.email}</span>
          </Row>
          <Row className ="show-grid profileRow">
            <span><b>Birthday:</b> {props.userFacebook.birthday}</span>
          </Row>
          <Row className ="show-grid profileRow">
            <span><b>Memlys Made:</b> {props.memlyCount}</span>
          </Row>
        </Col>
    </Row>

    <Row id = "MemlyNavSelector">
        <span className="MemlyNavItem"><Link to ="user/profile" id="MemlyNavItemText">My Memlys ></Link></span>
        <span className="MemlyNavItem"><Link to ="likedmemlys" id="MemlyNavItemText2">Memlys I Like ></Link></span>
       <span className="MemlyNavItem"><Link to ="edit" id="MemlyNavItemText3">Edit Profile ></Link></span>
       
    </Row>
    </Grid>
  )
}





  


export default Profile