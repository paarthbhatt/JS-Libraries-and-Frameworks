"use client"
import React , { useState } from 'react'
import Header from "@/Components/header"

const page = () => {
  const [user, setUser] = useState("Parth Bhatt")
  return (
    <>
      <Header/>
      {user}
    </>
  )
}

export default page
