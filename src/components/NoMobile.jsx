import classes from "./NoMobile.module.css";

import { useMediaQuery } from "react-responsive";

export default function NoMobile() {
  const small = useMediaQuery({ query: "(max-width: 319px) " });
  const large = useMediaQuery({ query: "(min-width: 645px) " });

  let text;
  let text2;

  if (small) {
    text = "스크린이 너무 작아서 볼 수 없어요.";
    text2 = "좀 더 큰 화면에서 실행해주세요 ";
  } else if (large) {
    text = "스크린이 너무 커서 볼 수 없어요.";
    text2 = "휴대폰이나 작은 화면에서 실행해주세요 ";
  }
  return (
    <>
      <div className={classes.no_mobile}>
        <span className={classes.text}>
          {text} <br />
          <br />
          {text2}
        </span>
      </div>
    </>
  );
}

export function UseIsMobile() {
  const noMobileSize = useMediaQuery({ query: "(min-width: 320px) and (max-width: 645px)" });
  return noMobileSize;
}
