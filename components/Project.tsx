import { ProjectType } from '@/types'
import React from 'react'

const Project = ({project}: {project: ProjectType}) => {
  return (
    <div className='card-top flex flex-col justify-center items-center'>
      <h1 className='text-2xl'>{project.title}</h1>
    </div>
  )
}

export default Project