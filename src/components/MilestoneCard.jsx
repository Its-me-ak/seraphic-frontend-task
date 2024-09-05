import React from 'react'

const MilestoneCard = () => {
  return (
    <>
      <div className='col-lg-6 g-5'>
              <div className="milestones-card">
                  <h6 className='mb-4 fs-4 fw-bold'>Milestones and gamification:</h6>
                  <div className="step-bar">
                      <div className="step">
                          <span className="points">50 Points</span>
                      </div>
                      <div className="step">
                          <span className="points">50 Points</span>
                      </div>
                      <div className="step">
                          <span className="points">50 Points</span>
                      </div>
                      <div className="step">
                          <span className="points">50 Points</span>
                      </div>
                      <div className="step">
                          <span className="points"></span>
                      </div>
                  </div>
                  <div className="month-blocks d-flex flex-wrap gap-2 gap-md-5">
                      <div className="month-block box-shadow text-center pb-3">
                          <h6>MAR</h6>
                          <div className="date">05</div>
                          <div className="year">2024</div>
                      </div>
                      <div className="month-block box-shadow text-center pb-3">
                          <h6>APR</h6>
                          <div className="date">05</div>
                          <div className="year">2024</div>
                      </div>
                      <div className="month-block box-shadow text-center pb-3">
                          <h6>MAY</h6>
                          <div className="date">05</div>
                          <div className="year">2024</div>
                      </div>
                      <div className="month-block box-shadow text-center pb-3">
                          <h6>JUN</h6>
                          <div className="date">05</div>
                          <div className="year">2024</div>
                      </div>
                      <div className="month-block box-shadow text-center pb-3">
                          <h6>JUL</h6>
                          <div className="date">05</div>
                          <div className="year">2024</div>
                      </div>
                  </div>
              </div>
      </div>
    </>
  )
}

export default MilestoneCard
