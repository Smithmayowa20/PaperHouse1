// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconsHeartFilledIcon(props) {
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
        d={
          "M12 4.81A6.5 6.5 0 001 9.5c0 6.368 6.97 9.885 9.814 11.055a3.096 3.096 0 002.372 0C16.03 19.385 23 15.868 23 9.5a6.5 6.5 0 00-11-4.69z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsHeartFilledIcon;
/* prettier-ignore-end */
