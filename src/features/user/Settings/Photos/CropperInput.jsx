import React, { Component, createRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css"; // see installation section above for versions of NPM older than 3.0.0
// If you choose not to use import, you need to assign Cropper to default
// var Cropper = require('react-cropper').default

class CropperInput extends Component {
  cropper = createRef();
  _crop = () => {
    // image in dataUrl
    // console.log(this.cropper.getCroppedCanvas().toDataURL());
    const { setImage } = this.props;
    if (typeof this.cropper.current.getCroppedCanvas() === "undefined") {
      return;
    }
    this.cropper.current
      .getCroppedCanvas()
      .toBlob(blob => setImage(blob), "image/jpeg");
  };
  //   onCropperInit(cropper) {
  //     this.cropper = cropper;
  //   }

  render() {
    const { imagePreview } = this.props;
    return (
      <Cropper
        ref={this.cropper}
        src={imagePreview}
        style={{ height: 200, width: "100%" }}
        preview=".img-preview"
        aspectRatio={1}
        viewMode={1}
        dragMode="move"
        scalable={true}
        cropBoxMovable={true}
        cropBoxResizable={true}
        // Cropper.js options
        initialAspectRatio={16 / 9}
        guides={false}
        crop={this._crop}
      />
    );
  }
}

export default CropperInput;
