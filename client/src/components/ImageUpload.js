import React from 'react'

const ImageUpload = ({imagePreviewUrl, handleSubmit, handleImageChange, handlePlaceChange, handleCommentChange}) => {
  // let {imagePreviewUrl} = this.state;
  let $imagePreview = null;
  if (imagePreviewUrl !== '') {
    $imagePreview = (<img src={imagePreviewUrl} />);
  } else {
    $imagePreview = (<div className="previewText">Preview image</div>);
  }

  return (
    <div className="previewComponent">
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div><input className="fileInput" type="file" name="photo" onChange={(e)=>handleImageChange(e)} /></div>
        <div>Tag place: <input className="placeInput" type="text" name="place" onChange={(e)=>handlePlaceChange(e)}/></div>
        <div>Your comment: <input className="commentInput" type="text" name="comment" onChange={(e)=>handleCommentChange(e)}/></div>
        <div><button className="submitButton" type="submit" onClick={(e)=>handleSubmit(e)}>Upload Image</button></div>
      </form>
      <div className="imagePreview">{$imagePreview}</div>
    </div>
  )
}

export default ImageUpload

// <form method="post" action="/api/photo" enctype="multipart/form-data">
//   <p>Title: <input type="text" name="title" /></p>
//   <p>Image: <input type="file" name="image" /></p>
//   <p><input type="submit" value="Upload" /></p>
// </form>

// <form method="post" action="/api/photo" encType="multipart/form-data">

// <div><button className="submitButton" type="submit">Upload Image</button></div>

