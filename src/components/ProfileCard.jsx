import React from 'react'
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import { IoReload, IoWalletSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const ProfileCard = () => {
  return (
    <>
        <div className='row bg-white rounded-3 box-shadow px-3 py-5 align-items-center'>
          <div className='col-lg-6 g-0 g-md-5'>
            <div className='d-flex justify-content-start gap-5 align-items-center'>
              <div className='profile-pic d-flex justify-content-center align-items-center'>
                <h1 className='fs-1 fw-bold'>CL</h1>
              </div>
              <div className='profile-name'>
                <h2>Carlos Lana</h2>
                <div className='d-flex gap-3 mt-3'>
                  <button className='btn-lime px-5 py-2 rounded-3 fw-bold border-0 fs-4'>
                    <FaCheckCircle className='me-3 text-white'/>
                    Verified
                    </button>
                    <button className='circle'>
                    <IoReload/>
                    </button>
                </div>
                <div className='d-flex flex-wrap mt-3 gap-sm-4 gap-2 align-items-center'>
                  <h3 className='fs-4 fw-medium'>
                    <MdEmail className='text-orange me-3'/>
                    carloslana@gmail.com</h3>
                  <h3 className='fs-4 fw-medium'>
                    <FaPhoneAlt className='text-orange me-3'/>
                    +34 0213654789</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 g-5'>
           <div className='d-flex flex-lg-column flex-row align-items-end justify-lg-content-center justify-content-between'>
              <div className='width-140 rounded-3 fs-5 grey fw-bold d-flex align-items-center justify-content-center'>
                <IoWalletSharp className='me-2 fs-4 text-purple'/>
                Rewards Points
                </div>
              <div className='text-center width-140 rounded-3 fs-1 bg-purple py-1 fw-bold text-white d-flex justify-content-center align-items-center'>
              <h1>250
              </h1>
              </div>
           </div>
          </div>
        </div>
    </>
  )
}

export default ProfileCard
