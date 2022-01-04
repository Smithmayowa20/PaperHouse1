// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconsArrowLeft2LineIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
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
          "M16.515 12.109a1.667 1.667 0 00-2.355.094l-5.385 5.833a1.667 1.667 0 000 2.261l5.385 5.834a1.667 1.667 0 002.45-2.262l-2.803-3.036H30a1.667 1.667 0 100-3.333H13.807l2.802-3.036a1.667 1.667 0 00-.094-2.355z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsArrowLeft2LineIcon;
/* prettier-ignore-end */
