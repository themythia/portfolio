import { useState } from 'react';
import Overlay from './Overlay';
import ProjectLogos from './ProjectLogos';
import SwitchTransitionWrapper from '../Navbar/SwitchTransitionWrapper';

const ItemMobile = ({ project }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const component = {
    true: Overlay,
    false: ProjectLogos,
  };
  const Item = component[showOverlay];
  return (
    <>
      <div
        className='flex flex-col items-center justify-center h-[250px] w-full bg-light100 dark:bg-dark800 rounded-lg mb-4 shadow-md'
        onClick={() => setShowOverlay(true)}
      >
        <SwitchTransitionWrapper
          state={showOverlay}
          enter='animate__animated animate__fadeIn animate__faster'
          exit='animate__animated animate__fadeOut animate__faster'
          timeout={200}
        >
          <Item project={project} mobile={true} />
        </SwitchTransitionWrapper>
      </div>
    </>
  );
};
export default ItemMobile;
