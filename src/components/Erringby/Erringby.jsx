import React from "react";
import { Box, Image, Paragraph, ResponsiveContext } from "grommet";

const Erringby = () => {
  const size = React.useContext(ResponsiveContext);
  return (
    <>
      <Box
        direction={size === "small" ? "column" : "row"}
        gap="medium"
        pad={{
          top: "medium",
          bottom: "small",
          horizontal: "medium",
        }}
        alignContent="center"
      >
        <Box
          round="small"
          width={size === "small" ? "" : "large"}
          background="--dark-purple"
        >
          <Image src="erringby.jpg" fit="contain" />
        </Box>
        <Box
          round="small"
          align="center"
          alignContent="left"
          basis="full"
          background="--misty-rose"
          pad="small"
        >
          <Paragraph>
            Kit is waiting expectantly for life to begin. Orphaned as a young
            child, he recoils from his adoptive parents’ mundane existence,
            drawn instead to the bohemian world of his Uncle Col and Col’s
            charismatic wife Marianne. Amid the permissive atmosphere of
            Erringby, Marianne’s rambling family mansion, Kit becomes
            increasingly obsessed with his aunt.
          </Paragraph>
          <Paragraph>
            One debauched summer, the eighteen-year-old Kit wakes to find
            himself in bed with Marianne. But what happened? And who is his
            sudden mysterious benefactor? As Kit grapples with the ramifications
            of that night, he, Marianne and Col find their lives spiralling out
            of control.
          </Paragraph>
          <Paragraph>
            Unfolding against the changing cultural landscape of the seventies,
            eighties and nineties,{" "}
            <span style={{ fontStyle: "italic" }}>Erringby</span> is a
            captivating coming-of-age novel with echoes of{" "}
            <span style={{ fontStyle: "italic" }}>Great Expectations</span>.
          </Paragraph>
        </Box>
      </Box>
      <Box
        direction={size === "small" ? "column" : "row"}
        gap="small"
        pad={{
          vertical: "small",
          horizontal: "medium",
        }}
      >
        <Box
          round="small"
          align="center"
          alignContent="left"
          width="large"
          background="--pewter-blue"
          pad="medium"
        >
          <Paragraph>
            ‘A novel that plays along fault lines of class, family and sexuality
            with a cool wit and a compelling, raunchy intelligence. Gill Darling
            is a writer with a tender touch and a wicked turn of phrase; a
            winning combination.’
          </Paragraph>
          <Paragraph>
            <span style={{ fontWeight: "600" }}>—Ross Raisin, author</span>
          </Paragraph>
        </Box>
        <Box
          round="small"
          align="center"
          alignContent="left"
          width="large"
          background="--rose-dust"
          pad="medium"
        >
          <Paragraph>
            An astonishingly accomplished first novel, a new voice telling a
            classic tale – richly imagined, cleverly adapted and thoroughly
            enjoyable.’
          </Paragraph>
          <Paragraph>
            <span style={{ fontWeight: "600" }}>
              —Ami Rao, author of David and Ameena
            </span>
          </Paragraph>
        </Box>
        <Box
          round="small"
          align="center"
          alignContent="left"
          width="large"
          background="--deep-space-sparkle"
          pad="medium"
        >
          <Paragraph>
            ‘Gill Darling’s exploration of the way in which the relentless march
            of time changes individuals in unforeseeable ways is profoundly
            moving. Erringby is a complex human drama played out over several
            decades that considers the complexity of a set of intriguing
            relationships, set against the backdrop of a grand country house
            that falls into decline. It is a beautifully written novel of
            exquisite poignancy.’
          </Paragraph>
          <Paragraph>
            <span style={{ fontWeight: "600" }}>
              —Anna South, consultant editor
            </span>
          </Paragraph>
        </Box>
      </Box>
    </>
  );
};

export default Erringby;
