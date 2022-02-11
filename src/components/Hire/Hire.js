import React from 'react';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './HireStyles';

const data = [
  { service: "Fill in guitarist for gigs", text: 'Lead, Rhythm, Lap Guitar'},
  { service: "Guitar lessons", text: '', },
  { service: "Studio Rental", text: 'In house studio complete with recording gear and drum kit'}
];

const Hire = () => (
  <Section id="hire">
    <SectionTitle>Hire Me</SectionTitle>
    <SectionText>
    Services offered - Contact me using form below
    </SectionText>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.service}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Hire;
