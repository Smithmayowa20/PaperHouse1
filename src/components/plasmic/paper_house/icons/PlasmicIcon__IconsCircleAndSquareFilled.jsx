// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconsCircleAndSquareFilledIcon(props) {
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
          "M6 12a6 6 0 005.993-6.296.35.35 0 01.343-.37h.997c.737 0 1.334.596 1.334 1.333v6.666c0 .737-.597 1.334-1.334 1.334H6.667a1.333 1.333 0 01-1.334-1.334v-.997a.35.35 0 01.371-.343c.098.005.197.007.296.007z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M10.667 6a4.667 4.667 0 11-9.334 0 4.667 4.667 0 019.334 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsCircleAndSquareFilledIcon;
/* prettier-ignore-end */
