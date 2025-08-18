"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./WhiteBorderButton.module.css";

export function WhiteBorderButton({
  as: _Component = _Builtin.Link,
  buttonName = "Button Text",

  link = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "light-border-button")}
      button={true}
      block=""
      options={link}
    >
      {buttonName}
    </_Component>
  );
}
