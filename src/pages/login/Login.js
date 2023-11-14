import {create} from 'zustand';
import useNumStore from "../../store/zustandStore";
import {useRecoilState} from "recoil";
import {nameState} from "../../store/recoilState";
import {userIdState, userPwState} from "../../states/userIdStore";

const Login = () => {

    const [userId, setUserId] = useRecoilState(userIdState)
    const [userPw, setUserPw] = useRecoilState(userPwState);


    return (
        <div className='login_wrap'>

            <label>
                <span>아이디</span>
                <input
                    type='text'
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
            </label>

            <label>
                <span>비밀번호</span>
                <input
                    type='password'
                    value={userPw}
                    onChange={(e) => setUserPw(e.target.value)}
                />
            </label>

            <button
                type='button'
                onClick={() => {}}
            >로그인
            </button>
        </div>
    )
}

export default Login;