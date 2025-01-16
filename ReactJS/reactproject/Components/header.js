import React from 'react'

const header = () => {
  return (
    
    <div className='h-16 px-5 bg-green-500 flex items-center justify-between'>
        <h2>Company Logo</h2>
        <div className='flex gap-8'>
            <h4>About Us</h4>
            <h4>Careers</h4>
            <h4>Blogs</h4>
            <h4>Accounts</h4>
        </div>
    </div>
    
  )
}

export default header
