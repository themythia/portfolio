import Title from '../About/Title';
import ProjectContainer from './ProjectContainer';

const Projects = () => {
  return (
    <section
      id='projects'
      className='w-full h-full flex flex-col justify-center col-span-full sm:col-start-2 sm:col-end-8 md:col-start-3 md:col-end-11 mb-8'
    >
      <Title text='Featured Projects' />
      <ProjectContainer />
    </section>
  );
};
export default Projects;
