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
export async function getStaticPaths(){
    
    return {
        fallback:false,
        paths:[{
            params:{
                meetupId:'1',
            }
        }]
    }
}

export async function getStaticProps(context){
    
    const meetupId=context.params.details
    console.log(meetupId)
    return {
        props:{
            meetupdata:{
                id:meetupId
            }
        }
    }
}


export default page
