import React from 'react'

const Skill = ({skill}:{skill: string}) => {
  return (
    <div className='bg-violet-200 rounded-2xl p-1 flex justify-center items-center text-rose-400'>{skill}</div>
  )
}

export default Skill