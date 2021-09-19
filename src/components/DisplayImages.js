import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";

function DisplayImages() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(collection(db, "images"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        setImages((images) => [...images, { tag: doc.data().tag, id: doc.id }]);
      });
    }
    getData();
  }, []);
  return (
    <div>
      {images.map((image) => {
        const deleteImage = (image) => {
          console.log("id", image.id);
          console.log("image", images);
        };
        return (
          <div key={image.id}>
            <button onClick={() => deleteImage(image)}>delete</button>
            <img src={image.tag} />
          </div>
        );
      })}
    </div>
  );
}

export default DisplayImages;
