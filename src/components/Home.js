import About from './About/About';
import Contact from './Contact';
import Projects from './Projects/Projects';
import Welcome from './Welcome/Welcome';

const Home = () => {
  return (
    <main className='px-4 md:px-6 lg:px-[200px] xl:px-[calc((100vw-1128px)/2)] grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-x-4 md:gap-x-6'>
      <Welcome />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};
export default Home;
