import projectInfo from '../../utils/projectInfo';
import Icon from '../shared/Icon';

const Link = ({ link, icon }) => {
  return (
    <a
      href={link}
      className='w-10 h-10 flex justify-center items-center mr-4 last:mr-0 text-dark/60 dark:text-light/60 hover:text-dark hover:dark:text-light duration-200'
      target='_blank'
      rel='noreferrer'
    >
      <Icon icon={icon} size={28} />
    </a>
  );
};

const ItemInfo = ({ project }) => {
  return (
    <div className='h-auto w-full max-w-lg flex flex-col justify-center mt-4 bg-light100/60 dark:bg-dark800/60 rounded-lg mb-4 p-4 sm:p-8'>
      <div className='flex justify-between items-center mb-4'>
        <h3 className='font-josefinSans font-semibold text-xl sm:text-2xl text-left'>
          {projectInfo[project].title}
        </h3>
        <div className='flex items-center last:mr-0'>
          <Link link={projectInfo[project].github} icon='github' />
          <Link link={projectInfo[project].demo} icon='link' />
        </div>
      </div>
      <p className='md:text-lg'>{projectInfo[project].desc}</p>
      <p className='text-dark/80 dark:text-light/60 text-sm mt-4'>
        {projectInfo[project].stack}
      </p>
    </div>
  );
};
export default ItemInfo;
