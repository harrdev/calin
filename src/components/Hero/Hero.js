import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Calin <br />
        Wailin' Calin
      </SectionTitle>
      <a href="https://youtube.com/channel/UCXSYyNAg_rwlpg1UVC0Fk0Q" target="_blank">
        <Button>Visit my YouTube page</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;