import ProjectItem from './ProjectItem';

const ProjectContainer = () => {
  return (
    <div className='flex flex-col sm:flex-wrap gap-y-4 sm:gap-x-6 sm:gap-y-6 max-w-full'>
      <ProjectItem project='f1ref' />
      <ProjectItem project='resonance' />
      <ProjectItem project='trello' />
    </div>
  );
};
export default ProjectContainer;
