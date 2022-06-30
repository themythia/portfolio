import Picture from './Picture';
import Socials from './Socials';
import Subtitle from './Subtitle';
import Title from './Title';

const Welcome = () => {
  return (
    <section
      id='home'
      className='w-full h-screen flex flex-col justify-center col-span-full sm:col-start-2 sm:col-end-8 md:col-start-3 md:col-end-11  py-28'
    >
      <Socials />
      <Title />
      <Subtitle />
      <Picture />
    </section>
  );
};
export default Welcome;
