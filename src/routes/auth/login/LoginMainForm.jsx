// import classes from "./SignUpMainForm.module.css";

// import { isClickSignUpWithPassword, isClickSignUpWithEmailLink } from "../../recoil/SignUpAtom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import LoginSubForm from "../login/LoginSubForm";

export default function LoginMainForm() {
  let navigate = useNavigate();

  const [isClickEP, setIsClickEP] = useState(false);
  const [isClickLink, setIsClickLink] = useState(false);

  const clickLoginPasswordHandler = (e) => {
    e.preventDefault();
    setIsClickEP(true);
    setIsClickLink(false);
    navigate("with_password");
  };

  const clickLoginLinkHandler = (e) => {
    setIsClickLink(true);
    setIsClickEP(false);
    navigate("with_email_link");
  };

  //   const content = () => {
  //     if ((isClickEP && isClickLink) === false) {
  //       return <SignUpSubForm />;
  //     } else if (isClickEP) {
  //       return <SignUpPassword />;
  //     } else if (!isClickEP) {
  //       return (
  //         <SignUpSubForm
  //           onClickSignPassword={(e) => {
  //             clickSignPasswordHandler(e, isClickEP);
  //           }}
  //         />
  //       );
  //     } else if (isClickLink) {
  //       return <SignUpEmailLink />;
  //     } else if (!isClickLink) {
  //       return <SignUpSubForm onClickSignLink={(e) => clickSignLinkHandler(e, isClickLink)} />;
  //     }
  //   };

  return (
    <>
      {/* {isClickEP && <SignUpPassword />} */}
      {/* {isClickLink && <SignUpEmailLink />} */}

      {!isClickEP && !isClickLink && (
        <LoginSubForm onClickSignPassword={clickLoginPasswordHandler} onClickSignLink={clickLoginLinkHandler} />
      )}
    </>
  );
}
