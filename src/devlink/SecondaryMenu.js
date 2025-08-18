"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { GlobalButton } from "./GlobalButton";
import * as _utils from "./utils";
import _styles from "./SecondaryMenu.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-227":{"id":"e-227","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-228"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"05d12e05-f7bf-a5bf-f12c-d71988651a9a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"05d12e05-f7bf-a5bf-f12c-d71988651a9a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750175797451},"e-228":{"id":"e-228","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-38","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-227"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"05d12e05-f7bf-a5bf-f12c-d71988651a9a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"05d12e05-f7bf-a5bf-f12c-d71988651a9a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750175797451},"e-231":{"id":"e-231","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-232"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"141b3371-192d-0b17-87c3-d73ac0cc273e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"141b3371-192d-0b17-87c3-d73ac0cc273e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1750176100941},"e-271":{"id":"e-271","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-66","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-66-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1750274678332}},"actionLists":{"a-37":{"id":"a-37","title":"change_text_menu_color","actionItemGroups":[{"actionItems":[{"id":"a-37-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".link_menu","selectorGuids":["dbc0a12e-a0fa-b208-9562-c665069fd5d1"]},"globalSwatchId":"--dark-blue","rValue":21,"bValue":73,"gValue":19,"aValue":1}}]},{"actionItems":[{"id":"a-37-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon_menu","selectorGuids":["b9a1e74d-8240-f2c9-1c1b-f6de7d6db638"]},"globalSwatchId":"--dark-blue","rValue":21,"bValue":73,"gValue":19,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1750172128691},"a-38":{"id":"a-38","title":"change_menu_original","actionItemGroups":[{"actionItems":[{"id":"a-38-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".link_menu","selectorGuids":["dbc0a12e-a0fa-b208-9562-c665069fd5d1"]},"globalSwatchId":"--white","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]},{"actionItems":[{"id":"a-38-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon_menu","selectorGuids":["b9a1e74d-8240-f2c9-1c1b-f6de7d6db638"]},"globalSwatchId":"--white","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1750172220974},"a-41":{"id":"a-41","title":"show_sticky_menu","actionItemGroups":[{"actionItems":[{"id":"a-41-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".scroll_menu","selectorGuids":["679de612-be51-ea15-af35-cc8a34a3c418"]},"value":"block"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1750176052489},"a-66":{"id":"a-66","title":"New Scroll Animation","continuousParameterGroups":[{"id":"a-66-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-66-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"05d12e05-f7bf-a5bf-f12c-d71988651ab3"},"globalSwatchId":"--light-gold","rValue":248,"bValue":14,"gValue":197,"aValue":1}}]},{"keyframe":3,"actionItems":[{"id":"a-66-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"05d12e05-f7bf-a5bf-f12c-d71988651ab3"},"globalSwatchId":"--main-blue","rValue":61,"bValue":229,"gValue":116,"aValue":1}}]},{"keyframe":100,"actionItems":[{"id":"a-66-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"05d12e05-f7bf-a5bf-f12c-d71988651ab3"},"globalSwatchId":"--main-blue","rValue":61,"bValue":229,"gValue":116,"aValue":1}}]}]}],"createdOn":1750274686936}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SecondaryMenu({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "scroll_menu")} tag="div">
      <_Builtin.NavbarWrapper
        className={_utils.cx(_styles, "nav_cont_sec_scroll", "shadow-three")}
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
                className={_utils.cx(_styles, "image-32")}
                data-w-id="05d12e05-f7bf-a5bf-f12c-d71988651a95"
                width="auto"
                height="auto"
                loading="lazy"
                alt=""
                src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/685185b73bec658039046772_image%208%20(2).png"
              />
            </_Builtin.NavbarBrand>
            <_Builtin.NavbarButton
              className={_utils.cx(_styles, "menu-button-4")}
              tag="div"
            >
              <_Builtin.Icon
                className={_utils.cx(_styles, "icon-3-home")}
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
                <_Builtin.DropdownWrapper
                  className={_utils.cx(
                    _styles,
                    "list-item_dark-home-drop_scroll"
                  )}
                  data-w-id="05d12e05-f7bf-a5bf-f12c-d71988651a9a"
                  tag="div"
                  delay={0}
                  hover={true}
                >
                  <_Builtin.DropdownToggle
                    className={_utils.cx(_styles, "dropdown-toggle-3")}
                    tag="div"
                  >
                    <_Builtin.Block tag="div">
                      <_Builtin.Icon
                        className={_utils.cx(_styles, "icon_menu_scroll")}
                        widget={{
                          type: "icon",
                          icon: "dropdown-toggle",
                        }}
                      />
                    </_Builtin.Block>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "link_menu_scroll")}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Services "}
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
                  className={_utils.cx(_styles, "list-item_dark-home_scroll")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Our Process"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "list-item_dark-home_scroll")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Our Team"}
                </_Builtin.Link>
                <_Builtin.DropdownWrapper
                  className={_utils.cx(_styles, "dropdown-3")}
                  tag="div"
                  delay={0}
                  hover={true}
                >
                  <_Builtin.DropdownToggle
                    className={_utils.cx(_styles, "dropdown-toggle-4")}
                    tag="div"
                  >
                    <_Builtin.Icon
                      widget={{
                        type: "icon",
                        icon: "dropdown-toggle",
                      }}
                    />
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "list-item_dark-home_scroll"
                      )}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Calculate Your Rate"}
                    </_Builtin.Link>
                  </_Builtin.DropdownToggle>
                  <_Builtin.DropdownList
                    className={_utils.cx(_styles, "dropdown-list-4")}
                    tag="nav"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "div-block-65")}
                      tag="div"
                    >
                      <_Builtin.NotSupported _atom="DynamoWrapper" />
                    </_Builtin.Block>
                  </_Builtin.DropdownList>
                </_Builtin.DropdownWrapper>
                <_Builtin.Link
                  className={_utils.cx(_styles, "list-item_dark-home_scroll")}
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
                    href: "tel:(905)234-3323",
                  }}
                >
                  <_Builtin.Strong
                    className={_utils.cx(_styles, "phone_text")}
                    data-w-id="05d12e05-f7bf-a5bf-f12c-d71988651ab3"
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
                <_Builtin.Block
                  className={_utils.cx(_styles, "header_nav")}
                  tag="div"
                >
                  <GlobalButton
                    name="Apply Today"
                    link={{
                      href: "/landing-pages/apply",
                    }}
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.NavbarMenu>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.NavbarWrapper>
    </_Component>
  );
}
