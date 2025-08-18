"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./LogoSliider.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-231":{"id":"e-231","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-232"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"141b3371-192d-0b17-87c3-d73ac0cc273e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"141b3371-192d-0b17-87c3-d73ac0cc273e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1750176100941},"e-318":{"id":"e-318","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-82","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-319"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1752512319728}},"actionLists":{"a-41":{"id":"a-41","title":"show_sticky_menu","actionItemGroups":[{"actionItems":[{"id":"a-41-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".scroll_menu","selectorGuids":["679de612-be51-ea15-af35-cc8a34a3c418"]},"value":"block"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1750176052489},"a-82":{"id":"a-82","title":"Logo Carousel","actionItemGroups":[{"actionItems":[{"id":"a-82-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".logo-carousel-wrap","selectorGuids":["2a8a8628-4bba-f7ba-091d-d75d44a91f3e"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-82-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":60000,"target":{"selector":".logo-carousel-wrap","selectorGuids":["2a8a8628-4bba-f7ba-091d-d75d44a91f3e"]},"xValue":-50,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-82-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".logo-carousel-wrap","selectorGuids":["2a8a8628-4bba-f7ba-091d-d75d44a91f3e"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1752512363655}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function LogoSliider({
  as: _Component = _Builtin.Section,
  title = "We work With Lenders You Know & Trust",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "logo_carosaul")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Heading
        className={_utils.cx(_styles, "smallbodyheading")}
        tag="h1"
      >
        {title}
      </_Builtin.Heading>
      <_Builtin.Section
        className={_utils.cx(_styles, "logo_section_slider")}
        grid={{
          type: "section",
        }}
        tag="section"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "carousel-component")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "carousel")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "logo-carousel-wrap")}
              tag="div"
            >
              <_Builtin.List
                className={_utils.cx(_styles, "logo-carousel-2")}
                tag="ul"
                unstyled={false}
              >
                <_Builtin.ListItem
                  className={_utils.cx(_styles, "logo-carousel-item")}
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "logo-link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "logo-image-2")}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/67b64a24f9c366796d90ad7f_Scotiabank-Emblem.png"
                    />
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(_styles, "logo-carousel-item")}
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "logo-link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "logo-image-2")}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/67b7552afb10202353594e4a_HomeTrust-Logo%201.png"
                    />
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(_styles, "logo-carousel-item")}
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "logo-link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "logo-image-2")}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/67b7552cab2abce06551df21_mcan-financial-logo.png"
                    />
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(_styles, "logo-carousel-item")}
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "logo-link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "logo-image-2")}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/67b64a1298809bb333365372_images%20(1)%201.png"
                    />
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(_styles, "logo-carousel-item")}
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "logo-link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "logo-image-2")}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/67b64a16d31dcba9313f0d39_logo-rebrand-eng.png"
                    />
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(_styles, "logo-carousel-item")}
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "logo-link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "logo-image-2")}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/67b64a1d85b2356fe110c5b8_bank-1920w%201.png"
                    />
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(_styles, "logo-carousel-item")}
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "logo-link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "logo-image-2")}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/67b64a210de4a901e636adab_TD-Bank-Logo.png"
                    />
                  </_Builtin.Link>
                </_Builtin.ListItem>
              </_Builtin.List>
              <_Builtin.Block
                className={_utils.cx(_styles, "logo-carousel-clone")}
                tag="div"
              >
                <_Builtin.List
                  className={_utils.cx(_styles, "logo-carousel-2")}
                  tag="ul"
                  unstyled={false}
                >
                  <_Builtin.ListItem
                    className={_utils.cx(_styles, "logo-carousel-item")}
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "logo-link")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "logo-image-2")}
                        width="auto"
                        height="auto"
                        loading="lazy"
                        alt=""
                        src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/67b64a24f9c366796d90ad7f_Scotiabank-Emblem.png"
                      />
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem
                    className={_utils.cx(_styles, "logo-carousel-item")}
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "logo-link")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "logo-image-2")}
                        width="auto"
                        height="auto"
                        loading="lazy"
                        alt=""
                        src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/67b7552afb10202353594e4a_HomeTrust-Logo%201.png"
                      />
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem
                    className={_utils.cx(_styles, "logo-carousel-item")}
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "logo-link")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "logo-image-2")}
                        width="auto"
                        height="auto"
                        loading="lazy"
                        alt=""
                        src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/67b7552cab2abce06551df21_mcan-financial-logo.png"
                      />
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem
                    className={_utils.cx(_styles, "logo-carousel-item")}
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "logo-link")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "logo-image-2")}
                        width="auto"
                        height="auto"
                        loading="lazy"
                        alt=""
                        src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/67b64a1298809bb333365372_images%20(1)%201.png"
                      />
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem
                    className={_utils.cx(_styles, "logo-carousel-item")}
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "logo-link")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "logo-image-2")}
                        width="auto"
                        height="auto"
                        loading="lazy"
                        alt=""
                        src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/67b64a16d31dcba9313f0d39_logo-rebrand-eng.png"
                      />
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem
                    className={_utils.cx(_styles, "logo-carousel-item")}
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "logo-link")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "logo-image-2")}
                        width="auto"
                        height="auto"
                        loading="lazy"
                        alt=""
                        src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/67b64a1d85b2356fe110c5b8_bank-1920w%201.png"
                      />
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                  <_Builtin.ListItem
                    className={_utils.cx(_styles, "logo-carousel-item")}
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "logo-link")}
                      button={false}
                      block="inline"
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "logo-image-2")}
                        width="auto"
                        height="auto"
                        loading="lazy"
                        alt=""
                        src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/67b64a210de4a901e636adab_TD-Bank-Logo.png"
                      />
                    </_Builtin.Link>
                  </_Builtin.ListItem>
                </_Builtin.List>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Section>
      <_Builtin.Block className={_utils.cx(_styles, "div-block-62")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-63")}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-64")}
          tag="div"
        />
      </_Builtin.Block>
    </_Component>
  );
}
