"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./PageTitle.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-21":{"id":"e-21","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-22"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".global_padding","originalId":"6754261c83063c4b66a2ec16|52c82af6-2bae-7d99-ff58-27d73df5a3e1","appliesTo":"CLASS"},"targets":[{"selector":".global_padding","originalId":"6754261c83063c4b66a2ec16|52c82af6-2bae-7d99-ff58-27d73df5a3e1","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":200,"direction":null,"effectIn":true},"createdOn":1733581594059}},"actionLists":{"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function PageTitle({
  as: _Component = _Builtin.Section,
  backgroundImage = "https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/67583321a6fe5a42000b0ff2_contact-banner.avif",
  pageTitle = "Example Title",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "page_title_section")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Image
        className={_utils.cx(_styles, "page_title_bg_image")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src={backgroundImage}
      />
      <_Builtin.BlockContainer
        className={_utils.cx(_styles, "container")}
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "global_padding")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-3")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "page_title_heading")}
              tag="h1"
            >
              {pageTitle}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
