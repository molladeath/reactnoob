import React, {useState} from 'react';

function Qna(props) {

    const[password , setPassword]=useState("");
    const[statue, updateStatue] = useState(false);

    const changePw=({target :{value}})=> setPassword(value);
    const sendForm= async (e)=>{
        // 폼태그는 기본적으로 새로고침한다.
        // 폼태그가 중복 실행되지 않도록 막아야 한다.
        updateStatue(true);//버튼 막아
        e = e || window.event;
        e.preventDefault();//싱글페이지 새로고침 막아버림
        await new Promise( (r)=> setTimeout(r,1000)       )
        alert(`수정된 비밀번호 확인해보기 ${password}`)
        updateStatue(false);
    }

    return (
        <div id='qna' className='py-5'>
            <h2 className='text-center py-5'>문의하기</h2>
            <form onSubmit={sendForm} className='col-6 mx-auto'>
                <input type='password' 
                       value={password} 
                       name='pw'
                       onChange={changePw}
                       />
                <button type='submit' disabled={statue}>변경하기</button>
            </form> 
            
        </div>
    );
}

export default Qna;