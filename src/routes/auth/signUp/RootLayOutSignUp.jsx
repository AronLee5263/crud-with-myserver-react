import { Outlet } from "react-router-dom";

import SignUpMainHeader from "./SignUpMainHeader";
import NoMobile, { UseIsMobile } from "../../../components/NoMobile";

export default function RootLayOutSignUp() {
  const mobileSize = UseIsMobile();

  let content;

  if (mobileSize === false) {
    return <NoMobile />;
  }

  return (
    <>
      <SignUpMainHeader />
      <Outlet />
    </>
  );
}
