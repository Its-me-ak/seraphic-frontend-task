import React from 'react'

const PayRent = () => {
  return (
    <>
        <div className='col-12 g-5'>
            <div className='d-flex justify-content-between flex-column flex-lg-row gap-3 gap-lg-0 align-items-center'>
                <div>
                    <h2 className='fs-2 fw-bold text-capitalize'>pay your monthly rent</h2>
                      <p className='fs-5 text-gray fw-normal'>Pay your next rent payment through Skor and keep earning points while improving your rental history.</p>
                </div>
                <button className='btn-lime border-0 px-5 py-3 rounded-3 fs-5 fw-bold'>Pay Now</button>
            </div>
        </div>
    </>
  )
}

export default PayRent
