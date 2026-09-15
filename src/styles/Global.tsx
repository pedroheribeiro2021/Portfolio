import { createTheme, globalCss, styled } from "@stitches/react";
import { ReactNode } from "react";

interface GlobalStyleProps {
  children: ReactNode;
  dark?: boolean;
}

const darkTheme = createTheme({
  colors: {
    brand1: "#65d6c8", brand2: "#2b8f87", grey0: "#f7f3ed", grey1: "#e9e3da",
    grey2: "#4b5563", grey3: "#1f2937", grey4: "#101827", grey5: "#182334",
    grey6: "#d1d5db", socialInstagram: "#CF50AC", socialFacebook: "#506CCF",
    socialLinkedin: "#0E76A8", whiteFixed: "#ffffff", mode: "#101827",
  },
});

export const Container = styled("div", {
  maxWidth: "$container",
  margin: "0 auto",
  padding: "0 1rem",

  "@tablet": {
    maxWidth: "$containerTablet",
  },
});

export const Flex = styled("div", {
  display: "flex",
  gap: "$1",
  alignItems: "center",
});

export const Box = styled("div", {
  maxWidth: "100%",
});

export const colors = {
  color: {
    brand1: {
      color: "$brand1",
    },
    brand2: {
      color: "$brand2",
    },
    brand3: {
      color: "$brand3",
    },
    brand5: {
      color: "$brand5",
    },
    brand7: {
      color: "$brand5",
    },
    grey1: {
      color: "$grey1",
    },

    grey2: {
      color: "$grey2",
    },

    grey3: {
      color: "$grey3",
    },

    grey4: {
      color: "$grey4",
    },

    grey5: {
      color: "$grey5",
    },
    grey6: {
      color: "$grey6",
    },
  },
};

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    fontFamily: "'Inter', sans-serif",
    boxSizing: "border-box",
  },
  html: {
    scrollBehavior: "smooth",
  },
  a: { textDecoration: "none" },
  "button:focus-visible, a:focus-visible, select:focus-visible": {
    outline: "3px solid $brand1",
    outlineOffset: "3px",
  },
});

export const GlobalStyle = ({ children, dark = false }: GlobalStyleProps): JSX.Element => {

  const theme = createTheme({
    colors: {
      // brand1: "#472da3",
      // brand2: "#311E75",

      brand1: "#134647",
      brand2: "#00272d",

      // grey0: "#0A0A0B",
      // grey1: "#121214",
      // grey2: "#868E96",
      // grey3: "#E9ECEF",
      // grey4: "#F8F9FA",
      // grey5: "#F8F9FA",

      grey0: "#0A0A0B",
      grey1: "#121214",
      grey2: "#868E96",
      grey3: "#E9ECEF",
      grey4: "#f7f3ed",
      grey5: "#f6f9fcc7",

      socialInstagram: "#CF50AC",
      socialFacebook: "#506CCF",
      socialLinkedin: "#0E76A8",

      whiteFixed: "#ffffff",
      mode: "#ffffff",
    },
    sizes: {
      container: "75rem",
      containerTablet: "40rem",
    },
    space: {
      1: "0.5rem",
      2: "1rem",
      3: "2rem",
      4: "3rem",
      5: "4rem",
      section: "10rem",
      sectionMobile: "4rem",
    },
    fonts: {
      titles: '"IBM Plex Sans", sans-serif;',
      texts: '"Inter", sans-serif',
    },
    fontSizes: {
      title1: "2.75rem",
      title2: "1.75rem",
      title3: "1.50rem",
      title4: "1.25rem",
      text1: "1rem",
      text2: "0.875rem",

      // Mobile
      title1Mobile: "$title2",
      title2Mobile: "$title3",
    },
    lineHeights: {
      title1: "3.8rem",
      title2: "2.75rem",
      title3: "2.5rem",
      title4: "1.25rem",
      text1: "1.75rem",
      text2: "1.75rem",

      // Mobile
      title1Mobile: "$title2",
      title2Mobile: "$title3",
    },

    radii: {
      1: "0.5rem",
      2: "0.25rem",
    },
  });

  globalStyles();

  const App = styled("div", {
    minHeight: "100vh",
  });

  return <App className={`${theme} ${dark ? darkTheme : ""}`}>{children}</App>;
};
