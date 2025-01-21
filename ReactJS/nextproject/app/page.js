// "use client"
// import React, { useState } from 'react' 

// const Page = () => {  
//   return (
//     <div>
//       <h1>This is Home Page</h1>
//     </div>  
//   )
// }

// export default Page 

"use client"
import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Page = () => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
      const data = response.data;
      setImages(data);
      console.log(data)
    } catch (error) {
      console.error("Error fetching details", error)
    }
  }

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div>
      <button 
        onClick={getImages} 
        className="px-5 py-3 bg-green-800 text-white font-bold">Get Images</button>
      <div className='p-10'>
        {images.map((elem) => {
          return (
            <img
              key={elem.id}
              src={elem.url}
              alt={elem.title}
              width={300}
              height={300}
              className='m-10 rounded-lg inline-block'
            />
          )
        })}
      </div>
    </div>
  )
}

export default Page