import React from 'react'

const Hello = () => {
  return (
    <div className='aspect-square relative'>
      <h1 className='text-2xl mb-4'>Hello, I'm</h1>
      <h2 className='text-4xl mb-2'>{process.env.FIRST_NAME}</h2>
      <h2 className='text-4xl'>{process.env.LAST_NAME}</h2>
      <p className='text-2xl absolute bottom-2'>Software Developer</p>
    </div>
  )
}

export default Hello