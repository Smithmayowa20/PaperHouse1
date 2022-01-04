// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconsLightningFilledIcon(props) {
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
          "M2.763 8.943L9.001.306c.412-.57 1.314-.195 1.198.5L9.333 6h3.363c.544 0 .859.616.54 1.057L7 15.694c-.412.57-1.314.195-1.198-.5L6.667 10H3.304a.667.667 0 01-.54-1.057z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsLightningFilledIcon;
/* prettier-ignore-end */
