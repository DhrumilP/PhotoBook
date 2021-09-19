import React from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase.js";

export default function Image(props) {
  const deleteImage = (image) => {
    async function deleteData() {
      await deleteDoc(doc(db, "images", image.id));
      props.setFlag(props.flag + 1);
    }
    deleteData();
  };
  return (
    <div>
      <button onClick={() => deleteImage(props.image)}>delete</button>
      <img src={props.image.tag} />
    </div>
  );
}
