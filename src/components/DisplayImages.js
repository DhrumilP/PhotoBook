import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";
import Image from "./Image";
import ImageUpload from "./ImageUpload.js";

function DisplayImages() {
  const [images, setImages] = useState([]);
  const [flag, setFlag] = useState(0);
  useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(collection(db, "images"));
      let tempImages = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        tempImages.push({ tag: doc.data().tag, id: doc.id });
        console.log("images", images);
      });
      setImages(tempImages);
    }
    getData();
  }, [flag]);

  const displayStyle = {
    float: "left",
    display: "inline-block",
  };

  return (
    <div>
      <ImageUpload flag={flag} setFlag={setFlag}></ImageUpload>
      <div style={displayStyle}>
        {images.map((image) => {
          return (
            <Image
              key={image.id}
              image={image}
              flag={flag}
              setFlag={setFlag}
            ></Image>
          );
        })}
      </div>
    </div>
  );
}

export default DisplayImages;
