import * as React from "react";
import type { SVGProps } from "react";
const SvgTwitter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path fill="url(#twitter_svg__a)" d="M0 0h40v40H0z" />
    <defs>
      <pattern
        id="twitter_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#twitter_svg__b" transform="scale(.00398)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="twitter_svg__b"
        width={251}
        height={251}
      />
    </defs>
  </svg>
);
export default SvgTwitter;