"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { GlobalButton } from "./GlobalButton";
import * as _utils from "./utils";
import _styles from "./BlogSection.module.css";

export function BlogSection({
  as: _Component = _Builtin.Section,
  title = "Related articles",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "blog_section")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Section
        className={_utils.cx(_styles, "section-12")}
        grid={{
          type: "section",
        }}
        tag="section"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "blog_head_wrap")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-27")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-26")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "discover_blue_button")}
              button={true}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Discover More Articles"}
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "desk_btn_y")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "mainbodyheading-dark_left")}
              tag="h1"
            >
              {title}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-58")}
              tag="div"
            >
              <GlobalButton
                name="Read On"
                link={{
                  href: "#",
                }}
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.NotSupported _atom="DynamoWrapper" />
      </_Builtin.Section>
    </_Component>
  );
}
