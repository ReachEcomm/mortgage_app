"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Header.module.css";

export function Header({ as: _Component = _Builtin.NavbarWrapper }) {
  return (
    <_Component
      className={_utils.cx(_styles, "navbar")}
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
      <_Builtin.NavbarContainer
        className={_utils.cx(_styles, "nav_container-copy")}
        tag="div"
      >
        <_Builtin.NavbarBrand
          className={_utils.cx(_styles, "brand")}
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "header_nav_logo")}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/67544087539ec9d98b5a1cc8_logo_65f24a336f061eae2273ff7257068f53_1x.avif"
          />
        </_Builtin.NavbarBrand>
        <_Builtin.NavbarMenu
          className={_utils.cx(_styles, "nav-menu")}
          tag="nav"
          role="navigation"
        >
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "nav_link")}
            options={{
              href: "#",
            }}
          >
            {"How we help"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "nav_link")}
            options={{
              href: "https://www.lighthouselending.ca/landing-pages/apply",
            }}
          >
            {"Apply now"}
          </_Builtin.NavbarLink>
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "dropdown")}
            tag="div"
            delay={0}
            hover={true}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "nav_dropdown_toggle")}
              tag="div"
            >
              <_Builtin.Icon
                className={_utils.cx(_styles, "icon-2")}
                widget={{
                  type: "icon",
                  icon: "dropdown-toggle",
                }}
              />
              <_Builtin.Link
                className={_utils.cx(_styles, "nav_link-copy")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Our Services"}
              </_Builtin.Link>
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "dropdown-list")}
              tag="nav"
            >
              <_Builtin.NotSupported _atom="DynamoWrapper" />
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "nav_link")}
            options={{
              href: "#",
            }}
          >
            {"Meet Team Lighthouse"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "nav_link")}
            options={{
              href: "#",
            }}
          >
            {"Contact us"}
          </_Builtin.NavbarLink>
          <_Builtin.Link
            className={_utils.cx(_styles, "nav_link", "icon")}
            button={false}
            block="inline"
            options={{
              href: "tel:1-888-831-4817",
            }}
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "header_call_icon")}
              value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2226%22%20height%3D%2226%22%20fill%3D%22%23151349%22%20class%3D%22bi%20bi-telephone-outbound%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20d%3D%22M3.654%201.328a.678.678%200%200%200-1.015-.063L1.605%202.3c-.483.484-.661%201.169-.45%201.77a17.6%2017.6%200%200%200%204.168%206.608%2017.6%2017.6%200%200%200%206.608%204.168c.601.211%201.286.033%201.77-.45l1.034-1.034a.678.678%200%200%200-.063-1.015l-2.307-1.794a.68.68%200%200%200-.58-.122l-2.19.547a1.75%201.75%200%200%201-1.657-.459L5.482%208.062a1.75%201.75%200%200%201-.46-1.657l.548-2.19a.68.68%200%200%200-.122-.58zM1.884.511a1.745%201.745%200%200%201%202.612.163L6.29%202.98c.329.423.445.974.315%201.494l-.547%202.19a.68.68%200%200%200%20.178.643l2.457%202.457a.68.68%200%200%200%20.644.178l2.189-.547a1.75%201.75%200%200%201%201.494.315l2.306%201.794c.829.645.905%201.87.163%202.611l-1.034%201.034c-.74.74-1.846%201.065-2.877.702a18.6%2018.6%200%200%201-7.01-4.42%2018.6%2018.6%200%200%201-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11%20.5a.5.5%200%200%201%20.5-.5h4a.5.5%200%200%201%20.5.5v4a.5.5%200%200%201-1%200V1.707l-4.146%204.147a.5.5%200%200%201-.708-.708L14.293%201H11.5a.5.5%200%200%201-.5-.5%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Paragraph>{"1-888-831-4817"}</_Builtin.Paragraph>
          </_Builtin.Link>
        </_Builtin.NavbarMenu>
        <_Builtin.NavbarButton
          className={_utils.cx(_styles, "menu-button")}
          tag="div"
        >
          <_Builtin.Icon
            widget={{
              type: "icon",
              icon: "nav-menu",
            }}
          />
        </_Builtin.NavbarButton>
      </_Builtin.NavbarContainer>
    </_Component>
  );
}
