import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { MdOutlineLibraryMusic } from 'react-icons/md'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './BandsStyles';

const Bands = () =>  (
  <Section id="bands">
    <SectionDivider divider />
    <SectionTitle>Bands</SectionTitle>
    <List>
      <ListItem>
        <picture>
          <MdOutlineLibraryMusic size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Tick Tick Boom</ListTitle>
          <ListParagraph>
            <a href="https://www.facebook.com/TickTickBoomAZ" target="_blank">Facebook</a><br />
            <a href="https://www.instagram.com/ticktickboomaz/" target="_blank">Instagram</a>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <MdOutlineLibraryMusic size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>The Psychedelephants</ListTitle>
          <ListParagraph>
            <a href="https://www.youtube.com/channel/UCMUrndb9ReXBQzl57irXFGQ" target="_blank">YouTube</a><br />
            <a href="https://open.spotify.com/artist/4rLjkwIFvXacegrunlfUly" target="_blank">Spotify</a><br />
            <a href="https://www.facebook.com/thepsychedelephants/" target="_blank">Facebook</a>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <MdOutlineLibraryMusic size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Pearlagram</ListTitle>
          <ListParagraph>
            <a href="https://www.facebook.com/pearlagram" target="_blank">Facebook</a>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <MdOutlineLibraryMusic size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>WailinCash</ListTitle>
          <ListParagraph>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <MdOutlineLibraryMusic size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Rockenheimer</ListTitle>
          <ListParagraph>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Bands;
