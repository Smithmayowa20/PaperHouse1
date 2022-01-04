// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconsArrowLeft2Line2Icon(props) {
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
          "M6.606 4.843a.667.667 0 00-.942.038L3.51 7.214a.667.667 0 000 .905l2.154 2.333a.667.667 0 00.98-.904L5.523 8.333H12A.667.667 0 1012 7H5.523l1.12-1.214a.667.667 0 00-.037-.943z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsArrowLeft2Line2Icon;
/* prettier-ignore-end */
