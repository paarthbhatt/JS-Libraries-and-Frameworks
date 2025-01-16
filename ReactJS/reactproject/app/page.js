"use client"
import React , { useState } from 'react'
import Header from "@/Components/header"

const page = () => {
  const [user, setUser] = useState("Parth Bhatt")
  const [editor, setEditor] = useState("GitHub")
  return (
    <>
      <Header user={user} edit={editor}/>
      {user}
    </>
  )
}

export default page
  