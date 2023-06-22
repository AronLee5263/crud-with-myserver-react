import { Outlet } from "react-router-dom";

import SignUpMainHeader from "./SignUpMainHeader";
import NoMobile from "../../../components/NoMobile";

export default function RootLayOutSignUp() {
  return (
    <>
      <SignUpMainHeader />
      <Outlet />

      <NoMobile />
    </>
  );
}
