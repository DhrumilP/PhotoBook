import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";
import Image from "./Image";

function DisplayImages() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(collection(db, "images"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        setImages((images) => [...images, { tag: doc.data().tag, id: doc.id }]);
        console.log("images", images);
      });
    }
    getData();
  }, []);
  return (
    <div>
      {images.map((image) => {
        return (
          <Image
            key={image.id}
            image={image}
            images={images}
            setImages={setImages}
          ></Image>
        );
      })}
    </div>
  );
}

export default DisplayImages;
