import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme(
  {
    fonts: {
      heading: "Assistant",
      body: "Nunito Sans",
    },
    colors: {
      background: "#E5E5E5",
      primary: {
        "50": "#FF8585",
        "100": "#FF7070",
        "200": "#FF4747",
        "300": "#FF1F1F",
        "400": "#F50000",
        "500": "#CC0000",
        "600": "#9E0000",
        "700": "#700000",
        "800": "#420000",
        "900": "#140000",
      },
      gray: {
        "50": "#E5E5E5",
        "100": "#B3B3B3",
        "200": "#8A8A8A",
        "300": "#767676",
        "400": "#616161",
        "500": "#4D4D4D",
        "600": "#363636",
        "700": "#1F1F1F",
        "800": "#080808",
        "900": "#000000",
        base: "#737373",
      },
    },
    styles: {
      global: (props) => ({
        body: {
          bg: mode("background", "gray.500")(props),
          color: mode("gray.500", "white")(props),
        },
      }),
    },
  },
  withDefaultColorScheme({
    components: ["Button"],
    colorScheme: "primary",
  })
);

export default theme;
