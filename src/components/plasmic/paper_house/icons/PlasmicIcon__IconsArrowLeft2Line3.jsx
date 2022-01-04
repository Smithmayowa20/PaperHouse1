// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconsArrowLeft2Line3Icon(props) {
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
          "M9.91 7.265a1 1 0 00-1.414.057l-3.23 3.5a1 1 0 000 1.356l3.23 3.5a1 1 0 001.47-1.356L8.284 12.5H18a1 1 0 000-2H8.284l1.682-1.822a1 1 0 00-.057-1.413z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsArrowLeft2Line3Icon;
/* prettier-ignore-end */
