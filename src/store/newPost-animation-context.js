import React from "react";

const NewPostAnimationContext = React.createContext({
  isClickedNewPost: false,
  isClickedCancelBtn: true,
});

export default NewPostAnimationContext;

// export const cancelNewPostBtn = React.createContext({
//   isClickedCancelBtn: true,
// });
