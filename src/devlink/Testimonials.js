"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { GlobalButton } from "./GlobalButton";
import * as _utils from "./utils";
import _styles from "./Testimonials.module.css";

export function Testimonials({
  as: _Component = _Builtin.Block,
  title = "Real Success, Real Clients.",
  subtitle = (
    <>
      {"Don’t take our word for it. "}
      <br />
      {"Trust our customers"}
    </>
  ),
}) {
  return (
    <_Component className={_utils.cx(_styles, "feedbacksection")} tag="div">
      <_Builtin.BlockContainer
        className={_utils.cx(_styles, "container-18")}
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "mainbodyheading-dark")}
          tag="h1"
        >
          {title}
        </_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-size-medium-copy")}
          tag="div"
        >
          {subtitle}
        </_Builtin.Block>
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "code-embed-5")}
          value="%3C!--%20Elfsight%20Google%20Reviews%20%7C%20Light%20House%20Lending%20Google%20Reviews%20--%3E%0A%3Cscript%20src%3D%22https%3A%2F%2Fstatic.elfsight.com%2Fplatform%2Fplatform.js%22%20async%3E%3C%2Fscript%3E%0A%3Cdiv%20class%3D%22elfsight-app-009085ce-953a-436d-9706-298f70f65f93%22%20data-elfsight-app-lazy%3E%3C%2Fdiv%3E%0A%0A%0A%3Cstyle%3E%0A%0A.faq_text%7B%0Afont-size%3A%2014px%20!important%3B%7D%0A%0A%3C%2Fstyle%3E"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "sub_heading_block")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-41")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "yellow_buttom-review")}
              button={true}
              block=""
              options={{
                href: "https://www.google.com/search?sca_esv=b42e03ff43b61ad3&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E5ge1ROSb1Fl9Kq7zQgWZPzAM9SF2piSWUbkPsD5yrB25z_8MBJKA7tbnAk3mIkywtwF2djf2qJvUU1acxjQ8GoKDzvzQSXOEyRQmLi8Y8Suyd1s7w%3D%3D&q=Lighthouse+Lending+Reviews&sa=X&ved=2ahUKEwjBlPzmhNaNAxVcJDQIHWSePX0Q0bkNegQIJBAE&biw=1680&bih=962&dpr=2",
                target: "_blank",
              }}
            >
              {"Discover More Success Stories"}
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-43-copy")}
            tag="div"
          >
            <GlobalButton
              name="Discover More Success Stories"
              link={{
                href: "https://www.google.com/search?sca_esv=b42e03ff43b61ad3&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E5ge1ROSb1Fl9Kq7zQgWZPzAM9SF2piSWUbkPsD5yrB25z_8MBJKA7tbnAk3mIkywtwF2djf2qJvUU1acxjQ8GoKDzvzQSXOEyRQmLi8Y8Suyd1s7w%3D%3D&q=Lighthouse+Lending+Reviews&sa=X&ved=2ahUKEwjBlPzmhNaNAxVcJDQIHWSePX0Q0bkNegQIJBAE&biw=1680&bih=962&dpr=2",
                target: "_blank",
              }}
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
