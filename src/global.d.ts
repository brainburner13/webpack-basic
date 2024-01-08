declare module "*.module.scss" {
  interface ClassNames {
    [className: string]: string;
  }

  const classNames: ClassNames;

  export = classNames;
}

declare module "*.svg" {
  import { SVGProps, VFC } from "react";
  const SVG: VFC<SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module "*.png";

declare const __PLATFORM__: "mobile" | "desctop";
