import React from 'react';
import Banner from './Banner';

function maincomp(props) {
    return (
        <div>
            <Banner objid='maincomp'></Banner>
            <div>
                <div style={{height : '100vh'}} id='process' className='border-top'></div>
                <div style={{height : '100vh'}} id='review' className='border-top bg-dark'></div>
                <div style={{height : '100vh'}} id='qna' className='border-top'></div>
                
            </div>
        </div>
    );
}

export default maincomp;