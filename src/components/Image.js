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
  const imageStyle = {
    float: "left",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    /* justify-content: center;*/
  };
  return (
    <div style={imageStyle}>
      <img src={props.image.tag} />
      <button onClick={() => deleteImage(props.image)}>delete</button>
    </div>
  );
}
