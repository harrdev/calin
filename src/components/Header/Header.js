import Link from 'next/link';
import React from 'react';
import { AiFillInstagram, AiFillFacebook, AiFillYoutube } from 'react-icons/ai';
import { BsSpotify } from 'react-icons/bs'
import { FcMusic } from 'react-icons/fc'
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: "white", marginBottom: "20px" }}>
          <FcMusic size="5rem" /> <span>Wailin' Calin</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Videos</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#bands">
          <NavLink>Bands</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#hire">
          <NavLink>Hire</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
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
    </Div3>
  </Container>
);

export default Header;
