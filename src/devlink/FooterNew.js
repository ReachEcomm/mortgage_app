"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { GlobalButtonLightBtn } from "./GlobalButtonLightBtn";
import * as _utils from "./utils";
import _styles from "./FooterNew.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-272":{"id":"e-272","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-62","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-273"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"04d847fe-65bd-d079-0ecf-8f9deb7fcba9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"04d847fe-65bd-d079-0ecf-8f9deb7fcba9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750275001997},"e-273":{"id":"e-273","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-63","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-272"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"04d847fe-65bd-d079-0ecf-8f9deb7fcba9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"04d847fe-65bd-d079-0ecf-8f9deb7fcba9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750275001997}},"actionLists":{"a-62":{"id":"a-62","title":"New Timed Animation","actionItemGroups":[{"actionItems":[{"id":"a-62-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"681e25e362ff0afe7eadd710|19eba22b-0183-c3c0-4d5d-d98fc24cf3b2"},"globalSwatchId":"--white","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1750272576918},"a-63":{"id":"a-63","title":"New Timed Animation","actionItemGroups":[{"actionItems":[{"id":"a-63-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"681e25e362ff0afe7eadd710|19eba22b-0183-c3c0-4d5d-d98fc24cf3b2"},"globalSwatchId":"--white","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1750272599954}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function FooterNew({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "footersec")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.BlockContainer
        className={_utils.cx(_styles, "footcont")}
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.BlockContainer
          className={_utils.cx(_styles, "footerlogocont")}
          grid={{
            type: "container",
          }}
          tag="div"
        >
          <_Builtin.Link
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image-10")}
              loading="lazy"
              width="193"
              height="auto"
              alt=""
              src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/68668918c021a61c385bcde4_LighthouseLending-RemadeLogo-2025-White%403x.png"
            />
          </_Builtin.Link>
        </_Builtin.BlockContainer>
        <_Builtin.Layout
          className={_utils.cx(_styles, "quick-stack-4")}
          id={_utils.cx(
            _styles,
            "w-node-_34ab270a-d965-4c1c-5122-db03717c295f-717c2959"
          )}
        >
          <_Builtin.Cell
            className={_utils.cx(_styles, "cell-12")}
            id={_utils.cx(
              _styles,
              "w-node-_34ab270a-d965-4c1c-5122-db03717c2960-717c2959"
            )}
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "footerheadtext")}
              tag="h1"
            >
              {"We Light Your Way To Financial Freedom."}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "take_control_button")}
              data-w-id="04d847fe-65bd-d079-0ecf-8f9deb7fcba9"
              tag="div"
            >
              <GlobalButtonLightBtn
                name="Start Now"
                link={{
                  href: "/landing-pages/apply",
                }}
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-46")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "yellow_buttom_slider")}
                button={true}
                block=""
                options={{
                  href: "/landing-pages/apply",
                }}
              >
                {"Apply Today"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Heading
              className={_utils.cx(_styles, "colheadfoot")}
              tag="h1"
            >
              {"Our Offices"}
            </_Builtin.Heading>
            <_Builtin.Paragraph className={_utils.cx(_styles, "footpara")}>
              {"18075 Leslie Street, Unit #206"}
              <br />
              {"Newmarket, ON | L3Y 9A4"}
            </_Builtin.Paragraph>
            <_Builtin.Paragraph className={_utils.cx(_styles, "footpara-copy")}>
              {"4950 Yonge Street, Suite 2108"}
              <br />
              {"Toronto, ON | M2N 6K1"}
            </_Builtin.Paragraph>
          </_Builtin.Cell>
          <_Builtin.Cell
            id={_utils.cx(
              _styles,
              "w-node-_34ab270a-d965-4c1c-5122-db03717c2965-717c2959"
            )}
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "colheadfoot")}
              tag="h1"
            >
              {"Our Services"}
            </_Builtin.Heading>
            <_Builtin.NotSupported _atom="DynamoWrapper" />
          </_Builtin.Cell>
          <_Builtin.Cell
            id={_utils.cx(
              _styles,
              "w-node-_34ab270a-d965-4c1c-5122-db03717c2970-717c2959"
            )}
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "colheadfoot")}
              tag="h1"
            >
              {"About"}
            </_Builtin.Heading>
            <_Builtin.Link
              className={_utils.cx(_styles, "foot_link")}
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Paragraph className={_utils.cx(_styles, "footpara")}>
                {"How We Help"}
              </_Builtin.Paragraph>
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "foot_link")}
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Paragraph className={_utils.cx(_styles, "footpara")}>
                {"Meet The Team"}
              </_Builtin.Paragraph>
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "foot_link")}
              button={false}
              block="inline"
              options={{
                href: "https://www.lighthouselending.ca/#faqs",
              }}
            >
              <_Builtin.Paragraph className={_utils.cx(_styles, "footpara")}>
                {"FAQs"}
              </_Builtin.Paragraph>
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "foot_link")}
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Paragraph className={_utils.cx(_styles, "footpara")}>
                {"Blogs"}
              </_Builtin.Paragraph>
            </_Builtin.Link>
          </_Builtin.Cell>
          <_Builtin.Cell
            id={_utils.cx(
              _styles,
              "w-node-_34ab270a-d965-4c1c-5122-db03717c2974-717c2959"
            )}
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "colheadfoot")}
              tag="h1"
            >
              {"Support"}
            </_Builtin.Heading>
            <_Builtin.Paragraph className={_utils.cx(_styles, "footpara")}>
              {"✉️"}
              <_Builtin.Link
                className={_utils.cx(_styles, "footpara")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"info@lighthouselending."}
              </_Builtin.Link>
              {"ca"}
            </_Builtin.Paragraph>
            <_Builtin.Paragraph className={_utils.cx(_styles, "footpara-copy")}>
              {"☏"}
              <_Builtin.Link
                className={_utils.cx(_styles, "footpara")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"1 (888) 831-4817"}
              </_Builtin.Link>
            </_Builtin.Paragraph>
            <_Builtin.Heading
              className={_utils.cx(_styles, "colheadfoot")}
              tag="h1"
            >
              {"Connect With Us"}
            </_Builtin.Heading>
            <_Builtin.Image
              loading="lazy"
              width="Auto"
              height="auto"
              alt=""
              src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/67e0aaee22349689dff9e7d3_Group%2031.png"
            />
          </_Builtin.Cell>
        </_Builtin.Layout>
        <_Builtin.Block
          className={_utils.cx(_styles, "copyright_block")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-17")}
            tag="div"
          >
            <_Builtin.Paragraph className={_utils.cx(_styles, "footpara")}>
              {"2025 © Lighthouse Lending"}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-18")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "footpara-bt")}
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"FSN #13301"}
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "footpara_privacy")}
              button={false}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Privacy Policy"}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
