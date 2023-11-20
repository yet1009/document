import {create} from 'zustand';
import {useRecoilState} from "recoil";
import {userIdState, userPwState} from "../../states/userIdStore";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'

import { styled } from "styled-components";
import Input from "../../components/form/Input";

const LoginWrap = styled.div`
    
`


const Login = () => {

    const { handleSubmit, register, formState: { errors }} = useForm()

    const onSubmit = data => {
        console.log(data)
        JSON.stringify(data)
    }

    return (
        <LoginWrap className='login_wrap'>
            <form className='login_form' onSubmit={handleSubmit(onSubmit)}>

                <Input
                    {...register('email', {
                    required: true,
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'Invalid email address',
                        }
                    })}
                />

                {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
            </form>
        </LoginWrap>
    )
}

export default Login;