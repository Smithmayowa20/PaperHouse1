// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconsCheckLineIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
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
          "M24.943 9.724c.52.52.52 1.365 0 1.886L14.276 22.276c-.52.52-1.365.52-1.886 0l-5.333-5.333a1.333 1.333 0 111.886-1.886l4.39 4.39 9.724-9.723c.52-.52 1.365-.52 1.886 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsCheckLineIcon;
/* prettier-ignore-end */
