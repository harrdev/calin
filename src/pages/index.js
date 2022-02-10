import Acomplishments from '../components/Acomplishments/Acomplishments';
import Hero from '../components/Hero/Hero';
import Videos from '../components/Videos/Videos';
import Bands from '../components/Bands/Bands';
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
      </Section>
      <Videos />
      <Bands />
      <Timeline />
      <Acomplishments />
      <Contact />
    </Layout>
  );
};

export default Home;
