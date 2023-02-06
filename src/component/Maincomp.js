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
             
                <div style={{height : '100vh' , width : '50vw'}} id='review' className='border-top bg-secondary'>
                    <span className=''><h1>이거 되는 겁니까?</h1></span>
                </div>
            
                <Qna></Qna>
                
            </div>
        </div>
    );
}

export default maincomp;