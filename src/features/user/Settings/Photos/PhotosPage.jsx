import React, { Component, useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import {
  Image,
  Segment,
  Header,
  Divider,
  Grid,
  Button,
  Card
} from "semantic-ui-react";
import MyDropzone from "./DropzoneInput";
import CropperInput from "./CropperInput";

import {
  uploadProfileImage,
  deletePhoto,
  setMainPhoto
} from "../../../../app/redux/actions/userActions";
import { toastr } from "react-redux-toastr";
import UserPhotos from "./UserPhotos";
const actions = { uploadProfileImage, deletePhoto, setMainPhoto };

const PhotosPage = ({
  uploadProfileImage,
  profile,
  photos,
  deletePhoto,
  setMainPhoto,
  loading
}) => {
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState(null);
  useEffect(() => {
    return () => {
      files.forEach(file => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  const handleCancelCrop = () => {
    setFiles([]);
    setImage(null);
  };

  const handleUploadImage = async () => {
    try {
      await uploadProfileImage(image, files[0].name);
      handleCancelCrop();
      toastr.success("Success", "Photo has been uploaded");
    } catch (error) {
      console.log(error);
      toastr.error("Ops", "Smt went wrong");
    }
  };

  const handleDeletePhoto = async photo => {
    try {
      await deletePhoto(photo);
    } catch (error) {
      toastr.error("Ops", error.message);
    }
  };

  const handleSetMainPhoto = async photo => {
    try {
      await setMainPhoto(photo);
    } catch (error) {
      toastr.error("Ops", error.message);
    }
  };

  return (
    <Segment>
      <Header dividing size="large" content="Your Photos" />
      <Grid>
        <Grid.Row />
        <Grid.Column width={4}>
          <Header color="teal" sub content="Step 1 - Add Photo" />
          <MyDropzone setFiles={setFiles} />
        </Grid.Column>
        <Grid.Column width={1} />
        <Grid.Column width={4}>
          <Header sub color="teal" content="Step 2 - Resize image" />
          {files.length > 0 && (
            <CropperInput setImage={setImage} imagePreview={files[0].preview} />
          )}
        </Grid.Column>
        <Grid.Column width={1} />
        <Grid.Column width={4}>
          <Header sub color="teal" content="Step 3 - Preview and Upload" />
          {files.length > 0 && (
            <Fragment>
              <div
                className="img-preview"
                style={{
                  minHeight: "200px",
                  minWidth: "200px",
                  overflow: "hidden"
                }}
              />
              <Button.Group>
                <Button
                  onClick={handleUploadImage}
                  style={{ width: "100px" }}
                  positive
                  icon="check"
                  loading={loading}
                />
                <Button
                  onClick={handleCancelCrop}
                  style={{ width: "100px" }}
                  icon="close"
                  disabled={loading}
                />
              </Button.Group>
            </Fragment>
          )}
        </Grid.Column>
      </Grid>

      <Divider />
      <UserPhotos
        deletePhoto={handleDeletePhoto}
        setMainPhoto={handleSetMainPhoto}
        photos={photos}
        profile={profile}
      />
    </Segment>
  );
};

const query = ({ auth }) => {
  return [
    {
      collection: "users",
      doc: auth.uid,
      subcollections: [{ collection: "photos" }],
      storeAs: "photos"
    }
  ];
};

const mapState = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
  photos: state.firestore.ordered.photos,
  loading: state.async.loading
});

export default compose(
  connect(
    mapState,
    actions
  ),
  firestoreConnect(auth => query(auth))
)(PhotosPage);
