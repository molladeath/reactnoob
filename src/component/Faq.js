import React from 'react';
import faqdb from './json/faqdb.json';

function Faq(props) {
    
    return (
        <div id='faq' className='container py-5'>
            <h2 className='text-center pt-5 pb-3'>자주 묻는 질문</h2>

            <ul className='border col-8 mx-auto p-4'>

{
    faqdb.faqlist.map((el,idx)=>{
        var listArr = el.faqContent.split('/');
        return (
            <li key={'faqcom'+ idx}>
                <strong role='button'
                onClick={ (e)=>{
                    e = e || window.event;  
                    e.target.nextSibling.classList.toggle('d-none')}}>
                    {el.faqtitle}</strong>
                <p className= 'd-none bg-dark text-white py-3'>
                    {
                      listArr.map((eel,idx)=>{
                        return <>{eel}<br /></>
                      })
                    }
                </p>
            </li>
        )
    })
}
            </ul>
            
        </div>
    );
}

export default Faq;