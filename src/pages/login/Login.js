import { create } from 'zustand';
import useNumStore from "../../store/zustandStore";
import {useRecoilState} from "recoil";
import {nameState} from "../../store/recoilState";

const Login = () => {

    const num = useNumStore(state => state.num)
    const _increase = useNumStore(state => state.increase)

    const [name, setName] = useRecoilState(nameState);

    console.log({name})

    // const propoty = {
    //     specise: 'Human',
    //     constructor: function(name) {
    //         this.name = name;
    //         return this;
    //     },
    //     greet: function() {
    //         console.log(`Hello I'm ${this.name}`)
    //     }
    // }
    // const p1 = Object.create(propoty).constructor('CodingMax')
    //
    //
    // console.log(p1)
    // console.log(p1.name)

    function a() {
        console.log('a')
    }
    a()


    return (
        <div className={'login_wrap'}>
            <input type='text' value={name} onChange={(e) => { setName(e.target.value)}} />
            <input type='password' />
            <button
                type='button'
                onClick={() => {}}
            >로그인</button>

            <span>{num}</span>
            <button
                type='button'
                onClick={_increase}
            >더하기</button>
        </div>
    )
}

export default Login;