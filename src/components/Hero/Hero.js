import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Wailin' Calin's House of Tone
      </SectionTitle>
      <a href="https://www.youtube.com">
        <Button>Visit my Youtube page</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;