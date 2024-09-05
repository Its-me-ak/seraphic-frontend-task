import React from 'react'

const AddressCard = () => {
    return (
        <>
            <div className='col-lg-6 g-5'>
                <div className="card-custom">
                    <div className="card-content">
                        <h6 className='fs-4 fw-semibold mb-5 pb-4'>Address</h6>
                        <div className="icon-circle d-flex justify-content-center align-items-center mb-4">
                            <img src="/assets/img/Vector.png" alt="" />
                        </div>
                        <div className='pb-2'>
                            <h5 className="mb-2 fs-3 fw-bold">Virgen del Puerto</h5>
                            <p className="mb-0 fs-4 fw-light">Carretera Nacional II, San Fernando de Henares, Madrid, 28830</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddressCard
