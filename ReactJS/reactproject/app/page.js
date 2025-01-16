import React from 'react'

const page = () => {
  let marks = 89
  const changeMarks = () => {
    console.log(marks)
    marks = 33
    console.log(marks)
  }
  return (
    <>
      <h1 className='font-bold text-xl text-black'>My total marks were {marks}</h1>
      <button onClick={changeMarks} className='bg-gray-400 px-5 py-3 rounded mt-5 text-white font-bold'>Update</button>
    </>
  )
}

export default page
