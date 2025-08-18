"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-9":{"id":"e-9","name":"","animationType":"custom","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-54"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6754261c83063c4b66a2ec16|5b3d71c4-7c6b-9430-68af-a2257a72a9a8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6754261c83063c4b66a2ec16|5b3d71c4-7c6b-9430-68af-a2257a72a9a8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1733573594132},"e-10":{"id":"e-10","name":"","animationType":"custom","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-44"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6754261c83063c4b66a2ec16|5b3d71c4-7c6b-9430-68af-a2257a72a9a8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6754261c83063c4b66a2ec16|5b3d71c4-7c6b-9430-68af-a2257a72a9a8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1733573594132},"e-11":{"id":"e-11","name":"","animationType":"preset","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-65"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6754261c83063c4b66a2ec16|0d37265a-c30b-beb2-7fdb-b3d2d49228a5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6754261c83063c4b66a2ec16|0d37265a-c30b-beb2-7fdb-b3d2d49228a5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1733574436002},"e-12":{"id":"e-12","name":"","animationType":"preset","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-56"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6754261c83063c4b66a2ec16|0d37265a-c30b-beb2-7fdb-b3d2d49228a5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6754261c83063c4b66a2ec16|0d37265a-c30b-beb2-7fdb-b3d2d49228a5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1733574436002},"e-13":{"id":"e-13","name":"","animationType":"preset","eventTypeId":"SLIDER_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-53"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6754261c83063c4b66a2ec16|a27bf46c-5da3-a886-77d8-03f34aeb7e1f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6754261c83063c4b66a2ec16|a27bf46c-5da3-a886-77d8-03f34aeb7e1f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1733576635380},"e-14":{"id":"e-14","name":"","animationType":"preset","eventTypeId":"SLIDER_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-61"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6754261c83063c4b66a2ec16|a27bf46c-5da3-a886-77d8-03f34aeb7e1f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6754261c83063c4b66a2ec16|a27bf46c-5da3-a886-77d8-03f34aeb7e1f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1733576635380},"e-21":{"id":"e-21","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-22"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".global_padding","originalId":"6754261c83063c4b66a2ec16|52c82af6-2bae-7d99-ff58-27d73df5a3e1","appliesTo":"CLASS"},"targets":[{"selector":".global_padding","originalId":"6754261c83063c4b66a2ec16|52c82af6-2bae-7d99-ff58-27d73df5a3e1","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":200,"direction":null,"effectIn":true},"createdOn":1733581594059}},"actionLists":{"a":{"id":"a","title":"Slide_content","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero_slide_main_title","selectorGuids":["e2f38742-3a2d-4502-d1f7-8619678cf06d"]},"value":0,"unit":""}},{"id":"a-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero_slide_main_title","selectorGuids":["e2f38742-3a2d-4502-d1f7-8619678cf06d"]},"yValue":30,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero_slide_secondary_title","selectorGuids":["c3f95304-1867-97aa-cad0-86e57c9952a2"]},"value":0,"unit":""}},{"id":"a-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hero_slide_secondary_title","selectorGuids":["c3f95304-1867-97aa-cad0-86e57c9952a2"]},"yValue":30,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".primary_btn.hero_animation","selectorGuids":["e1f88312-c04b-cad9-3042-f4a34f343199","03aa43f8-5644-4f40-090f-3923e2489623"]},"value":0,"unit":""}},{"id":"a-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".primary_btn.hero_animation","selectorGuids":["e1f88312-c04b-cad9-3042-f4a34f343199","03aa43f8-5644-4f40-090f-3923e2489623"]},"yValue":30,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":300,"easing":"","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".hero_slide_main_title","selectorGuids":["e2f38742-3a2d-4502-d1f7-8619678cf06d"]},"value":1,"unit":""}},{"id":"a-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".hero_slide_main_title","selectorGuids":["e2f38742-3a2d-4502-d1f7-8619678cf06d"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".hero_slide_secondary_title","selectorGuids":["c3f95304-1867-97aa-cad0-86e57c9952a2"]},"value":1,"unit":""}},{"id":"a-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".hero_slide_secondary_title","selectorGuids":["c3f95304-1867-97aa-cad0-86e57c9952a2"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".primary_btn.hero_animation","selectorGuids":["e1f88312-c04b-cad9-3042-f4a34f343199","03aa43f8-5644-4f40-090f-3923e2489623"]},"value":1,"unit":""}},{"id":"a-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".primary_btn.hero_animation","selectorGuids":["e1f88312-c04b-cad9-3042-f4a34f343199","03aa43f8-5644-4f40-090f-3923e2489623"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1733573599070},"a-2":{"id":"a-2","title":"Slide_content Out","actionItemGroups":[{"actionItems":[{"id":"a-2-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".hero_slide_secondary_title","selectorGuids":["c3f95304-1867-97aa-cad0-86e57c9952a2"]},"yValue":30,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".hero_slide_main_title","selectorGuids":["e2f38742-3a2d-4502-d1f7-8619678cf06d"]},"yValue":30,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".primary_btn.hero_animation","selectorGuids":["e1f88312-c04b-cad9-3042-f4a34f343199","03aa43f8-5644-4f40-090f-3923e2489623"]},"value":0,"unit":""}},{"id":"a-2-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".primary_btn.hero_animation","selectorGuids":["e1f88312-c04b-cad9-3042-f4a34f343199","03aa43f8-5644-4f40-090f-3923e2489623"]},"yValue":30,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".hero_slide_secondary_title","selectorGuids":["c3f95304-1867-97aa-cad0-86e57c9952a2"]},"value":0,"unit":""}},{"id":"a-2-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".hero_slide_main_title","selectorGuids":["e2f38742-3a2d-4502-d1f7-8619678cf06d"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1733573599070},"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Footer({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "footer_section")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "footer_top")} tag="div">
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
            <_Builtin.Grid
              className={_utils.cx(_styles, "footer_grid")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "footer_grid_wrapper", "left")}
                id={_utils.cx(
                  _styles,
                  "w-node-_69c05d92-df43-2450-55ae-83c06abc15a6-6abc15a1"
                )}
                tag="div"
              >
                <_Builtin.Image
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/67544087539ec9d98b5a1cc8_logo_65f24a336f061eae2273ff7257068f53_1x.avif"
                />
                <_Builtin.Heading tag="h3">
                  {"Home Equity Loans Made Easy"}
                </_Builtin.Heading>
                <_Builtin.Heading
                  className={_utils.cx(_styles, "footer_heading")}
                  tag="h2"
                >
                  {"Guiding You To Financial Freedom"}
                </_Builtin.Heading>
                <_Builtin.Paragraph>
                  {
                    "Whether it's saving you money by refinancing your mortgage, consolidating your debt, or switching lenders, we’ll customize a plan that helps guide you to a stronger financial future"
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "footer_grid_wrapper")}
                id={_utils.cx(
                  _styles,
                  "w-node-_69c05d92-df43-2450-55ae-83c06abc15ae-6abc15a1"
                )}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "primary_btn",
                    "hero_animation"
                  )}
                  button={true}
                  block=""
                  options={{
                    href: "https://www.lighthouselending.ca/landing-pages/apply",
                  }}
                >
                  {"Begin Now!"}
                </_Builtin.Link>
                <_Builtin.Block
                  className={_utils.cx(_styles, "icon_box_wrapper")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "icon_box_item")}
                    button={false}
                    block="inline"
                    options={{
                      href: "https://www.google.com/maps/place/18075+Leslie+St,+Newmarket,+ON+L3Y+8Z9,+Kanada/@44.0793368,-79.4340826,204m/data=!3m2!1e3!4b1!4m6!3m5!1s0x882acd9878df8777:0x815ca3e179f5f737!8m2!3d44.0793368!4d-79.4340826!16s%2Fg%2F11bw3ylbfj?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D",
                      target: "_blank",
                    }}
                  >
                    <_Builtin.HtmlEmbed value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2226%22%20height%3D%2226%22%20fill%3D%22%23151349%22%20class%3D%22bi%20bi-globe-americas%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20d%3D%22M8%200a8%208%200%201%200%200%2016A8%208%200%200%200%208%200M2.04%204.326c.325%201.329%202.532%202.54%203.717%203.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758%201.266.035.634.618.824%201.214%201.017.577.188%201.168.38%201.286.983.082.417-.075.988-.22%201.52-.215.782-.406%201.48.22%201.48%201.5-.5%203.798-3.186%204-5%20.138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171%201.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434%201.265-.791%202.028-1.12.712-.306%201.365-.587%201.579-.88A7%207%200%201%201%202.04%204.327Z%22%2F%3E%0A%3C%2Fsvg%3E" />
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "icon_box_text")}
                    >
                      {"18075 Leslie Street Unit #206, Newmarket, ON, L3Y 9A4"}
                    </_Builtin.Paragraph>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "icon_box_item")}
                    button={false}
                    block="inline"
                    options={{
                      href: "https://www.google.ca/maps/place/4950+Yonge+St+%232108,+Toronto,+ON+M2N+6K1/@43.7648723,-79.414682,17z/data=!3m1!4b1!4m6!3m5!1s0x882b2d656e6d7d51:0xf8fbe61b2788671f!8m2!3d43.7648723!4d-79.4121071!16s%2Fg%2F11y38d0cx8?entry=tts&g_ep=EgoyMDI0MDgyMS4wKgBIAVAD",
                      target: "_blank",
                    }}
                  >
                    <_Builtin.HtmlEmbed value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2226%22%20height%3D%2226%22%20fill%3D%22%23151349%22%20class%3D%22bi%20bi-globe-americas%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20d%3D%22M8%200a8%208%200%201%200%200%2016A8%208%200%200%200%208%200M2.04%204.326c.325%201.329%202.532%202.54%203.717%203.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758%201.266.035.634.618.824%201.214%201.017.577.188%201.168.38%201.286.983.082.417-.075.988-.22%201.52-.215.782-.406%201.48.22%201.48%201.5-.5%203.798-3.186%204-5%20.138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171%201.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434%201.265-.791%202.028-1.12.712-.306%201.365-.587%201.579-.88A7%207%200%201%201%202.04%204.327Z%22%2F%3E%0A%3C%2Fsvg%3E" />
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "icon_box_text")}
                    >
                      {"4950 Yonge St, Suite 2108, Toronto, ON M2N 6K1"}
                    </_Builtin.Paragraph>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "icon_box_item")}
                    button={false}
                    block="inline"
                    options={{
                      href: "mailto:info@lighthouselending.ca",
                    }}
                  >
                    <_Builtin.HtmlEmbed value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2226%22%20height%3D%2226%22%20fill%3D%22%23151349%22%20class%3D%22bi%20bi-envelope%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20d%3D%22M0%204a2%202%200%200%201%202-2h12a2%202%200%200%201%202%202v8a2%202%200%200%201-2%202H2a2%202%200%200%201-2-2zm2-1a1%201%200%200%200-1%201v.217l7%204.2%207-4.2V4a1%201%200%200%200-1-1zm13%202.383-4.708%202.825L15%2011.105zm-.034%206.876-5.64-3.471L8%209.583l-1.326-.795-5.64%203.47A1%201%200%200%200%202%2013h12a1%201%200%200%200%20.966-.741M1%2011.105l4.708-2.897L1%205.383z%22%2F%3E%0A%3C%2Fsvg%3E" />
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "icon_box_text")}
                    >
                      {"info@lighthouselending.ca"}
                    </_Builtin.Paragraph>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "icon_box_item")}
                    button={false}
                    block="inline"
                    options={{
                      href: "tel:1-888-831-4817",
                    }}
                  >
                    <_Builtin.HtmlEmbed value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2226%22%20height%3D%2226%22%20fill%3D%22%23151349%22%20class%3D%22bi%20bi-telephone-outbound%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20d%3D%22M3.654%201.328a.678.678%200%200%200-1.015-.063L1.605%202.3c-.483.484-.661%201.169-.45%201.77a17.6%2017.6%200%200%200%204.168%206.608%2017.6%2017.6%200%200%200%206.608%204.168c.601.211%201.286.033%201.77-.45l1.034-1.034a.678.678%200%200%200-.063-1.015l-2.307-1.794a.68.68%200%200%200-.58-.122l-2.19.547a1.75%201.75%200%200%201-1.657-.459L5.482%208.062a1.75%201.75%200%200%201-.46-1.657l.548-2.19a.68.68%200%200%200-.122-.58zM1.884.511a1.745%201.745%200%200%201%202.612.163L6.29%202.98c.329.423.445.974.315%201.494l-.547%202.19a.68.68%200%200%200%20.178.643l2.457%202.457a.68.68%200%200%200%20.644.178l2.189-.547a1.75%201.75%200%200%201%201.494.315l2.306%201.794c.829.645.905%201.87.163%202.611l-1.034%201.034c-.74.74-1.846%201.065-2.877.702a18.6%2018.6%200%200%201-7.01-4.42%2018.6%2018.6%200%200%201-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11%20.5a.5.5%200%200%201%20.5-.5h4a.5.5%200%200%201%20.5.5v4a.5.5%200%200%201-1%200V1.707l-4.146%204.147a.5.5%200%200%201-.708-.708L14.293%201H11.5a.5.5%200%200%201-.5-.5%22%2F%3E%0A%3C%2Fsvg%3E" />
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "icon_box_text")}
                    >
                      {"1-888-831-4817"}
                    </_Builtin.Paragraph>
                  </_Builtin.Link>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "socials_wrapper")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "social_icon")}
                    button={false}
                    block="inline"
                    options={{
                      href: "https://www.facebook.com/lighthouselending",
                      target: "_blank",
                    }}
                  >
                    <_Builtin.HtmlEmbed value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2234%22%20height%3D%2234%22%20fill%3D%22%23151349%22%20class%3D%22bi%20bi-facebook%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20d%3D%22M16%208.049c0-4.446-3.582-8.05-8-8.05C3.58%200-.002%203.603-.002%208.05c0%204.017%202.926%207.347%206.75%207.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017%201.195-3.131%203.022-3.131.876%200%201.791.157%201.791.157v1.98h-1.009c-.993%200-1.303.621-1.303%201.258v1.51h2.218l-.354%202.326H9.25V16c3.824-.604%206.75-3.934%206.75-7.951%22%2F%3E%0A%3C%2Fsvg%3E" />
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "social_icon")}
                    button={false}
                    block="inline"
                    options={{
                      href: "https://www.instagram.com/lighthouselending/",
                      target: "_blank",
                    }}
                  >
                    <_Builtin.HtmlEmbed value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2234%22%20height%3D%2234%22%20fill%3D%22%23151349%22%20class%3D%22bi%20bi-instagram%22%20viewBox%3D%220%200%2016%2016%22%3E%0A%20%20%3Cpath%20d%3D%22M8%200C5.829%200%205.556.01%204.703.048%203.85.088%203.269.222%202.76.42a3.9%203.9%200%200%200-1.417.923A3.9%203.9%200%200%200%20.42%202.76C.222%203.268.087%203.85.048%204.7.01%205.555%200%205.827%200%208.001c0%202.172.01%202.444.048%203.297.04.852.174%201.433.372%201.942.205.526.478.972.923%201.417.444.445.89.719%201.416.923.51.198%201.09.333%201.942.372C5.555%2015.99%205.827%2016%208%2016s2.444-.01%203.298-.048c.851-.04%201.434-.174%201.943-.372a3.9%203.9%200%200%200%201.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99%2010.445%2016%2010.173%2016%208s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9%203.9%200%200%200-.923-1.417A3.9%203.9%200%200%200%2013.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01%2010.172%200%207.998%200zm-.717%201.442h.718c2.136%200%202.389.007%203.232.046.78.035%201.204.166%201.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275%201.485.039.843.047%201.096.047%203.231s-.008%202.389-.047%203.232c-.035.78-.166%201.203-.275%201.485a2.5%202.5%200%200%201-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5%202.5%200%200%201-.92-.598%202.5%202.5%200%200%201-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24%201.485-.276.738-.034%201.024-.044%202.515-.045zm4.988%201.328a.96.96%200%201%200%200%201.92.96.96%200%200%200%200-1.92m-4.27%201.122a4.109%204.109%200%201%200%200%208.217%204.109%204.109%200%200%200%200-8.217m0%201.441a2.667%202.667%200%201%201%200%205.334%202.667%202.667%200%200%201%200-5.334%22%2F%3E%0A%3C%2Fsvg%3E" />
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Grid>
          </_Builtin.Block>
        </_Builtin.BlockContainer>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "copy_part")} tag="div">
        <_Builtin.BlockContainer
          className={_utils.cx(_styles, "container")}
          grid={{
            type: "container",
          }}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "global_padding_footer")}
            tag="div"
          >
            <_Builtin.Grid
              className={_utils.cx(_styles, "copy_grid")}
              tag="div"
            >
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "footer_copy_text")}
                id={_utils.cx(
                  _styles,
                  "w-node-_69c05d92-df43-2450-55ae-83c06abc15cb-6abc15a1"
                )}
              >
                {"2025 © "}
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer_link")}
                  button={false}
                  target="_self"
                  block=""
                  options={{
                    href: "https://www.lighthouselending.ca/",
                  }}
                >
                  {"Lighthouse Lending"}
                </_Builtin.Link>
              </_Builtin.Paragraph>
              <_Builtin.Block
                className={_utils.cx(_styles, "footer_copy_nav_wrapp")}
                id={_utils.cx(
                  _styles,
                  "w-node-_69c05d92-df43-2450-55ae-83c06abc15cf-6abc15a1"
                )}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer_copy_nav_item")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Contact Us"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer_copy_nav_item")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Privacy Policy"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer_copy_nav_item")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"FSRA # 13301"}
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Grid>
          </_Builtin.Block>
        </_Builtin.BlockContainer>
      </_Builtin.Block>
    </_Component>
  );
}
