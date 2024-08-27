import { create } from "zustand";

interface storeProps {
  login: boolean;
}
const useStore = create<storeProps>((set) => ({
  login: false,
}));

export default useStore;
