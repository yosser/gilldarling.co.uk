import React from "react";
import { Box, Image, Paragraph, ResponsiveContext } from "grommet";

const About = () => {
  const size = React.useContext(ResponsiveContext);
  return (
    <Box
      direction={size === "small" ? "column" : "row"}
      gap="small"
      pad={{ top: "medium", horizontal: "medium", bottom: "200px" }}
      background="--misty-rose"
      fill="vertical"
    >
      <Box
        alignContent="start"
        round="small"
        direction="column"
        justify="start"
        height="medium"
        pad="medium"
      >
        <Image src="GillDarling.jpg" fit="contain" />
      </Box>
      <Box
        round="small"
        align="center"
        alignContent="left"
        basis="full"
        background="--misty-rose"
        pad="medium"
      >
        <Paragraph>
          Gill Darling is the author of{" "}
          <span style={{ fontStyle: "italic" }}>Erringby</span>, to be published
          by Fairlight Books in June 2021.
        </Paragraph>
        <Paragraph>
          Gill grew up in Hinckley, Leicestershire, and graduated from the
          University of York with a degree in Economics and Statistics. She
          currently lives in Manchester where she works as a chartered
          accountant in the social housing and charity sectors. In 2015 she was
          selected as a fiction mentee in the Jerwood-Arvon mentoring scheme and
          was published in their anthology, Whisper the Wrong Name.{" "}
          <span style={{ fontStyle: "italic" }}>Erringby</span> is her first
          published novel.
        </Paragraph>
      </Box>
    </Box>
  );
};

export default About;
