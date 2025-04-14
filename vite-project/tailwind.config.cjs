const defaultTheme = require("tailwindcss/defaultTheme");
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["index.html", "./src/**/*.tsx", flowbite.content()],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            xxl: "1700px",
        },
        extend: {
            // https://tailwindcss.com/docs/font-family#customizing-the-default-font
            fontFamily: {
                visionRegular: ["VisionRegular", ...defaultTheme.fontFamily.sans],
                sans: ["VisionRegular", ...defaultTheme.fontFamily.sans],
                quicksand: ["Quicksand", ...defaultTheme.fontFamily.sans],
                roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
                courierPrime: ["Courier Prime", ...defaultTheme.fontFamily.mono],
            },
            minWidth: {
                "screen-xl-reduced": "1400px",
            },
            spacing: {
                "spacing-sm": "8px",
                "spacing-md": "16px",
                "spacing-lg": "24px",
                "spacing-xl": "64px",
            },
            colors: {
                primary: primaryColor(),
                "deep-aqua": deepAquaColor(),
                "dark-gray": darkGrayColor(),
                "light-gray": {
                    50: "#F8F8F8",
                },
                teal: deepAquaColor(),
                pink: pinkColor(),
                red: redColor(),
                blue: blueColor(),
                green: greenColor(),
                yellow: yellowColor(),
                orange: orangeColor(),
                indigo: indigoColor(),
                purple: purpleColor(),
            },
            "scroll-smooth": ["dark"],
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0, transform: "translateY(10px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                },
            },
            animation: {
                fadeIn: "fadeIn 0.5s ease-in-out forwards",
            },
        },
    },
    plugins: [flowbite.plugin()],
};

function primaryColor() {
    return {
        50: "#e0f1f1",
        100: "#b2dddc",
        200: "#81c8c6",
        300: "#50b2ae",
        400: "#2ea19c",
        500: "#17918a",
        600: "#15847d",
        700: "#13746c",
        800: "#13645d",
        900: "#104841",
    };
}

function darkGrayColor() {
    return {
        50: "#EFEFEF",
        100: "#D7D7D7",
        200: "#B9BEC0",
        300: "#99A5A9",
        400: "#819197",
        500: "#6A7F86",
        600: "#5E6F75",
        700: "#4E5B60",
        800: "#40484B",
        900: "#2F3334",
    };
}

function deepAquaColor() {
    return {
        50: "#E0F1F1",
        100: "#B2DDDC",
        200: "#81C8C6",
        300: "#50B2AE",
        400: "#2EA19C",
        500: "#17918A",
        600: "#15847D",
        700: "#13746C",
        800: "#13645D",
        900: "#104841",
    };
}

function blueColor() {
    return {
        50: "#ebf5ff",
        100: "#e1effe",
        200: "#c3ddfd",
        300: "#a4cafe",
        400: "#76a9fa",
        500: "#3f83f8",
        600: "#1c64f2",
        700: "#1a56db",
        800: "#1e429f",
        900: "#233876",
    };
}

function redColor() {
    return {
        50: "#fdebee",
        100: "#fbccd2",
        200: "#e9999a",
        300: "#dd7174",
        400: "#e75252",
        500: "#eb4139",
        600: "#dc3838",
        700: "#ca2f32",
        800: "#bd282b",
        900: "#ae1e20",
    };
}

function orangeColor() {
    return {
        50: "#fef2df",
        100: "#fcddb1",
        200: "#f9c77e",
        300: "#f7b14b",
        400: "#f6a025",
        500: "#f49000",
        600: "#f08500",
        700: "#ea7500",
        800: "#e46500",
        900: "#da4b01",
    };
}

function yellowColor() {
    return {
        50: "#fdfdea",
        100: "#fdf6b2",
        200: "#f4d85f",
        300: "#faca15",
        400: "#e3a008",
        500: "#c27803",
        600: "#9f580a",
        700: "#8e4b10",
        800: "#723b13",
        900: "#633112",
    };
}

function greenColor() {
    return {
        50: "#e0f2ed",
        100: "#b3dfd0",
        200: "#83cbb3",
        300: "#54b695",
        400: "#33a681",
        500: "#1a966e",
        600: "#168963",
        700: "#107954",
        800: "#066947",
        900: "#004d2d",
    };
}

function indigoColor() {
    return {
        50: "#f0f5ff",
        100: "#e5edff",
        200: "#cddbfe",
        300: "#b4c6fc",
        400: "#8da2fb",
        500: "#6875f5",
        600: "#5850ec",
        700: "#5145cd",
        800: "#42389d",
        900: "#362f78",
    };
}

function purpleColor() {
    return {
        50: "#f2e7fd",
        100: "#dcc4fa",
        200: "#c59cf7",
        300: "#ad71f5",
        400: "#994cf2",
        500: "#851eee",
        600: "#7a18e7",
        700: "#6a07df",
        800: "#5a00d9",
        900: "#4200cb",
    };
}

function pinkColor() {
    return {
        50: "#fdf2f8",
        100: "#fce8f3",
        200: "#fad1e8",
        300: "#f8b4d9",
        400: "#f17eb8",
        500: "#e74694",
        600: "#d61f69",
        700: "#bf125d",
        800: "#99154b",
        900: "#751a3d",
    };
}
