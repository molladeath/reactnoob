import React from 'react';
import Banner from './Banner';
import Faq from './Faq';
import Qna from './Qna';

function maincomp(props) {
    return (
        <div>
            <Banner objid='maincomp'></Banner>
            <div>
                <Faq></Faq>
                <div style={{height : '100vh'}} id='review' className='border-top bg-secondary'></div>
                <Qna></Qna>
                
            </div>
        </div>
    );
}

export default maincomp;