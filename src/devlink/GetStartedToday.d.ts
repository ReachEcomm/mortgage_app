import * as React from "react";
import * as Types from "./types";

declare function GetStartedToday(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  description?: React.ReactNode;
  button1Text?: React.ReactNode;
  button1Link?: Types.Basic.Link;
  button2Text?: React.ReactNode;
  link?: Types.Basic.Link;
  button2Link?: Types.Basic.Link;
}): React.JSX.Element;
