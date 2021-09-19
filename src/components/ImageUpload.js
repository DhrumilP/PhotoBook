import React, { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { base64 } from "@firebase/util";

function ImageUpload(props) {
  const [images, setImages] = useState([]);
  // const [base64Image, setBase64Image] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(images);

    for (var key in images) {
      if (images.hasOwnProperty(key)) {
        encodeBase64(images[key]);
      }
    }
  };

  async function sendData(file) {
    try {
      const docRef = await addDoc(collection(db, "images"), {
        tag: file,
      });
      console.log("Document written with ID: ", docRef.id);
      props.setImages((images) => [
        ...props.images,
        { tag: file, id: docRef.id },
      ]);
    } catch (e) {
      console.error("Error adding documet: ", e);
    }
  }

  const encodeBase64 = (file) => {
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        var base64 = reader.result;
        // setBase64Image(base64);

        sendData(base64);
      };
      reader.onerror = (error) => {
        console.log("ERR: " + error);
      };
    }
  };

  return (
    <div>
      <h1>Hello World</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="file"
          name="uploads[]"
          onChange={(e) => setImages(e.target.files)}
          accept="image/png, image/jpeg"
          multiple
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default ImageUpload;
