import { SwitchTransition, CSSTransition } from 'react-transition-group';

const SwitchTransitionWrapper = ({ state, children, enter, exit, timeout }) => {
  return (
    <SwitchTransition mode='out-in'>
      <CSSTransition
        key={state}
        classNames={{
          enterActive: enter,
          exitActive: exit,
        }}
        timeout={timeout}
      >
        {children}
      </CSSTransition>
    </SwitchTransition>
  );
};
export default SwitchTransitionWrapper;
