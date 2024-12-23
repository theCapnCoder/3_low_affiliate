import * as React from "react";
import type { SVGProps } from "react";
const SvgPlay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path fill="url(#play_svg__a)" d="M0 0h20v20H0z" />
    <defs>
      <pattern
        id="play_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#play_svg__b" transform="translate(-.002)scale(.004)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="play_svg__b"
        width={251}
        height={250}
      />
    </defs>
  </svg>
);
export default SvgPlay;
