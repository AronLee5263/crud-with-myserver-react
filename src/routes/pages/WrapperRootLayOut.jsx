import React, { useEffect, useState } from "react";

import NoMobile, { UseIsMobile } from "../../components/NoMobile";
import RootLayOut from "../pages/RootLayout";

import NewPostAnimationContext from "../../store/newPost-animation-context";

export default function WrapperRootLayOut() {
  const mobileSize = UseIsMobile();

  let content;

  if (mobileSize === false) {
    content = <NoMobile />;
  } else {
    content = (
      <NewPostAnimationContext.Provider
        value={{
          isClickedNewPost: false,
        }}
      >
        <RootLayOut />
      </NewPostAnimationContext.Provider>
    );
  }
  // console.log("mobileSize :", mobileSize);

  return <>{content}</>;
}
