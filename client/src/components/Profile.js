import React from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import {Grid, Row, Col, Nav, NavItem} from 'react-bootstrap'



// const Profile = (props) => {
//   return(
//     <div id = "UserProfile">
//     <div id= "UserInfo">
//         <span id = "Bio"><b>Email: </b> {props.userFacebook.email}</span>
//         <span id = "City"><b>Birthday: </b>{props.userFacebook.birthday}</span>
//     </div>
//     <div className = "ProfileBoxes">
//       <div className = "PhotoTitleBox">
//         <h2 id ="ProfileName">{props.userFacebook.name}</h2>
//         <img id = "profilePhoto" src = {props.userFacebook.profilePhotoUrl}/>
//         <div id = "MemlyFeedSelect">
//           <ul id = "FeedSelectList">
//           <li className = "MemlySelector"><Link to ="user/profile">My Memlys</Link></li>
//           <li className = "MemlySelector"><Link to ="likedmemlys">Memlys I Like</Link></li>
//           </ul>
//         </div>
//       </div>

//       </div>

//     </div>

//     )
// }


// const Profile = (props) => {
//   return (

//     <Grid>
//       <Row className = "show-grid" id ="userProfileContainer">
//         <Col md={4}><img id = "profilePhoto" src={props.userFacebook.profilePhotoUrl}/></Col>
//         <Col md={8}>
//           <Row className ="show-grid profileName">
//             <span id= "profileName">{props.userFacebook.name}</span>
//           </Row>
//           <Row className ="show-grid profileRow">
//             <span><b>Email:</b> {props.userFacebook.email}</span>
//           </Row>
//           <Row className ="show-grid profileRow">
//             <span><b>Birthday:</b> {props.userFacebook.birthday}</span>
//           </Row>
//           <Row className ="show-grid profileRow">
//             <span><b>Memlys Made:</b> {props.memlyCount}</span>
//           </Row>
//         </Col>
//         <Col md={3}>
//         </Col>
//     </Row>
//     <Row id = "MemlyNavSelector">
//       <Nav bsStyle="pills" id="MemlyNavItems">
//         <NavItem className="MemlyNavItem" eventKey={1}><Link to ="user/profile" className="MemlyNavItemText">My Memlys</Link></NavItem>
//         <NavItem className="MemlyNavItem" eventKey={2}><Link to ="likedmemlys" className="MemlyNavItemText">Memlys I Like</Link></NavItem>
       
//       </Nav>
//     </Row>
//     </Grid>
//   )
// }


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
       
    </Row>
    </Grid>
  )
}





  


export default Profile