import React from 'react'

export default (props) => {
  const infowindow = props.$hover ? (
    <div className="memly-infowindow" /* Infowindow floats above marker */>
      <img className="memly-media" src={props.media.url} />
    </div>
  ) : (
    <div display={'none'}></div>
  )

  return (
    <div>
      {infowindow}
    </div>
  );
}