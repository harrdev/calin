import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./HireStyles";

const data = [
  { service: "Gig stand-in" },
  { service: "Guitar lessons" },
  { service: "Studio Rental" },
  { service: "Recording" },
];

const Hire = () => (
  <Section id="hire">
    <br />
    <SectionTitle>Hire Me</SectionTitle>
    <SectionText>Services offered - Contact me using form below</SectionText>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.service}`}</BoxNum>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Hire;
