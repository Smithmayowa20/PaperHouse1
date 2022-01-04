// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function FrameIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 32"}
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
          "M8 9a8 8 0 110 16A8 8 0 018 9zm-3.54 8.213a.92.92 0 011.523-.524l.005.004c.251.241.533.492.813.74l.24.216 2.843-2.983c.17-.178.294-.293.549-.35.873-.193 1.486.874.867 1.526L7.756 19.56c-.334.356-.93.389-1.29.049a25.058 25.058 0 00-.655-.582c-.391-.34-.791-.688-1.117-1.031a.93.93 0 01-.233-.784z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FrameIcon;
/* prettier-ignore-end */
