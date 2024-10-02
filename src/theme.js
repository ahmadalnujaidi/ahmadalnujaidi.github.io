import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark", // Default to dark mode
  useSystemColorMode: false, // Ignore system preferences
};

const styles = {
  global: (props) => ({
    body: {
      bg: props.colorMode === "dark" ? "#1A202C" : "white", // Background color for dark/light
      color: props.colorMode === "dark" ? "gray.200" : "gray.800", // Text color for dark/light
    },
  }),
};

const colors = {
  brand: {
    50: "#f5f7ff",
    100: "#d4d9f2",
    200: "#b3bcdd",
    300: "#909ec8",
    400: "#6c80b3",
    500: "#4a629a",
    600: "#374a78",
    700: "#243256",
    800: "#111a34",
    900: "#000214", // Dark background accent color
  },
};

const theme = extendTheme({ config, styles, colors });

export default theme;
