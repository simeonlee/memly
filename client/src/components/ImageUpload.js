import React from 'react'

const ImageUpload = ({imagePreviewUrl, handleSubmit, handleImageChange}) => {
  // let {imagePreviewUrl} = this.state;
  let $imagePreview = null;
  if (imagePreviewUrl) {
    $imagePreview = (<img src={imagePreviewUrl} />);
  } else {
    $imagePreview = (<div className="previewText">Preview image</div>);
  }

  return (
    <div className="previewComponent">
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input className="fileInput" type="file" onChange={(e)=>handleImageChange(e)} />
        <button className="submitButton" type="submit" onClick={(e)=>handleSubmit(e)}>Upload Image</button>
      </form>
      <div className="imagePreview">
        {$imagePreview}
      </div>
    </div>
  )
  // <form method="post" action="/api/photo" enctype="multipart/form-data">
  //   <p>Title: <input type="text" name="title" /></p>
  //   <p>Image: <input type="file" name="image" /></p>
  //   <p><input type="submit" value="Upload" /></p>
  // </form>
}

export default ImageUpload
