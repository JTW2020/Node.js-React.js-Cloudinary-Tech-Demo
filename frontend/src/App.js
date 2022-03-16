import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Gallery from './Gallery';

function App() {

  const [loading,setLoading] = useState(false)
  const [image, SetImage] = useState("")

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file',files[0])
    data.append('upload_preset','cloudinarytest')
    setLoading(true)

    const res = await fetch("https://api.cloudinary.com/v1_1/soaringeaglesspring2022/image/upload",
    {
      method:'POST',
      body:data
    })

    const file = await res.json()

    console.log(file)

    SetImage(file.secure_url)
    setLoading(false)

  }
  return (
    <>
        <Gallery />
      <input type="file" id="file" name="file" placeholder='Upload an image' onChange={uploadImage}/>

      {
        loading?(
        <h3>Loading ...</h3>
        ):(
        <img src={image} style = {{width:'300px'}}/>
        )
      }
  
    </>
  );
}

export default App;
