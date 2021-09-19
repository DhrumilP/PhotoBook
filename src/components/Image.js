import React from "react";

export default function Image(props) {
  const deleteImage = (image) => {
    console.log("id", image.id);
  };
  return (
    <div key={props.image.id}>
      <button onClick={() => deleteImage(props.image)}>delete</button>
      <img src={props.image.tag} />
    </div>
  );
}
