import React from 'react';
import {withRouter} from 'react-router-dom';

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.product;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.update = this.update.bind(this);
    this.renderChooseImages = this.renderChooseImages.bind(this);
    this.collectOverwrittenPhotosIds = this.collectOverwrittenPhotosIds.bind(
      this
    );
    this.renderSelectImage = this.renderSelectImage.bind(this);
  }

  update(field) {
    let that = this;
    return (e) => that.setState({[field]: e.target.value});
  }

  componentDidMount() {
    // Format exisiting photos into our wanted format
    const existingPhotoUrls = this.state.photoUrls;
    const formattedPhotoUrls = {};

    for (let i = 0; i < existingPhotoUrls.length; i++) {
      formattedPhotoUrls[`img${i}`] = existingPhotoUrls[i];
    }

    this.setState({
      photoUrls: formattedPhotoUrls,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    const formData = new FormData();

    if (this.props.formType === 'Update Product') {
      formData.append('product[id]', this.state.id);
      formData.append(
        'product[photosToDeleteIds]',
        this.state.photosToDeleteIds
      );
    }

    formData.append('product[title]', this.state.title);
    formData.append('product[description]', this.state.description);
    formData.append('product[price]', this.state.price);
    formData.append('product[seller_id]', this.state.seller_id);
    formData.append('product[errors]', this.state.errors);

    if (this.state.photoFiles) {
      const photos = Object.values(this.state.photoFiles);

      for (let i = 0; i < photos.length; i++) {
        if (!photos[i].blob_id) {
          // If the photo isn't already in db
          formData.append('product[photos][]', photos[i]);
        }
      }
    }

    this.props.openModal('loading');

    const that = this;
    this.props.action(formData).then(
      () => {
        that.props.closeModal();
        location.hash = '#/';
      },
      (err) => {
        console.log(err);
      }
    );
  }

  collectOverwrittenPhotosIds(oldObj, insertedObj) {
    const keys1 = Object.keys(oldObj);
    const keys2 = Object.keys(insertedObj);
    const overwrittenPhotosKeys = keys1.filter(
      (key) => keys2.indexOf(key) !== -1
    );

    const overwrittenPhotoIds = overwrittenPhotosKeys.map(
      (key) => oldObj[key].id
    );

    let photosToDeleteIds;
    if (this.state.photosToDeleteIds) {
      photosToDeleteIds = this.state.photosToDeleteIds.concat(
        overwrittenPhotoIds
      );
    } else {
      photosToDeleteIds = overwrittenPhotoIds;
    }

    this.setState({
      photosToDeleteIds,
    });
  }

  handleFile(e) {
    const reader = new FileReader();
    const imgIdStr = e.currentTarget.id; // e.g. 'img0'
    const imgId = imgIdStr[3];
    const file = {[imgId]: e.currentTarget.files[0]};
    const photoFilesObj = Object.assign({}, this.state.photoFiles);

    this.collectOverwrittenPhotosIds(photoFilesObj, file);

    if (file) {
      reader.readAsDataURL(file[imgId]);
    }

    reader.onloadend = () =>
      this.setState({
        photoUrls: Object.assign({}, this.state.photoUrls, {
          [imgIdStr]: reader.result,
        }),
        photoFiles: Object.assign({}, photoFilesObj, file),
      });
  }

  renderErrors() {
    let errors = [];
    errors = this.props.product.errors;
    if (errors) {
      return (
        <ul className="errors-ul">
          {this.props.product.errors.map((error, i) => (
            <li key={`error-${i}`} className="error">
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  renderRemoveProductButton() {
    return (
      <div>
        <button
          className="black-background-button"
          id="product-form-delete-button"
          type="button"
          onClick={this.handleRemove}
        >
          Delete product listing
        </button>
      </div>
    );
  }

  handleRemove(e) {
    e.stopPropagation();

    // remove it from cart (if it is there)
    const cart = JSON.parse(localStorage.getItem('cart'));
    for (let i = 0; i < cart.length; i++) {
      if (parseInt(cart[i][0]) === this.state.id) {
        cart.splice(i, 1);
      }
    }
    localStorage.setItem('cart', JSON.stringify(cart));

    // remove it from database
    this.props.removeProduct(this.state.id);

    // change location to the main page
    location.hash = '#/';
  }

  renderSelectImage(imgIdx) {
    if (
      !this.state.photoUrls[`img${imgIdx}`] &&
      !this.state.photoUrls[imgIdx]
    ) {
      return (
        <p className="product-form-select-image-statement">Select an image</p>
      );
    }
  }

  renderChooseImages() {
    const imgPlaceholders = [];

    for (let i = 0; i < 4; i++) {
      imgPlaceholders.push(
        <div
          key={`product-form-img-file-input-container-${i}`}
          className="product-form-file-input-container"
        >
          <div
            key={`product-form-img-border-box-${i}`}
            className="product-form-file-input-border-box"
          >
            <input
              key={`product-form-img-input-${i}`}
              className="product-form-file-input"
              type="file"
              accept="image/*"
              id={`img${i}`}
              onChange={this.handleFile.bind(this)}
            />
            <label
              key={`product-form-img-label-${i}`}
              className="product-form-file-input-label"
              htmlFor={`img${i}`}
            >
              {this.renderSelectImage(i)}
            </label>
            <img
              htmlFor={`img${i}`}
              key={`product-form-img-preview-${i}`}
              className="product-form-image-preview"
              src={
                this.state.photoUrls[`img${i}`]
                  ? this.state.photoUrls[`img${i}`]
                  : this.state.photoUrls[i]
              }
            />
          </div>
        </div>
      );
    }

    return imgPlaceholders.map((imgPlaceholder) => imgPlaceholder);
  }

  render() {
    return (
      <div className="product-form-box-container">
        <div className="product-form-box">
          <form className="product-form-content" onSubmit={this.handleSubmit}>
            <h2>{this.props.formType}</h2>
            {this.renderErrors()}
            <label className="product-form-label">
              Title
              <br />
              <input
                className="product-form-oneline-input"
                type="text"
                value={this.state.title}
                onChange={this.update('title')}
              />
            </label>

            <br />
            <hr />

            <label className="product-form-label">
              Description
              <br />
              <textarea
                className="product-form-textarea-input"
                rows="15"
                cols="50"
                value={this.state.description}
                onChange={this.update('description')}
              />
            </label>

            <br />
            <br />
            <hr />

            <label className="product-form-label">
              Price
              <br />
              <input
                className="product-form-oneline-input"
                type="number"
                value={this.state.price}
                onChange={this.update('price')}
              />
            </label>

            <br />
            <br />
            <hr />

            <label className="product-form-label">
              Choose Image(s)
              <p className="product-form-sublabel">Click to select new image</p>
              <br />
              {this.renderChooseImages()}
            </label>

            <br />

            <input
              className="black-background-button"
              id="form-submit-button"
              type="submit"
              value={this.props.formType}
            />
            {this.props.removeProduct ? this.renderRemoveProductButton() : null}
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductForm);
