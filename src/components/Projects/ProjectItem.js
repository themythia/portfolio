import ItemInfo from './ItemInfo';
import ProjectLogos from './ProjectLogos';

const ProjectItem = ({ project }) => {
  return (
    <div className='flex flex-col w-full items-center justify-center h-auto bg-light100 dark:bg-dark800 rounded-lg shadow-md'>
      <ProjectLogos project={project} />
      <ItemInfo project={project} />
    </div>
  );
};
export default ProjectItem;
