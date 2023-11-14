import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const persist = recoilPersist();



export const userIdState = atom({
    key: 'userid',
    default: '',
})

export const userPwState = atom({
    key: 'userpw',
    default: '',
})



