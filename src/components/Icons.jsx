import * as React from "react";

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const TwitterIcon = ({ className }) => (
  <>
    {/* <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 209"
      {...rest}
      className={`w-full h-auto ${className}`}
    >
      <path fill="none" d="M0 0h256v209H0z" />
      <path
        fill="#55acee"
        d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
      />
    </svg> */}
    {/* <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 50 50"
      className={`w-full h-auto ${className}`}
    >
      <path d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z"></path>
    </svg> */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 24 24"
      className={`w-full h-auto fill-dark  dark:fill-light`}
    >
      <g opacity=".3">
        <polygon
          fill="#fff"
          fill-rule="evenodd"
          points="16.002,19 6.208,5 8.255,5 18.035,19"
          clip-rule="evenodd"
        ></polygon>
        <polygon points="8.776,4 4.288,4 15.481,20 19.953,20 8.776,4"></polygon>
      </g>
      <polygon
        fill-rule="evenodd"
        points="10.13,12.36 11.32,14.04 5.38,21 2.74,21"
        clip-rule="evenodd"
      ></polygon>
      <polygon
        fill-rule="evenodd"
        points="20.74,3 13.78,11.16 12.6,9.47 18.14,3"
        clip-rule="evenodd"
      ></polygon>
      <path d="M8.255,5l9.779,14h-2.032L6.208,5H8.255 M9.298,3h-6.93l12.593,18h6.91L9.298,3L9.298,3z"></path>
    </svg>
  </>
);

// #0A66C2

export const LinkedInIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const CircularText = ({ className }) => (
  <>
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="496"
      height="496"
      viewBox="0 0 300.000000 300.000000"
      preserveAspectRatio="xMidYMid meet"
      className={`w-full h-auto ${className}`}
    >
      <g
        transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
        className="fill-dark  dark:fill-light"
      >
        <path
          d="M1607 2487 c3 -67 6 -123 7 -124 1 -1 13 -4 28 -8 25 -7 31 -2 70 59
23 36 45 66 50 66 4 0 8 -36 8 -79 0 -80 5 -91 44 -91 7 0 43 45 79 100 l67
100 -27 6 c-15 4 -28 3 -30 -2 -2 -5 -22 -38 -46 -74 l-42 -65 -3 85 c-3 84
-9 100 -42 100 -9 0 -35 -32 -59 -70 -24 -39 -46 -69 -47 -67 -2 1 -4 40 -6
87 -3 82 -4 84 -30 91 l-28 7 7 -121z"
        />
        <path
          d="M1225 2500 c-11 -12 -21 -16 -25 -11 -3 6 -16 8 -28 4 -16 -4 -21
-11 -17 -22 4 -9 16 -48 27 -87 19 -65 23 -70 45 -66 27 5 27 2 6 68 -17 56
-9 84 24 84 10 0 13 6 9 16 -3 9 -6 20 -6 25 0 15 -16 10 -35 -11z"
        />
        <path
          d="M999 2411 c-37 -37 -38 -79 -3 -120 34 -41 88 -43 133 -5 17 14 31
30 31 35 0 20 -29 20 -49 0 -22 -22 -65 -28 -76 -11 -3 5 21 22 54 37 33 16
61 32 61 36 0 4 -11 19 -25 32 -35 36 -88 34 -126 -4z m94 -18 c4 -3 -12 -17
-34 -30 -48 -27 -57 -24 -41 12 8 18 19 25 40 25 16 0 32 -3 35 -7z"
        />
        <path
          d="M1400 2405 c-10 -12 -10 -18 0 -30 20 -25 55 -15 55 15 0 30 -35 40
-55 15z"
        />
        <path
          d="M1957 2379 c-26 -15 -48 -65 -41 -93 8 -34 54 -74 92 -82 27 -6 32
-4 32 14 0 14 -9 21 -30 26 -19 3 -34 15 -42 31 -18 39 -4 40 55 2 62 -40 77
-36 77 24 0 69 -82 114 -143 78z m91 -42 c12 -9 17 -47 6 -47 -5 0 -54 32 -74
47 -2 2 2 8 9 13 15 9 37 4 59 -13z"
        />
        <path
          d="M2137 2254 c-75 -72 -87 -87 -76 -100 7 -8 18 -13 26 -10 8 3 13 -2
13 -13 0 -21 36 -56 67 -65 32 -10 81 19 100 59 16 33 16 37 0 70 -10 21 -26
37 -42 41 -14 3 -25 8 -25 10 0 2 14 17 31 32 29 26 30 28 12 44 -17 15 -23
12 -106 -68z m81 -56 c7 -7 12 -20 12 -30 0 -21 -34 -58 -54 -58 -20 0 -46 28
-46 50 0 40 60 66 88 38z"
        />
        <path
          d="M836 2309 c-14 -11 -26 -27 -26 -34 0 -8 -6 -12 -13 -9 -8 3 -19 -2
-26 -10 -11 -13 -1 -30 60 -105 41 -50 79 -90 85 -90 6 -1 17 6 24 14 11 13 9
20 -14 44 l-27 29 30 10 c35 12 65 63 55 95 -20 69 -95 97 -148 56z m81 -41
c30 -28 29 -53 -2 -74 -23 -15 -27 -15 -50 0 -29 19 -32 51 -8 78 21 23 32 23
60 -4z"
        />
        <path
          d="M674 2136 c-43 -43 -47 -94 -9 -131 49 -50 143 -20 161 52 13 52 -39
113 -97 113 -11 0 -36 -15 -55 -34z m94 -28 c21 -21 15 -67 -12 -79 -45 -21
-90 26 -66 71 12 23 58 28 78 8z"
        />
        <path
          d="M2261 2071 c-11 -7 -10 -15 8 -45 22 -35 44 -46 55 -27 6 9 -33 80
-44 80 -3 1 -11 -3 -19 -8z"
        />
        <path
          d="M513 2022 c-3 -9 -8 -20 -10 -24 -2 -3 45 -32 104 -63 99 -51 109
-54 120 -38 7 9 13 19 13 22 0 3 -50 32 -111 63 -94 48 -111 54 -116 40z"
        />
        <path
          d="M2354 1967 l-100 -42 24 -60 c28 -71 53 -101 99 -116 28 -9 40 -7 77
10 45 22 66 54 66 100 0 31 -43 144 -56 147 -5 1 -54 -17 -110 -39z m116 -70
c10 -32 9 -42 -5 -63 -38 -58 -101 -50 -135 17 -12 22 -20 42 -18 43 19 13
135 52 139 47 4 -3 12 -23 19 -44z"
        />
        <path
          d="M550 1887 c-55 -28 -66 -103 -21 -148 50 -50 118 -33 147 37 16 38
17 54 6 72 -14 22 -43 3 -36 -24 4 -17 -1 -30 -21 -50 -14 -14 -29 -24 -31
-21 -3 3 4 33 17 67 19 52 20 63 8 71 -19 12 -40 11 -69 -4z m29 -76 c-13 -45
-32 -50 -37 -9 -2 18 4 31 19 42 30 21 33 16 18 -33z"
        />
        <path
          d="M467 1694 c-4 -22 2 -28 57 -56 68 -34 69 -32 -31 -58 -36 -9 -43
-15 -43 -36 0 -21 3 -24 21 -19 12 4 50 15 85 25 79 23 84 26 84 54 0 15 -10
27 -32 39 -18 8 -56 29 -84 46 l-52 30 -5 -25z"
        />
        <path
          d="M2375 1695 c-31 -30 -35 -101 -7 -135 16 -20 19 -21 31 -6 11 13 11
20 3 28 -17 17 -15 63 2 77 12 10 16 4 21 -36 12 -94 12 -93 45 -81 63 22 80
93 34 147 -34 41 -92 44 -129 6z m115 -65 c0 -33 -18 -49 -31 -29 -5 8 -9 29
-9 47 0 30 2 32 20 22 13 -7 20 -21 20 -40z"
        />
        <path
          d="M2450 1497 c-47 -17 -85 -31 -86 -31 -1 -1 -4 -12 -7 -26 -5 -23 1
-29 84 -72 l89 -48 0 28 c-1 23 -9 31 -63 56 l-62 28 68 21 c62 19 67 22 67
48 0 16 -1 28 -2 28 -2 -1 -41 -15 -88 -32z"
        />
        <path
          d="M483 1476 c-37 -32 -39 -93 -4 -130 34 -36 98 -36 132 0 30 32 34
104 7 131 -27 26 -45 4 -29 -36 10 -22 10 -34 1 -50 -18 -35 -27 -24 -35 44
-8 74 -23 83 -72 41z m49 -68 c6 -50 6 -50 -16 -42 -22 8 -31 50 -16 69 20 24
28 18 32 -27z"
        />
        <path
          d="M2380 1323 c-43 -16 -79 -89 -64 -127 11 -29 38 -14 40 22 2 35 19
62 40 62 17 0 18 4 -5 -65 -11 -33 -17 -63 -15 -67 12 -19 66 -7 95 21 37 37
39 88 7 125 -23 26 -70 40 -98 29z m78 -91 c2 -23 -2 -33 -18 -42 -12 -6 -23
-10 -25 -8 -2 2 2 22 8 46 13 48 31 50 35 4z"
        />
        <path
          d="M504 1271 c-20 -12 -37 -34 -44 -56 -10 -32 -9 -46 11 -108 12 -40
24 -74 25 -76 2 -3 210 67 221 74 10 6 -54 135 -78 158 -36 33 -89 36 -135 8z
m107 -41 c20 -11 53 -79 44 -89 -15 -14 -131 -49 -139 -41 -4 4 -11 28 -13 53
-4 37 -2 48 18 66 25 23 59 27 90 11z"
        />
        <path
          d="M2274 1128 c-4 -14 -2 -24 5 -26 6 -2 56 -26 110 -52 l99 -48 11 24
c9 21 8 26 -12 33 -12 5 -60 27 -106 50 -46 22 -88 41 -92 41 -4 0 -11 -10
-15 -22z"
        />
        <path
          d="M651 1036 c-9 -11 -7 -22 10 -50 23 -39 29 -42 46 -25 8 8 6 20 -9
45 -25 42 -33 47 -47 30z"
        />
        <path
          d="M2215 1020 c-41 -43 -40 -93 3 -131 35 -31 60 -36 95 -18 36 19 57
52 57 92 0 83 -96 119 -155 57z m96 -29 c20 -16 22 -23 14 -47 -12 -35 -48
-43 -76 -18 -23 21 -24 47 -3 68 20 21 37 20 65 -3z"
        />
        <path
          d="M2077 953 c-16 -16 -15 -19 15 -50 29 -30 30 -33 11 -33 -24 0 -73
-53 -73 -79 0 -32 44 -85 78 -95 27 -7 38 -6 60 11 15 11 32 29 37 40 6 11 15
18 21 16 6 -2 17 3 23 11 11 13 0 30 -70 106 -45 49 -83 90 -84 90 0 0 -8 -8
-18 -17z m85 -130 c33 -30 17 -83 -26 -83 -25 0 -56 28 -56 51 0 22 26 49 47
49 9 0 25 -7 35 -17z"
        />
        <path
          d="M718 937 c-14 -13 -29 -34 -33 -46 -10 -33 14 -82 48 -96 l29 -12
-31 -26 c-35 -29 -38 -39 -16 -57 12 -10 30 2 105 70 71 66 88 86 79 96 -6 8
-18 14 -25 14 -8 0 -14 8 -14 18 0 10 -10 28 -23 40 -32 30 -86 29 -119 -1z
m94 -34 c26 -23 23 -59 -7 -79 -23 -15 -27 -15 -50 0 -31 20 -32 49 -3 76 26
24 36 25 60 3z"
        />
        <path
          d="M920 800 c0 -13 7 -20 19 -20 19 0 61 -43 61 -61 0 -17 -20 -9 -71
27 -56 41 -66 38 -75 -18 -11 -66 70 -122 133 -91 72 34 67 130 -8 169 -39 20
-59 18 -59 -6z m16 -91 c47 -29 44 -46 -6 -39 -18 2 -40 28 -40 47 0 18 7 16
46 -8z"
        />
        <path
          d="M1910 744 c-27 -18 -50 -44 -50 -55 0 -18 36 -12 57 9 23 23 63 27
70 7 1 -5 -20 -21 -48 -35 -60 -29 -63 -33 -50 -59 29 -53 125 -41 156 19 42
82 -57 166 -135 114z m82 -116 c-13 -14 -26 -18 -41 -13 -29 9 -26 17 17 42
31 18 38 19 40 6 2 -9 -5 -24 -16 -35z"
        />
        <path
          d="M1065 618 c-82 -112 -85 -118 -51 -118 21 0 35 13 73 72 l48 71 3
-89 c3 -85 9 -103 38 -104 7 0 34 32 60 71 l49 71 3 -88 c3 -86 9 -103 40
-104 9 0 12 31 12 120 0 120 0 121 -26 130 -14 6 -27 10 -29 10 -1 0 -25 -32
-51 -71 l-49 -71 -5 87 c-4 79 -7 89 -27 96 -19 7 -30 -3 -88 -83z"
        />
        <path
          d="M1794 690 c-21 -8 -21 -9 -4 -61 19 -56 13 -89 -16 -89 -11 0 -14 -6
-8 -22 10 -33 12 -34 37 -11 12 11 28 18 35 16 7 -3 19 -3 26 0 11 5 9 22 -14
87 -16 45 -30 83 -32 85 -1 1 -13 -1 -24 -5z"
        />
        <path
          d="M1580 635 c-19 -23 -8 -50 20 -50 18 0 26 6 28 22 4 29 -30 49 -48
28z"
        />
      </g>
    </svg>
  </>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);
