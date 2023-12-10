module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["emerald", "synthwave"],
    darkTheme: "synthwave", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root",
  },
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            ul: {
              listStyleType: "disc",
              listStylePosition: "inside",
            },
            "ul > li": { paddingLeft: 0 },
            "ul > li::before": {
              content: "",
            },
            ol: {
              listStylePosition: "inside",
            },
            "ol > li": { paddingLeft: 0 },
            "ol > li::before": {
              content: "",
            },
          },
        },
      },
      colors: {
        carbon: "#E4E9EF",
        "ghost-white": "FBFAF6",
        "black-1": "#171822",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
      },
      borderRadius: {
        5: "5px",
        10: "10px",
      },
      boxShadow: {
        // SUNRISE V2
        100: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        200: "0px 0px 15px rgba(0, 0, 0, 0.12)",
      },
      keyframes: {
        slideup: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOuterRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        fadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, -100%, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "50%": {
            opacity: "0.5",
          },
          "100%": {
            opacity: "1",
          },
        },
        fadeInLong: {
          "0%": {
            opacity: "0",
          },
          "25%": {
            opacity: "0.25",
          },
          "50%": {
            opacity: "0.5",
          },
          "75%": {
            opacity: "0.75",
          },
          "100%": {
            opacity: "1",
          },
        },
        starAnimation: {
          "0%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "40%": {
            transform: "scale(.75)",
            opacity: "0.5",
          },
          "70%": {
            transform: "scale(1.5)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        zoomIn: {
          "0%": {
            transform: "scale(0)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        customParallaxY: {
          "0%": {
            transform: "translateY(var(--distanceY))",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        customParallaxX: {
          "0%": {
            transform: "translateX(var(--distanceX))",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        slideup: "slideup 500ms cubic-bezier(0.22, 0.61, 0.36, 1)",
        slideRight: "slideRight 500ms cubic-bezier(0.22, 0.61, 0.36, 1)",
        slideLeft: "slideLeft 300ms cubic-bezier(0.22, 0.61, 0.36, 1)",
        slideOuterRight:
          "slideOuterRight 500ms cubic-bezier(0.22,  0.36, 0.61, 1)",
        fadeInDown: "fadeInDown 500ms cubic-bezier(0.22, 0.61, 0.36, 1)",
        fadeInShort: "fadeIn 600ms cubic-bezier(0.22, 0.61, 0.36, 1)",
        fadeIn: "fadeIn 1500ms cubic-bezier(0.22, 0.61, 0.36, 1)",
        fadeInLong: "fadeInLong 1500ms cubic-bezier(0.22, 0.61, 0.36, 1)",
        starAnimation: "starAnimation 0.6s cubic-bezier(.785, .135, .15, .86)",
        customParallaxY: "customParallaxY linear",
        customParallaxX: "customParallaxX linear",
      },
    },
  },
};
