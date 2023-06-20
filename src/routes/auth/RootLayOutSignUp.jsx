import { Outlet } from "react-router-dom";

import SignUpMainHeader from "../../routes/auth/SignUpMainHeader";
import NoMobile from "../../components/NoMobile";

export default function RootLayOutSignUp() {
  return (
    <>
      <Outlet />
      <SignUpMainHeader />

      <NoMobile />
    </>
  );
}
