// import classes from "./RootLayOutAuth.module.css";

// import { useState, useEffect } from "react";
// import { useNavigate, Link, useLocation } from "react-router-dom";

// import NoMobile, { UseIsMobile } from "../../components/NoMobile";
// import AuthHeader from "./AuthHeader";

// import SignUpForm from "./signUp/SignUpForm";
// import LoginForm from "./login/LoginForm";
// import SignUpEmailLink from "./signUp/SignUpEmailLink";

// export default function RootLayOutAuth() {
//   const mobileSize = UseIsMobile();
//   const location = useLocation();

//   const state = location.state;

//   if (mobileSize === false) {
//     return <NoMobile />;
//   }

//   let content;
//   let content2;

//   if (state.what === "signUp") {
//     content = (
//       <>
//         <SignUpForm></SignUpForm>
//       </>
//     );
//   } else if (state.what === "login") {
//     content = (
//       <>
//         <LoginForm></LoginForm>
//       </>
//     );
//   }

//   return (
//     <>
//       <div className={classes.authPage}>
//         <div className={classes.header}>
//           <AuthHeader />
//         </div>

//         <div className={classes.formSection}>{content}</div>

//         {/* <LoginMainForm /> */}
//       </div>
//     </>
//   );
// }
