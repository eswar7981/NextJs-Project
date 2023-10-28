import MeetupDetail from '@/components/meetups/MeetupDetail'
import React from 'react'

const page = ({params}) => {
    const data=params.details

  return (
    <div>
      <MeetupDetail id={data} />
      
    </div>
  )
}

export default page
