import React , {useState} from 'react';
import logo from '../logo.svg'
import navicss from'./css/navi.module.css';
import {Link} from 'react-router-dom'
import Scrollspy from 'react-scrollspy'

function Navi(props) {
    const[colormod , setMode]= useState(true);
    return (
        <div className={colormod ? 'lightmode fixed-top' : 'darkmode fixed-top'}>
        <div className={`${navicss.hd}  d-flex justify-content-between align-items-center border-buttom py-3 px-4`}>
            <h1>
                <Link to='/'>
                    <img src={logo}/>
                </Link>
            </h1>
            <Scrollspy className='d-flex'>
                <li><Link to ="/about">뇌새김소개</Link></li>
                <li><a href = "#process">뇌새김의 학습원리</a></li>
                <li><a href = '#review'>뇌새김의 후기</a></li>
                <li><a href = '#qna'>문의하기</a></li>
            </Scrollspy>
                <ul id='sns' className="d-flex">
                    <li>
                        <a href="http://wwww.youtube.com" target="_blank">Y</a>
                    </li>
                    <li>
                        <a href="http://wwww.youtube.com" target="_blank">N</a>
                    </li>
                    <li>
                        <button onClick={()=>{
                            setMode(!colormod)
                        }}>{ colormod ? '다크' : '라이트'}</button>
                    </li>
                </ul>
        </div>
    </div>  
    );
}

export default Navi;