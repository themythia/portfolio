import { SwitchTransition, CSSTransition } from 'react-transition-group';

const SwitchTransitionWrapper = ({ state, children }) => {
  return (
    <SwitchTransition mode='out-in'>
      <CSSTransition
        key={state}
        classNames={{
          enterActive: 'animate__animated rotateInReversed animate__faster',
          exitActive: 'animate__animated animate__rotateOut animate__faster',
        }}
        timeout={500}
      >
        {children}
      </CSSTransition>
    </SwitchTransition>
  );
};
export default SwitchTransitionWrapper;
