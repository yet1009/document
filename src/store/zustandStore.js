import {create} from "zustand";

const useNumStore = create((set) => ({
    num: 0,
    increase: () => set((state) => ({ num: state.num + 1})),
}))

export default useNumStore;