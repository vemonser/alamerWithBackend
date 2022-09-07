import * as React from "react";

const SvgFacebook = ({ height, width, color }) => (
  <svg
    id="facebook_svg__Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 1000"
    width={width}
    height={height}
    color={color}
  >
    <defs>
      <clipPath id="facebook_svg__clippath">
        <path
          className="facebook_svg__cls-3"
          d="M-1712.53 489.38v321.86h74.71V489.38c0-124.57 101.34-225.91 225.9-225.91S-1186 364.82-1186 489.38v321.86h74.7V489.38c0-165.75-134.85-300.62-300.62-300.62s-300.61 134.86-300.61 300.62"
        />
      </clipPath>
      <clipPath id="facebook_svg__clippath-2">
        <path
          className="facebook_svg__cls-3"
          d="M-1712.53 489.38v321.86h74.71V489.38c0-124.57 101.34-225.91 225.9-225.91S-1186 364.82-1186 489.38v321.86h74.7V489.38c0-165.75-134.85-300.62-300.62-300.62s-300.61 134.86-300.61 300.62"
        />
      </clipPath>
      <clipPath id="facebook_svg__clippath-4">
        <path
          className="facebook_svg__cls-3"
          d="M-1968.59 489.38v321.86h74.7V489.38c0-124.57 101.35-225.91 225.91-225.91s225.92 101.35 225.92 225.91v321.86h74.7V489.38c0-165.75-134.86-300.62-300.62-300.62s-300.61 134.86-300.61 300.62"
        />
      </clipPath>
      <style>{".facebook_svg__cls-3{fill:none}"}</style>
    </defs>

    <path
      d="M522.19 668.54h-66.82v-168.2h-44.32v-63.41h44.16c0-8.3-.32-16.18.09-24.03.44-8.55.57-17.31 2.56-25.57 7.21-29.81 27.72-46.07 56.65-52.52 8.98-2 18.34-2.79 27.56-3.09 15.32-.49 30.67-.13 46.41-.13v63.33h-8.46c-12.31 0-24.63-.11-36.94.05-11.83.16-13.86 2.32-13.9 13.97-.03 9.08 0 18.16 0 27.86h59.77c-2.36 21.38-4.64 42.09-6.99 63.39h-59.77v168.37Z"
      style={{
        fill: color,
      }}
    />
  </svg>
);

export default SvgFacebook;
