'use client'
import NewMeetupForm from '@/components/meetups/NewMeetupForm'
import React from 'react'
import Layout from '@/components/layout/Layout'
const page = () => {
  return (
    <div>
        <Layout>
        <NewMeetupForm></NewMeetupForm>
        </Layout>
    
    </div>
  )
}

export default page
