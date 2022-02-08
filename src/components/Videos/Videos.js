import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './VideosStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { videos } from '../../constants/constants';

const Videos = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Videos</SectionTitle>
    <GridContainer>
      {videos.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <UtilityList>
              <ExternalLinks href={p.visit}>Link</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Videos;