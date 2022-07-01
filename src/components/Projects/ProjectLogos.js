import { ReactComponent as F1RefLight } from '../../assets/f1ref_light.svg';
import { ReactComponent as F1RefDark } from '../../assets/f1ref_dark.svg';
import { ReactComponent as Resonance } from '../../assets/resonance.svg';
import { ReactComponent as TrelloLight } from '../../assets/trello_light.svg';
import { ReactComponent as TrelloDark } from '../../assets/trello_dark.svg';
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
    <div
      className={
        !mobile &&
        'w-full dark:bg-dark min-h-[160px] bg-light border-2 border-light100 dark:border-dark800 flex justify-center items-center py-8 rounded-t-lg'
      }
    >
      <DynamicLogo className={mobile && 'max-w-full px-4'} />
    </div>
  );
};
export default ProjectLogos;
