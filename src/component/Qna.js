import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Qna = () => {
  const { 
    
    handleSubmit,
    
    register, 

    formState: { errors } } = useForm();

   
    const onSubmit = values => console.log(values);


    

    return (
        <div id="qna" className='py-5 col-6 mx-auto'>
            <h2 className='text-center py-5'>가입하기</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
      <ul>
        <li className='mb-2 '>
          <input
          placeholder='이메일'
          className='w-100 d-block'
          type="email"
          {...register("email", {
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address"
            }
          })}
        />
        {/* formState 의 설정해둔 errors의 이메일에러 메세지출력 */}        
        {errors.email && errors.email.message}
        </li>
        <li className='mb-2 '>
          <input
          placeholder='이름'
          className='w-100 d-block'
          {...register("username", {
            validate: value => value !== "admin" || "Nice try!"
          })}
        />
        {errors.username && errors.username.message}
        </li>
      </ul>
      <p className='d-flex justify-content-end'>
        <button type="submit">전재산 기부하기</button>
      </p>
      
    </form>

          
          
  </div>
    );
}

export default Qna;