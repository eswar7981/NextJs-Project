import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>
      <h1>AboutUs</h1>
      <ul>
        <li>
          <Link href="/aboutus/frontend">
         eswar
          </Link><br></br>
          <Link href="/aboutus/backend">
            ravi
          </Link><br></br>
          <Link href="/aboutus/fullstack">
            kiran
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default page
