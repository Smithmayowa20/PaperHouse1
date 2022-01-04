// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconsWalletLineIcon(props) {
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
          "M19 5H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2zM5 3a4 4 0 00-4 4v10a4 4 0 004 4h14a4 4 0 004-4V7a4 4 0 00-4-4H5z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M13 12a5 5 0 015-5h4a1 1 0 110 2h-4a3 3 0 100 6h4a1 1 0 110 2h-4a5 5 0 01-5-5z"
        }
        fill={"currentColor"}
      ></path>

      <path d={"M19 12a1 1 0 11-2 0 1 1 0 012 0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default IconsWalletLineIcon;
/* prettier-ignore-end */
