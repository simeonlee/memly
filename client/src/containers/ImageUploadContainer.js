import React from 'react'
import axios from 'axios'
import ImageUpload from '../components/ImageUpload'

export default class ImageUploadContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			file: '',
			imagePreviewUrl: '',
			location: {
				lat: 0.0,
				lng: 0.0
			},
			place: '',
			comment: ''
		};
		this.geolocate();
	}

	geolocate() {
	  if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition((position) => {        
	      this.setState({
		      location: {
		        lat: position.coords.latitude,
		        lng: position.coords.longitude
		      }
	      });
	    }, function() {
	      alert('Geolocation failed');
	    });
	  } else {
	    alert('Your browser doesn\'t support geolocation');
	  }
	}

	handlePlaceChange(e) {
		this.setState({
			place: e.target.value
		})
	}

	handleCommentChange(e) {
		this.setState({
			comment: e.target.value
		})
	}

	// This allows us to preview images before file post
	// Please refer to this magic:
	// https://codepen.io/hartzis/pen/VvNGZP
	// https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
	handleImageChange(e) {
		e.preventDefault();

		let reader = new FileReader();
		let file = e.target.files[0];

		reader.onloadend = () => {
		  this.setState({
		    file: file,
		    imagePreviewUrl: reader.result
		  });
		}

		reader.readAsDataURL(file);
	}

	// Once we have previewed a photo, we can do operations here
	// to submit to the server for database storage
	handleSubmit(e) {
		e.preventDefault();

		// Geolocate one more time just in case location changed since last established
		this.geolocate();

	  // Create virtual form to send multipart form data with image file
	  // https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects
	  var formData = new FormData();

	  formData.append('place', this.state.place);
	  formData.append('comment', this.state.comment);
	  formData.append('lat', this.state.location.lat);
	  formData.append('lng', this.state.location.lng);

	  var userPhoto = new Blob([this.state.file], { type: 'image/png'});
	  formData.append('photo', userPhoto);

	  // Use axios to send formData to server
		axios.post('/api/photo', formData)
		  .then(function(response) {
		    console.log(response);
		  })
		  .catch(function(error) {
		    console.log(error);
		  });
	}

	render() {
		return (
			<ImageUpload 
				imagePreviewUrl={this.state.imagePreviewUrl}
				handleSubmit={this.handleSubmit.bind(this)}
				handleImageChange={this.handleImageChange.bind(this)}
				handlePlaceChange={this.handlePlaceChange.bind(this)}
				handleCommentChange={this.handleCommentChange.bind(this)}
			/>
		)
	}
}