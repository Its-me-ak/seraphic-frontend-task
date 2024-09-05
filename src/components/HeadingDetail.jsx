import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

const HeadingDetail = ({heading}) => {
  return (
    <>
          <div className='col-12 d-flex justify-content-between align-items-center'>
              <h2>{heading}</h2>
              <div>
                  <button className='border-0 bg-transparent text-decoration-underline fs-5 fw-medium d-flex align-items-center gap-2'>
                      View All Details
                      <FaAngleRight />
                  </button>
              </div>
          </div>
    </>
  )
}

export default HeadingDetail
