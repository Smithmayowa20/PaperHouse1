// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Base2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 256 16"}
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
          "M0 8c0-1.112.888-2.02 2-2.047L248.001.187a7.815 7.815 0 110 15.625L1.999 10.048A2.047 2.047 0 010 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Base2Icon;
/* prettier-ignore-end */
