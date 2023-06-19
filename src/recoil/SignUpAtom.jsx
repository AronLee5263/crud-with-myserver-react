import { atom } from "recoil";

export const signUpWithPassword = atom({
  key: "isClickSignUpWithPassword",
  default: [],
});

export const signUpWithEmailLink = atom({
  key: "isClickSignUpWithEmailLink",
  default: [],
});

export const userEmail = atom({
  key: "userEmail",
  default: [""],
});

export const userNickName = atom({
  key: "userNickName",
  default: [""],
});

const myNewSelector = selector({
  key: "myNewSelector",
  get: ({ get }) => get(myAtom),
  set: ({ set }, newValue) => set(myAtom, newValue),
});
