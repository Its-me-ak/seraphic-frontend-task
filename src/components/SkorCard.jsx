import React from 'react'
import TotalSkor from './TotalSkor'
import SkorDetail from './SkorDetail';
import HeadingDetail from './HeadingDetail';

const SkorCard = () => {
    return (
        <>
            <div className='row bg-white rounded-3 box-shadow px-3 py-5 mt-5'>
                <HeadingDetail heading={'Skor'}/>
                <TotalSkor />
                <SkorDetail />
            </div>

        </>
    )
}

export default SkorCard
