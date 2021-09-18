import React, {useEffect} from 'react'
import { collection, addDoc } from "firebase/firestore"; 
import {db} from "../firebase"


function Temp() {
    useEffect (()=>{
        async function sendData() {
          try {
            const docRef = await addDoc(collection(db, "dhrumil"), {
              first: "NEW",
              last: "Lovelace",
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding documet: ", e);
          }
        }
        sendData()
        console.log("I was here2")
      },[])
    return (
        <div>
             <h1>Hello World</h1>
        </div>
    )
}

export default Temp
