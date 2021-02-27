import React, { useState } from "react";
import { Anchor, Avatar, Box, Grommet, Heading, Nav } from "grommet";
import { Facebook, Twitter } from "grommet-icons";
import AppBar from "./components/AppBar/AppBar";
import About from "./components/About/About";
import Erringby from "./components/Erringby/Erringby";

import "./App.css";

const theme = {
  global: {
    colors: {
      "--dark-purple": "#3e212bff",
      "--pewter-blue": "#92a5a9ff",
      "--deep-space-sparkle": "#405765ff",
      "--rose-dust": "#ac6b79ff",
      "--misty-rose": "#ffdedaff",
      light: "#ffdedaff",
      brand: "#92a5a9ff",
      "accent-1": "#cc6b79ff",
      "accent-2": "#ffeefaff",
      white: "ffdedaff",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
  anchor: {
    color: { dark: "accent-1", light: "accent-2" },
    hover: {
      color: "light",
      textDecoration: "none",
      fontWeight: 600,
    },
  },
};

function App() {
  const [view, setView] = useState("about");
  return (
    <Grommet theme={theme} full>
      <Box>
        <AppBar>
          <Box justify="start" direction="row" gap="medium" align="center">
            <Avatar
              justify="start"
              size="medium"
              src="GillDarling.jpg"
            ></Avatar>
            <Heading level="3" margin="none">
              Gill Darling
            </Heading>
          </Box>
          <Box justify="end" direction="row" gap="xsmall">
            <Nav direction="row" gap="small" align="center" alignContent="left">
              <Anchor onClick={() => setView("about")} label="About" />
              <Anchor onClick={() => setView("erringby")} label="Erringby" />
              <Anchor
                icon={<Twitter />}
                href="https://twitter.com/GillDarling2"
                target="_blank"
              />
              <Anchor
                icon={<Facebook size="medium" />}
                href="https://www.facebook.com/GillDarling2/"
                target="_blank"
              />
            </Nav>
          </Box>
        </AppBar>

        {view === "about" ? <About /> : null}
        {view === "erringby" ? <Erringby /> : null}
      </Box>
    </Grommet>
  );
}

export default App;
