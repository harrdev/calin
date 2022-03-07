import React from "react";
import { GridContainer } from "./VideosStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Videos = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Videos</SectionTitle>
    <GridContainer>
      <iframe
        width="360"
        height="203"
        src="https://www.youtube.com/embed/RKTeBlaxqIw"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="allowfullscreen"
      ></iframe>
      <iframe
        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FTickTickBoomAZ%2Fvideos%2F282804643840208%2F&width=360&show_text=false&height=203&appId"
        width="360"
        height="203"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
      <iframe
        width="360"
        height="203"
        src="https://www.youtube.com/embed/TbtVXTnbqrQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="allowfullscreen"
      ></iframe>
      <iframe
        width="360"
        height="203"
        src="https://www.youtube.com/embed/CnwzF5i4P20"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="allowfullscreen"
      ></iframe>
    </GridContainer>
  </Section>
);

export default Videos;
