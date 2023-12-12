import {create} from 'zustand';
import {useRecoilState} from "recoil";
import {userIdState, userPwState} from "../../states/userIdStore";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'

import { styled } from "styled-components";
import Input from "../../components/form/Input";
import {useCallback, useEffect, useMemo, useReducer, useState} from "react";
import Lists from "../../components/etc/Lists";

const LoginWrap = styled.div`
`

const initialState = {
    id: '',
    pw: ''
}

function reducer(state,action) {

    switch(action.type) {
        case 'id':
        case 'pw':
            for(let key in state) {
                if(key === action.type) {
                    state[key] = action.payload
                    return {...state}
                }
            }
            break;

        case 'del':
            let initOBJ = {
                id: '',
                pw: ''
            }
            return {...state, ...initOBJ}

        default:
            return {...state}
    }


}


const Login = () => {

    // const { handleSubmit, register, formState: { errors }} = useForm()

    const [state, dispatch] = useReducer(reducer, initialState)
    const [lists, setList] = useState([])

    function sendData() {
        const empty = Object.values(state).includes('')
        if(empty) return

        setList(prev => ([
            ...prev,
            state
        ]))

        dispatch({ type: 'del' })
    }






    return (
        <LoginWrap className='login_wrap'>
            <h2>Login</h2>
            {/*<form className='login_form' onSubmit={handleSubmit(onSubmit)}>*/}
            {/*    */}
            {/*</form>*/}
            <input type='text' value={state['id']} onChange={(e) => dispatch({ type: 'id', payload: e.target.value })} />
            <input type='password' value={state['pw']} onChange={(e) => dispatch({ type: 'pw', payload: e.target.value }) } />
            <button className='btn' type='button' onClick={sendData}>확인</button>
            <Lists lists={lists} />
        </LoginWrap>
    )
}

export default Login;