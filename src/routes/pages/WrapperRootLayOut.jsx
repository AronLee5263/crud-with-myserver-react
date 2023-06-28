import React, { useEffect, useState } from "react";

import RootLayOut from "../pages/RootLayout";

import NewPostAnimationContext from "../../store/newPost-animation-context";

export default function WrapperRootLayOut() {
  return (
    <>
      <NewPostAnimationContext.Provider
        value={{
          isClickedNewPost: false,
        }}
      >
        <RootLayOut />
      </NewPostAnimationContext.Provider>
    </>
  );
}
