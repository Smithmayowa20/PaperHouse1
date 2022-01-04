// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconsFileUploadLineIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M3 5a4 4 0 014-4h8.343a4 4 0 012.829 1.172l1.656 1.656A4 4 0 0121 6.657V19a4 4 0 01-4 4H7a4 4 0 01-4-4V5zm16 3v11a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2h7v2a3 3 0 003 3h2zm-.11-2a2 2 0 00-.476-.757l-1.657-1.657A2 2 0 0016 3.11V5a1 1 0 001 1h1.89z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M11.617 9.076a.998.998 0 00-.324.217l-3 3a1 1 0 101.414 1.414L11 12.414V17a1 1 0 102 0v-4.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.09-.217z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsFileUploadLineIcon;
/* prettier-ignore-end */
