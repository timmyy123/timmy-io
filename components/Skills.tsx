import React from 'react'
import { skills } from '@/assets'
import Skill from './Skill'

const Skills = () => {
  return (
    <div className='flex flex-col p-4 w-full'>
      <h1 className='text-4xl mb-2 px-2'>Skills</h1>
      <div className='card-top grow-1 flex-wrap gap-2 p-2 '>
        {skills.map(s => <Skill skill={s} key={s}/>)}
      </div>
    </div>
  )
}

export default Skills