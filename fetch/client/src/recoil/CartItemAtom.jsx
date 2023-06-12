import { atom } from "recoil";

export const CartItemAtom = atom({
  key: "CartItemAtom",
  default: [],
});

const myNewSelector = selector({
  key: "myNewSelector",
  get: ({ get }) => get(myAtom),
  set: ({ set }, newValue) => set(myAtom, newValue),
});
