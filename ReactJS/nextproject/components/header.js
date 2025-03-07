import React from 'react'
import Link from 'next/link'

const header = () => {
  return (
    
    <div className='h-16 px-5 bg-red-500 text-white flex items-center justify-between'>
        <h2>Company Logo</h2>
        <div className='flex gap-8'>
          <Link href="/About">About</Link>
          <Link href="/Product">Product</Link>
          <Link href="/Courses">Courses</Link>
        </div>
    </div>    
  )
}

export default header
