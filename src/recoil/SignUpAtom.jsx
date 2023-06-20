import { atom } from "recoil";

export const isClickSignUpWithPassword = atom({
  key: "isClickSignUpWithPassword",
  default: false,
});

export const isClickSignUpWithEmailLink = atom({
  key: "isClickSignUpWithEmailLink",
  default: false,
});

export const userEmail = atom({
  key: "userEmail",
  default: "",
});

export const userNickName = atom({
  key: "userNickName",
  default: "",
});

export const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

// const myNewSelector = selector({
//   key: "myNewSelector",
//   get: ({ get }) => get(myAtom),
//   set: ({ set }, newValue) => set(myAtom, newValue),
// });
