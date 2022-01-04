// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconsArrowRight2Line2Icon(props) {
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
          "M14.09 7.265a1 1 0 011.414.057l3.23 3.5a1 1 0 010 1.356l-3.23 3.5a1 1 0 11-1.47-1.356l1.682-1.822H6a1 1 0 010-2h9.716l-1.682-1.822a1 1 0 01.057-1.413z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsArrowRight2Line2Icon;
/* prettier-ignore-end */
