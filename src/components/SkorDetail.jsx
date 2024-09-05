import React from 'react'

const SkorDetail = () => {
    return (
        <>
            <div className='col-lg-6 g-5'>
                <div className="card border border-gray rounded-4 px-5 py-4">
                    <h6 className='mb-3 fs-4 text-gray fw-semibold'>Score Details:</h6>
                    <div className="mb-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <span className='fs-4 fw-bold'>Financial Skor</span>
                            <span className="progress-value">620</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-custom progress-bar-gradient" role="progressbar" style={{ width: '75%' }} aria-valuenow="620" aria-valuemin="0" aria-valuemax="800"></div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-3 fs-5 text-gray fw-semibold">
                            <span>0</span>
                            <span>800</span>
                        </div>
                    </div>


                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className='fs-4 fw-bold'>Rental Skor</span>
                        <span className="progress-value">40</span>
                    </div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-custom progress-bar-purple" role="progressbar" style={{ width: '30%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="200"></div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3 fs-5 text-gray fw-semibold">
                        <span>0</span>
                        <span>200</span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SkorDetail
