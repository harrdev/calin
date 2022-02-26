import React from 'react';
import { GridContainer } from './VideosStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const Videos = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Videos</SectionTitle>
    <GridContainer>
      <iframe width="360" height="215" src="https://www.youtube.com/embed/RKTeBlaxqIw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe>
      <iframe width="360" height="215" src="https://www.youtube.com/embed/hNwJzFN1dq0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe>
      <iframe width="360" height="215" src="https://www.youtube.com/embed/TbtVXTnbqrQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe>
      <iframe width="360" height="215" src="https://www.youtube.com/embed/CnwzF5i4P20" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe>
    </GridContainer>
  </Section>
);

export default Videos;