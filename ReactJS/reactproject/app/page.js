"use client"
import React, { useState } from 'react'

const page = () => {
  const [marks, setmarks] = useState(80)

  return (
    <>
      <h1>My marks were {marks}</h1>
      <button onClick={() => {
        setmarks(50)
      }}>Update</button>
      
    </>
  )
}

export default page
