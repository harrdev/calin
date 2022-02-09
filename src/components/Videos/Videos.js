import React from 'react';
import { GridContainer } from './VideosStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const Videos = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Videos</SectionTitle>
    <GridContainer>
      <iframe width="360" height="215" src="https://www.youtube.com/embed/0FMfsT11pdA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullsreen"></iframe>
      <iframe width="360" height="215" src="https://www.youtube.com/embed/76m2kmsAxhA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
      <iframe width="360" height="215" src="https://www.youtube.com/embed/2f1Ny74_ou0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
      <iframe width="360" height="215" src="https://www.youtube.com/embed/aM443dNIxGo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
    </GridContainer>
  </Section>
);

export default Videos;