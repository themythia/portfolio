import { ReactComponent as F1RefLight } from './assets/f1ref_light.svg';
import { ReactComponent as F1RefDark } from './assets/f1ref_dark.svg';
import { ReactComponent as Resonance } from './assets/resonance.svg';
import { ReactComponent as TrelloLight } from './assets/trello_light.svg';
import { ReactComponent as TrelloDark } from './assets/trello_dark.svg';
import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';

const ProjectLogos = ({ project, mobile }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const logos = {
    dark: {
      f1ref: F1RefDark,
      trello: TrelloDark,
      resonance: Resonance,
    },
    light: { f1ref: F1RefLight, trello: TrelloLight, resonance: Resonance },
  };

  const DynamicLogo = logos[theme][project];
  return (
    <DynamicLogo className={!mobile && 'mt-8 bg-light100 dark:bg-dark800'} />
  );
};
export default ProjectLogos;
