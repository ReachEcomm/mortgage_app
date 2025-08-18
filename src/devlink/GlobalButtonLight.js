"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { GlobalButtonLightBtn } from "./GlobalButtonLightBtn";
import * as _utils from "./utils";
import _styles from "./GlobalButtonLight.module.css";

export function GlobalButtonLight({
  as: _Component = _Builtin.Block,

  link = {
    href: "#",
  },

  name = "Start With Our Calculator",
}) {
  return (
    <_Component className={_utils.cx(_styles, "light_button")} tag="div">
      <GlobalButtonLightBtn name={name} link={link} />
    </_Component>
  );
}
