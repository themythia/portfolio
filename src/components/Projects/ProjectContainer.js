import { useContext } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import ItemMobile from './ItemMobile';
import ProjectItem from './ProjectItem';

const ProjectContainer = () => {
  const { width } = useWindowSize();

  return (
    <div className='flex flex-col sm:flex-wrap'>
      {width < 600 && (
        <>
          <ItemMobile project='f1ref' />
          <ItemMobile project='resonance' />
          <ItemMobile project='trello' />
        </>
      )}
      {width >= 600 && (
        <>
          <ProjectItem project='f1ref' />
          <ProjectItem project='resonance' />
          <ProjectItem project='trello' />
        </>
      )}
    </div>
  );
};
export default ProjectContainer;
