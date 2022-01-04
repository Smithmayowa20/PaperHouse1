// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GroupIcon(props) {
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
        d={
          "M21 18.023a.884.884 0 01-.884.884H3.884a.884.884 0 010-1.767H3.9v-6.16C3.9 6.574 7.527 3 12 3s8.1 3.573 8.1 7.98v6.16h.016c.488 0 .884.395.884.883zM5.7 17.14h12.6v-6.16c0-3.43-2.82-6.213-6.3-6.213S5.7 7.55 5.7 10.981v6.159zm4.276 3.616c-.245-.495.222-.965.774-.965h2.5c.552 0 1.019.47.774.965a2.21 2.21 0 01-.433.597A2.271 2.271 0 0112 22a2.271 2.271 0 01-1.591-.647 2.209 2.209 0 01-.433-.597z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
