import React from 'react'
import { LuRefreshCw } from "react-icons/lu";
import { FaFileAlt, FaExclamationCircle } from "react-icons/fa";

const TotalSkor = () => {
  return (
    <>
      <div className='col-lg-6 g-5'>
        <div className='border border-gray rounded-4 p-5 d-flex flex-column justify-content-center align-items-center'>
          <img src="/assets/img/skor-img.png" className='skor-img' alt="" />
          <div className='fs-5 fw-medium d-flex flex-wrap justify-content-center justify-content-sm-start'>
            <span className='me-4'>*Bank Account Used For Scoring*</span>
            <span>Based On Given Details
              <FaExclamationCircle className='ms-3 mb-1' fill='red'/>
            </span>
          </div>
        </div>

        <div className='d-flex justify-content-center align-items-center align-items-sm-start justify-content-sm-between mt-3 flex-column flex-sm-row gap-3 gap-md-0 '>
          <button className='bg-transparent border-lime rounded-3 px-4 py-2 fs-5 fw-medium d-flex align-items-center gap-2'>
            <LuRefreshCw />
            Regenerate Financial Score</button>
          <button className='border-0 bg-gray rounded-3 px-4 py-2 fs-5 fw-medium d-flex align-items-center gap-2'>
            <FaFileAlt />
            Add More Documents</button>
        </div>
      </div>
    </>
  )
}

export default TotalSkor
