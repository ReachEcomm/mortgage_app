"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NavarDarkText.module.css";

export function NavarDarkText({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "navbar_dark")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.NavbarWrapper
        className={_utils.cx(_styles, "nav_cont_sec-copy", "shadow-three_dark")}
        tag="div"
        config={{
          animation: "default",
          collapse: "medium",
          docHeight: false,
          duration: 400,
          easing: "ease",
          easing2: "ease",
          noScroll: false,
        }}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-33")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "navbar-wrapper-2")}
            tag="div"
          >
            <_Builtin.NavbarBrand
              className={_utils.cx(_styles, "navbar-brand-2")}
              options={{
                href: "#",
              }}
            >
              <_Builtin.Image
                width="auto"
                height="auto"
                loading="lazy"
                alt=""
                src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/6824d045556bfbf33671a5f6_image%2010.png"
              />
            </_Builtin.NavbarBrand>
            <_Builtin.NavbarButton
              className={_utils.cx(_styles, "menu-button-4")}
              tag="div"
            >
              <_Builtin.Icon
                className={_utils.cx(_styles, "icon-3")}
                widget={{
                  type: "icon",
                  icon: "nav-menu",
                }}
              />
            </_Builtin.NavbarButton>
            <_Builtin.NavbarMenu
              className={_utils.cx(_styles, "nav_menu_wrapper")}
              tag="nav"
              role="navigation"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-22")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "light_list-home")}
                  button={false}
                  block=""
                  options={{
                    href: "/services/mortgage-renewal",
                  }}
                >
                  {"Renewal"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "light_list-home")}
                  button={false}
                  block=""
                  options={{
                    href: "/services/mortgage-refinance",
                  }}
                >
                  {"Refinancing"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "light_list-home")}
                  button={false}
                  block=""
                  options={{
                    href: "/services/reverse-mortgage",
                  }}
                >
                  {"Reverse Mortgage"}
                </_Builtin.Link>
                <_Builtin.DropdownWrapper
                  className={_utils.cx(_styles, "list-item_dark-home-copy")}
                  tag="div"
                  delay={0}
                  hover={true}
                >
                  <_Builtin.DropdownToggle
                    className={_utils.cx(_styles, "dropdown-toggle-3_light")}
                    tag="div"
                  >
                    <_Builtin.Icon
                      className={_utils.cx(_styles, "icon-4_light")}
                      widget={{
                        type: "icon",
                        icon: "dropdown-toggle",
                      }}
                    />
                    <_Builtin.Link
                      className={_utils.cx(_styles, "link-2_light")}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Reverse Mortgage"}
                    </_Builtin.Link>
                  </_Builtin.DropdownToggle>
                  <_Builtin.DropdownList
                    className={_utils.cx(_styles, "dropdown-list-3")}
                    tag="nav"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "div-block-20")}
                      tag="div"
                    >
                      <_Builtin.NotSupported _atom="DynamoWrapper" />
                    </_Builtin.Block>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
                <_Builtin.Link
                  className={_utils.cx(_styles, "light_list-home")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Calculator"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "light_list-home")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Contact Us"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "nav-link-accent-3phone--home")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Strong
                    className={_utils.cx(_styles, "phone_text_dark")}
                  >
                    {"(905) 234-3323"}
                  </_Builtin.Strong>
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "header-buttom")}
                  button={true}
                  block=""
                  options={{
                    href: "/landing-pages/apply",
                  }}
                >
                  {"Apply Today"}
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.NavbarMenu>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.NavbarWrapper>
    </_Component>
  );
}
