import React from 'react'
import MeetupList from '@/components/meetups/MeetupList'
import Layout from '@/components/layout/Layout'
const meet_data=[{
  id:'1',
  title:'A first meetup',
  image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg",
    address:"opposite saint berg,spain",
  description:'A great Meet',


},{
  id:'2',
  title:'second meetup',
  image:" https://upload.wikimedia.org/wikipedia/en/9/93/Burj_Khalifa.jpg",
  address:"opposite il Ilaki",
  description:'must meet'
}]


const Homepage = () => {
  return (
    <div>
     <Layout><MeetupList meetups={meet_data}></MeetupList>
   </Layout>  </div>
  )
}

export default Homepage
