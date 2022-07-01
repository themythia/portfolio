import { MdDarkMode, MdLightMode, MdMenu, MdClose } from 'react-icons/md';
import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from 'react-icons/fi';

const Icon = ({ icon, twClasses, size }) => {
  const icons = {
    dark: MdDarkMode,
    light: MdLightMode,
    menu: MdMenu,
    close: MdClose,
    github: FiGithub,
    linkedin: FiLinkedin,
    mail: FiMail,
    link: FiExternalLink,
  };

  const DynamicIcon = icons[icon];

  return <DynamicIcon className={twClasses} size={size} />;
};
export default Icon;
