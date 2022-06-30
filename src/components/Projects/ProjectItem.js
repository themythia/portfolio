import { useState } from 'react';
import Overlay from './Overlay';
import ProjectLogos from './ProjectLogos';
import SwitchTransitionWrapper from '../Navbar/SwitchTransitionWrapper';

const ProjectItem = ({ project }) => {
  return (
    <div className='flex flex-col items-center justify-center h-auto w-full bg-light100 dark:bg-dark800 rounded-lg mb-4 shadow-md'>
      <ProjectLogos project={project} />
      <Overlay project={project} />
    </div>
  );
};
export default ProjectItem;
