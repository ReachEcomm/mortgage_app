"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./RelatedBlogsSection.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-21":{"id":"e-21","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-22"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".global_padding","originalId":"6754261c83063c4b66a2ec16|52c82af6-2bae-7d99-ff58-27d73df5a3e1","appliesTo":"CLASS"},"targets":[{"selector":".global_padding","originalId":"6754261c83063c4b66a2ec16|52c82af6-2bae-7d99-ff58-27d73df5a3e1","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":200,"direction":null,"effectIn":true},"createdOn":1733581594059}},"actionLists":{"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function RelatedBlogsSection({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "related_blogs_section")}
      tag="section"
      grid={{
        type: "section",
      }}
    >
      <_Builtin.BlockContainer
        className={_utils.cx(_styles, "container")}
        tag="div"
        grid={{
          type: "container",
        }}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "global_padding")}
          tag="div"
        >
          <_Builtin.NotSupported _atom="DynamoWrapper" />
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
