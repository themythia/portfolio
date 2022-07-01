import Section from '../shared/Section';
import Picture from './Picture';
import Socials from './Socials';
import Subtitle from './Subtitle';
import Title from './Title';

const Welcome = () => {
  return (
    <Section id='home'>
      <Socials />
      <Title />
      <Subtitle />
      <Picture />
    </Section>
  );
};
export default Welcome;
