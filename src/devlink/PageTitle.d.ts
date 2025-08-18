import * as React from "react";
import * as Types from "./types";

declare function PageTitle(props: {
  as?: React.ElementType;
  backgroundImage?: Types.Asset.Image;
  pageTitle?: React.ReactNode;
}): React.JSX.Element;
