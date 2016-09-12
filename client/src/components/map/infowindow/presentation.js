import React from 'react'
import { calculateSince, calculateDistance } from './utils/infowindowUtils'

export default (props) => {
  // const infowindow = props.$hover ? (
  //   <div className="memly-infowindow" /* Infowindow floats above marker */>
  //     <img className="memly-media" src={props.media.url} />
  //   </div>
  // ) : (
  //   <div display={'none'}></div>
  // )

  return (
    <div className="iw">
      <div className="iw-top">
        <div className="iw-header">
          <img className="iw-avatar" src={props.user.avatarUrl} />
          <div className="iw-name">{props.user.name}</div>
          <div className="iw-place">{props.place}</div>
        </div>
        <img className="iw-media" src={props.media.url} />
        <div className="iw-footer">
          <div className="iw-pane">
            <img className="iw-like-image" src="../../../../images/icons/heart/heart@2x.png" />
            <img className="iw-dislike-image" src="../../../../images/icons/dislike/dislike@2x.png" />
          </div>
          <div className="iw-time">{calculateSince(props.media.timestamp)}</div>
        </div>
      </div>
      <div className="iw-comment">{props.comment}</div>
    </div>
  );
}