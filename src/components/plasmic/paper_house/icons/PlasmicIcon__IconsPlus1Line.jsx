// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconsPlus1LineIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
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
          "M12.667 8a4.667 4.667 0 11-9.334 0 4.667 4.667 0 019.334 0zm2 0A6.667 6.667 0 111.333 8a6.667 6.667 0 0113.334 0zM8 3.667a1 1 0 011 1V7h2.333a1 1 0 110 2H9v2.333a1 1 0 11-2 0V9H4.667a1 1 0 110-2H7V4.667a1 1 0 011-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsPlus1LineIcon;
/* prettier-ignore-end */
