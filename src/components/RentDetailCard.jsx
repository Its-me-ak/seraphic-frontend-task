import React from 'react'
import HeadingDetail from './HeadingDetail';
import AddressCard from './AddressCard';
import MilestoneCard from './MilestoneCard';
import PayRent from './PayRent';

const RentDetailCard = () => {
  return (
    <>
          <div className='row bg-white rounded-3 box-shadow px-3 py-5 align-items-center mt-5'>
              <HeadingDetail heading={'Rent Details'} />
              <AddressCard/>
              <MilestoneCard/>
              <div className='col-12 g-5'>
                <div className='divider'></div>
              </div>
              <PayRent/>
          </div>
    </>
  )
}

export default RentDetailCard
