import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Videos from '../components/Videos/Videos';
import Skills from '../components/Skills/Skills';
import Timeline from '../components/TimeLine/TimeLine';
import Contact from '../components/Contact/Contact';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import 'semantic-ui-css/semantic.min.css'
const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Videos />
      <Skills />
      <Timeline />
      <Acomplishments />
      <Contact />
    </Layout>
  );
};

export default Home;
