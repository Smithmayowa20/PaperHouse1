// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconsLoadingLineIcon(props) {
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
        d={
          "M8 1.333A.667.667 0 007.333 2v2a.667.667 0 001.334 0V2A.667.667 0 008 1.333zm0 10a.667.667 0 00-.667.667v2a.667.667 0 101.334 0v-2A.667.667 0 008 11.333zm6-4a.667.667 0 110 1.334h-2a.667.667 0 110-1.334h2zM4.667 8A.667.667 0 004 7.333H2a.667.667 0 000 1.334h2A.667.667 0 004.667 8zm7.104-4.714a.667.667 0 11.943.943L11.3 5.643a.667.667 0 11-.943-.943l1.414-1.414zm-6.128 7.071a.667.667 0 00-.943 0l-1.414 1.414a.667.667 0 10.943.943L5.643 11.3a.667.667 0 000-.943zm7.071 1.414a.667.667 0 01-.943.943L10.357 11.3a.667.667 0 01.943-.943l1.414 1.414zM5.643 5.643a.667.667 0 000-.943L4.229 3.286a.667.667 0 10-.943.943L4.7 5.643c.26.26.683.26.943 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsLoadingLineIcon;
/* prettier-ignore-end */
