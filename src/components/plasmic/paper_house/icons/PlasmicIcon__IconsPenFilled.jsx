// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconsPenFilledIcon(props) {
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
          "M14.111 11.222l-2.889 2.89c-.49.49-1.287.49-1.778 0a.629.629 0 010-.89l3.778-3.778a.629.629 0 01.89 0c.49.491.49 1.287 0 1.778zM6.01 7.177a.39.39 0 00-.1-.325L1.996 2.94c-.17-.17-.446-.084-.412.153l.775 5.43a4 4 0 002.269 3.06l2.614 1.22a.667.667 0 00.754-.133l4.673-4.673a.667.667 0 00.133-.753l-1.22-2.615a4 4 0 00-3.06-2.269l-5.43-.775c-.237-.034-.323.243-.153.412L6.852 5.91a.39.39 0 00.325.1 1.333 1.333 0 11-1.168 1.168z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsPenFilledIcon;
/* prettier-ignore-end */
