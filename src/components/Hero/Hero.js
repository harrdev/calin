import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Wailin' Calin's Page
      </SectionTitle>
      <a href="https://youtube.com/channel/UCXSYyNAg_rwlpg1UVC0Fk0Q" target="_blank">
        <Button>Visit my Youtube page</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;