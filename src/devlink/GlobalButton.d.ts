import * as React from "react";
import * as Types from "./types";

declare function GlobalButton(props: {
  as?: React.ElementType;
  link?: Types.Basic.Link;
  name?: React.ReactNode;
}): React.JSX.Element;
