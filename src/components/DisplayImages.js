import React, {useEffect, useState} from 'react'
import { collection, getDocs} from "firebase/firestore";
import {db} from "../firebase.js"


function DisplayImages() {
  const [images, setImages] = useState([])
    useEffect (()=>{
        async function getData() {
          const querySnapshot = await getDocs(collection(db, "images"));
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            setImages(images => [...images, doc.data().tag]);
            console.log("image", images)
          });
        }
        getData()
      },[])
    return (
      <div>
        {images.map((image)=>{
          return (
            <div>
              <div>"hi"</div>
              <img src={image}/>
            </div>
          );
        })}
      </div>

    )
}

export default DisplayImages
