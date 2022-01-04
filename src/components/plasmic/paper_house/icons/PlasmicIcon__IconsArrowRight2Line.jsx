// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconsArrowRight2LineIcon(props) {
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
          "M9.394 4.843a.667.667 0 01.942.038l2.154 2.333a.667.667 0 010 .905l-2.154 2.333a.667.667 0 01-.98-.904l1.121-1.215H4A.667.667 0 014 7h6.477l-1.12-1.214a.667.667 0 01.037-.943z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsArrowRight2LineIcon;
/* prettier-ignore-end */
