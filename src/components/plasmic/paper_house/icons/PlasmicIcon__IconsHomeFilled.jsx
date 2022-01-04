// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconsHomeFilledIcon(props) {
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
          "M13.333 12.533V5.977l.99.595a.667.667 0 10.687-1.144L11.662 3.42 9.1 1.877c-.186-.112-.33-.199-.45-.263a1.331 1.331 0 00-.086-.044 1.2 1.2 0 00-.278-.102 1.333 1.333 0 00-.574 0c-.09.02-.177.053-.279.102a1.327 1.327 0 00-.084.043 10.52 10.52 0 00-.45.264L4.333 3.422.99 5.428a.667.667 0 10.686 1.144l.99-.595v6.556c0 .747 0 1.12.146 1.406.128.25.332.454.583.582.285.146.658.146 1.405.146H6v-4a2 2 0 114 0v4h1.2c.747 0 1.12 0 1.405-.146.251-.128.455-.331.583-.582.145-.286.145-.659.145-1.406z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsHomeFilledIcon;
/* prettier-ignore-end */
