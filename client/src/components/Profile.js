import React from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'



const Profile = (props) => {
  return(
    <div id = "UserProfile">
    <div id= "UserInfo">
        <span id = "Bio"><b>Email: </b> {props.userFacebook.email}</span>
        <span id = "City"><b>Birthday: </b>{props.userFacebook.birthday}</span>
    </div>
    <div className = "ProfileBoxes">
      <div className = "PhotoTitleBox">
        <h2 id ="ProfileName">{props.userFacebook.name}</h2>
        <img id = "profilePhoto" src = {props.userFacebook.profilePhotoUrl}/>
        <div id = "MemlyFeedSelect">
          <ul id = "FeedSelectList">
          <li className = "MemlySelector"><Link to ="user/profile">My Memlys</Link></li>
          <li className = "MemlySelector"><Link to ="likedmemlys">Memlys I Like</Link></li>
          </ul>
        </div>
      </div>

      </div>

    </div>

    )
}



// const Profile = (props) => {
//   return(
//     <div>
//     <div className = "ProfileBoxes">
//       <div className = "PhotoTitleBox">
//         <h2 id ="ProfileName">{props.user.name}</h2>
//         <img id = "profilePhoto" src = {props.user.photo}/>
//         <span id = "Bio"><b>About Me:</b> {props.user.bio}</span>
//       </div>

//       <div id = "ProfileMemlys">
//       <ul>
//       <li className = "MemlySelector"><Link to ="/user/profile/mymemlys">My Memlys</Link></li>
//       <li className = "MemlySelector"><Link to ="/user/profile/likedmemlys">Memlys I Like</Link></li>

//       </ul>
//       </div>
//       </div>
//     </div>

//     )
// }

export default Profile