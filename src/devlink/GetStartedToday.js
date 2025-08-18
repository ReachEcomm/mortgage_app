"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { GlobalButtonLightBtn } from "./GlobalButtonLightBtn";
import * as _utils from "./utils";
import _styles from "./GetStartedToday.module.css";

export function GetStartedToday({
  as: _Component = _Builtin.Section,
  title = "Get Started Today Header",
  description = (
    <>
      {
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      }
      <br />
      <br />
      {
        " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      }
    </>
  ),
  button1Text = "Start Your Application Today",

  button1Link = {
    href: "#",
  },

  button2Text = "Connect With Our Team",

  link = {
    href: "#",
  },

  button2Link = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "get_started_services-sec")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.BlockContainer
        className={_utils.cx(_styles, "get_star_cont")}
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "mainheroheader-left")}
          tag="h1"
        >
          {title}
        </_Builtin.Heading>
        <_Builtin.Paragraph
          className={_utils.cx(_styles, "mainbodypara-white-left")}
        >
          {description}
        </_Builtin.Paragraph>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-44")}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "yellow_buttom-large-moob")}
            button={true}
            block=""
            options={button1Link}
          >
            {button1Text}
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-11")}
          tag="div"
        >
          <GlobalButtonLightBtn name={button1Text} link={button1Link} />
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
