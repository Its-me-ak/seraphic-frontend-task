import React from 'react'
import ProfileCard from '../components/ProfileCard'
import SkorCard from '../components/SkorCard'
import RentDetailCard from '../components/RentDetailCard'

const HomePage = () => {
  return (
    <div className='container-wrapper'>
      <div className='container'>

        <ProfileCard />
        <SkorCard />
        <RentDetailCard/>
      </div>
    </div>
  )
}

export default HomePage
