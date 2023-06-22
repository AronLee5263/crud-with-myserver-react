// import classes from "./SignUpMainForm.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SignUpSubForm from "./SignUpSubForm";

export default function SignUpMainForm() {
  let navigate = useNavigate();

  const [isClickEP, setIsClickEP] = useState(false);
  const [isClickLink, setIsClickLink] = useState(false);

  const clickSignPasswordHandler = (e) => {
    e.preventDefault();
    setIsClickEP(true);
    setIsClickLink(false);
    navigate("/sign_up/with_password");
  };

  const clickSignLinkHandler = (e) => {
    setIsClickLink(true);
    setIsClickEP(false);
    navigate("/sign_up/with_email_link");
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
        <SignUpSubForm onClickSignPassword={clickSignPasswordHandler} onClickSignLink={clickSignLinkHandler} />
      )}
    </>
  );
}
