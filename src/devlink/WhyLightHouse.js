"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { GlobalButton } from "./GlobalButton";
import * as _utils from "./utils";
import _styles from "./WhyLightHouse.module.css";

export function WhyLightHouse({
  as: _Component = _Builtin.Section,
  title = "Why Choose Lighthouse Lending?",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "why_section_services")}
      grid={{
        type: "section",
      }}
      tag="section"
      id="benefits"
    >
      <_Builtin.Heading
        className={_utils.cx(_styles, "mainbodyheading-dark")}
        tag="h1"
      >
        {title}
      </_Builtin.Heading>
      <_Builtin.Section
        className={_utils.cx(_styles, "mobile_section_wlh")}
        grid={{
          type: "section",
        }}
        tag="section"
      >
        <_Builtin.SliderWrapper
          className={_utils.cx(_styles, "slider-4")}
          navSpacing={3}
          autoplay={false}
          delay={4000}
          iconArrows={true}
          animation="slide"
          easing="ease"
          navNumbers={false}
          navShadow={false}
          navInvert={false}
          navRound={true}
          disableSwipe={false}
          duration={500}
          infinite={true}
          hideArrows={false}
          autoMax={0}
        >
          <_Builtin.SliderMask className={_utils.cx(_styles, "mask-7")}>
            <_Builtin.SliderSlide
              className={_utils.cx(_styles, "slide-5")}
              tag="div"
            >
              <_Builtin.BlockContainer
                className={_utils.cx(_styles, "benefitcontent-why_mobile")}
                grid={{
                  type: "container",
                }}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "why_icon")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/6824c2bf1a98e6ec572966de_check.png"
                />
                <_Builtin.Heading
                  className={_utils.cx(_styles, "why_headerr")}
                  tag="h1"
                >
                  {"Clear, Honest, &Transparent Guidance"}
                </_Builtin.Heading>
                <_Builtin.Paragraph className={_utils.cx(_styles, "why_des")}>
                  {
                    "No surprises, no hidden fees—just straightforward advice you can trust."
                  }
                </_Builtin.Paragraph>
              </_Builtin.BlockContainer>
            </_Builtin.SliderSlide>
            <_Builtin.SliderSlide tag="div">
              <_Builtin.BlockContainer
                className={_utils.cx(_styles, "benefitcontent-why_mobile")}
                grid={{
                  type: "container",
                }}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "why_icon")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/6824c2bf1a98e6ec572966de_check.png"
                />
                <_Builtin.Heading
                  className={_utils.cx(_styles, "why_headerr")}
                  tag="h1"
                >
                  {"Fast Approvals, CompetitiveRates"}
                </_Builtin.Heading>
                <_Builtin.Paragraph className={_utils.cx(_styles, "why_des")}>
                  {
                    "We streamline the process to get you approved quickly, with rates that work in your favour."
                  }
                </_Builtin.Paragraph>
              </_Builtin.BlockContainer>
            </_Builtin.SliderSlide>
            <_Builtin.SliderSlide tag="div">
              <_Builtin.BlockContainer
                className={_utils.cx(_styles, "benefitcontent-why_mobile")}
                grid={{
                  type: "container",
                }}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "why_icon")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/6824c2bf1a98e6ec572966de_check.png"
                />
                <_Builtin.Heading
                  className={_utils.cx(_styles, "why_headerr")}
                  tag="h1"
                >
                  {"Tailored Lending Solutions ForYou"}
                </_Builtin.Heading>
                <_Builtin.Paragraph className={_utils.cx(_styles, "why_des")}>
                  {
                    "Every mortgage is unique—so is our approach. We customize financing options to fit your specific needs."
                  }
                </_Builtin.Paragraph>
              </_Builtin.BlockContainer>
            </_Builtin.SliderSlide>
            <_Builtin.SliderSlide tag="div">
              <_Builtin.BlockContainer
                className={_utils.cx(_styles, "benefitcontent-why_mobile")}
                grid={{
                  type: "container",
                }}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "why_icon")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/6824c2bf1a98e6ec572966de_check.png"
                />
                <_Builtin.Heading
                  className={_utils.cx(_styles, "why_headerr")}
                  tag="h1"
                >
                  {"Industry Experts You can Rely on"}
                </_Builtin.Heading>
                <_Builtin.Paragraph className={_utils.cx(_styles, "why_des")}>
                  {
                    "Our seasoned mortgage advisors bring years of experience to guide you every step of the way."
                  }
                </_Builtin.Paragraph>
              </_Builtin.BlockContainer>
            </_Builtin.SliderSlide>
          </_Builtin.SliderMask>
          <_Builtin.SliderArrow
            className={_utils.cx(_styles, "left-arrow-3")}
            dir="left"
          >
            <_Builtin.Icon
              widget={{
                type: "icon",
                icon: "slider-left",
              }}
            />
          </_Builtin.SliderArrow>
          <_Builtin.SliderArrow
            className={_utils.cx(_styles, "right-arrow-3")}
            dir="right"
          >
            <_Builtin.Icon
              widget={{
                type: "icon",
                icon: "slider-right",
              }}
            />
          </_Builtin.SliderArrow>
          <_Builtin.SliderNav
            className={_utils.cx(_styles, "", "slide-nav-3")}
          />
        </_Builtin.SliderWrapper>
      </_Builtin.Section>
      <_Builtin.BlockContainer
        className={_utils.cx(_styles, "why_cont_serv")}
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Layout
          className={_utils.cx(_styles, "quick-stack-9")}
          id={_utils.cx(
            _styles,
            "w-node-_32a1b8c8-d8ca-9f48-7c6a-becc46d3de36-46d3de32"
          )}
        >
          <_Builtin.Cell
            id={_utils.cx(
              _styles,
              "w-node-_32a1b8c8-d8ca-9f48-7c6a-becc46d3de37-46d3de32"
            )}
          >
            <_Builtin.BlockContainer
              className={_utils.cx(_styles, "benefitcontent-why")}
              grid={{
                type: "container",
              }}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "why_icon")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/6824c2bf1a98e6ec572966de_check.png"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "why_headerr")}
                tag="h1"
              >
                {"Transparent Guidance, No Hidden Surprizes"}
              </_Builtin.Heading>
              <_Builtin.Paragraph className={_utils.cx(_styles, "why_des")}>
                {
                  "No surprises, no hidden fees—just straightforward advice you can trust. We're here to light your way."
                }
              </_Builtin.Paragraph>
            </_Builtin.BlockContainer>
          </_Builtin.Cell>
          <_Builtin.Cell
            id={_utils.cx(
              _styles,
              "w-node-_32a1b8c8-d8ca-9f48-7c6a-becc46d3de3e-46d3de32"
            )}
          >
            <_Builtin.BlockContainer
              className={_utils.cx(_styles, "benefitcontent-why")}
              grid={{
                type: "container",
              }}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "why_icon")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/6824c2bf1a98e6ec572966de_check.png"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "why_headerr")}
                tag="h1"
              >
                {"Fast Approvals, CompetitiveRates"}
              </_Builtin.Heading>
              <_Builtin.Paragraph className={_utils.cx(_styles, "why_des")}>
                {
                  "We streamline the process to get you approved quickly, with rates that work in your favour."
                }
              </_Builtin.Paragraph>
            </_Builtin.BlockContainer>
          </_Builtin.Cell>
          <_Builtin.Cell
            id={_utils.cx(
              _styles,
              "w-node-_32a1b8c8-d8ca-9f48-7c6a-becc46d3de45-46d3de32"
            )}
          >
            <_Builtin.BlockContainer
              className={_utils.cx(_styles, "benefitcontent-why")}
              grid={{
                type: "container",
              }}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "why_icon")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/6824c2bf1a98e6ec572966de_check.png"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "why_headerr")}
                tag="h1"
              >
                {"Tailored Lending Solutions ForYou"}
              </_Builtin.Heading>
              <_Builtin.Paragraph className={_utils.cx(_styles, "why_des")}>
                {
                  "Every mortgage is unique—so is our approach. We customize financing options to fit your specific needs."
                }
              </_Builtin.Paragraph>
            </_Builtin.BlockContainer>
          </_Builtin.Cell>
          <_Builtin.Cell
            id={_utils.cx(
              _styles,
              "w-node-_32a1b8c8-d8ca-9f48-7c6a-becc46d3de4c-46d3de32"
            )}
          >
            <_Builtin.BlockContainer
              className={_utils.cx(_styles, "benefitcontent-why")}
              grid={{
                type: "container",
              }}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "why_icon")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/6824c2bf1a98e6ec572966de_check.png"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "why_headerr")}
                tag="h1"
              >
                {"Advice You Can Rely On"}
              </_Builtin.Heading>
              <_Builtin.Paragraph className={_utils.cx(_styles, "why_des")}>
                {
                  "Our experienced mortgage advisors are here to chart your course to financial freedom."
                }
              </_Builtin.Paragraph>
            </_Builtin.BlockContainer>
          </_Builtin.Cell>
        </_Builtin.Layout>
      </_Builtin.BlockContainer>
      <_Builtin.Block
        className={_utils.cx(_styles, "why_sub_section")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "dark_subheading_center-copy")}
          tag="h1"
        >
          {
            "Lighthouse Lending Illuminates Your Financial Journey with Clarity, Confidence, and Care."
          }
        </_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-40")}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "yellow_buttom_slider")}
            button={true}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Meet Our Team& Learn About Our Mission"}
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-43")}
          tag="div"
        >
          <GlobalButton
            name={
              <>
                {"Meet Our Team "}
                <br />
                {"& Learn About Our Mission"}
              </>
            }
            link={{
              href: "#",
            }}
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
