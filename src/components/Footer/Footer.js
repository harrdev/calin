import React from 'react';
import { AiFillInstagram, AiFillFacebook, AiFillYoutube } from 'react-icons/ai';
import { BsSpotify } from 'react-icons/bs'
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:480-434-8386">480-434-8386</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:wailincalin@yahoo.com">
            wailincalin@yahoo.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Turn it up to 11</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://youtube.com/channel/UCXSYyNAg_rwlpg1UVC0Fk0Q" target="_blank">
            <AiFillYoutube size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.facebook.com/wailincalin" target="_blank">
            <AiFillFacebook size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com/wailincalin/" target="_blank">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://open.spotify.com/artist/4rLjkwIFvXacegrunlfUly" target="_blank">
            <BsSpotify size="2.5rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
