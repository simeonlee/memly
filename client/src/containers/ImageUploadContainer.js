import React from 'react'
import ImageUpload from '../components/ImageUpload'

export default class ImageUploadContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			file: '',
			imagePreviewUrl: ''
		};
	}

	// Once we have previewed a photo, we can do operations here
	// to submit to the server for database storage
	_handleSubmit(e) {
		e.preventDefault();
		// TODO: do something with this.state.file

		
		console.log('Handle uploading ', this.state.file);
	}

	// this allows us to preview images before file post
	// please refer to this magic:
	// https://codepen.io/hartzis/pen/VvNGZP
	// https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
	_handleImageChange(e) {
		e.preventDefault();

		let reader = new FileReader();
		let file = e.target.files[0];
		console.log(file);

		reader.onloadend = () => {
		  this.setState({
		    file: file,
		    imagePreviewUrl: reader.result
		  });
		}

		reader.readAsDataURL(file);
	}

	render() {
		return (
			<div>
				<ImageUpload 
					imagePreviewUrl={this.state.imagePreviewUrl}
					handleSubmit={this._handleSubmit.bind(this)}
					handleImageChange={this._handleImageChange.bind(this)}
				/>
			</div>
		)
	}
}