import React, { useState } from 'react';
import logo from '../logo.svg';
import navicss from './css/navi.module.css';
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';
import navijson from './json/navi.json';
// npm i react-router-dom
// npm install react-bootstrap bootstra
// npm i react-scrollspy

 function Navi() {
    const [ colorMode, updataColor ] = useState(true);
    const [activenum, updateactive] = useState(-1);

    const naviactive =(e) => {
        const navitag = e.target.parentElement.parentElement;
        const navitagArr=[...e.target.parentElement.parentElement.children];
        
        const mynum = navitagArr.indexOf(e.target.parentNode)
        updateactive(mynum);
        console.log(activenum);
    }

  return (
    <div className={  colorMode ? 'lightmode fixed-top' : 'darkmode fixed-top' }>
        <div className={`${navicss.hd} 
                          border-bottom 
                        py-3 px-4 
        d-flex justify-content-between align-items-center
        `}>
        <h1>
            <Link to="/">
                <img src={logo}  />
            </Link>
        </h1>
        <Scrollspy className='d-flex'>
        {
            navijson.nav.map((el, idx) => {
                return (
                    <li key={ 'gnb'+idx }>
                        <a href={el.href} onClick={ naviactive } className={
                            activenum === idx ? `${navicss.active}`  : null
                        }>{el.title}</a>
                    </li>
                )
            })
        }        
        </Scrollspy>
            <ul id="sns" className='d-flex'>
                <li>
                    <a href="http://www.youtube.com" target="_blank">유튜브</a>
                </li>
                <li>
                    <a href="http://www.youtube.com" target="_blank">자료실</a>
                </li>
                <li>
                    <button onClick={ () =>{
                        updataColor(!colorMode)
                    }}> { colorMode ? '다크' : '라이트' }</button>
                </li>
            </ul>  

        </div>
    </div>
  )
}

export default Navi;