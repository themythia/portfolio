import projectInfo from '../../utils/projectInfo';
import Icon from '../shared/Icon';
import Link from '../shared/Link';

const ItemInfo = ({ project }) => {
  return (
    <div className='h-auto w-full max-w-lg flex flex-col justify-center mt-4 bg-light100/60 dark:bg-dark800/60 rounded-lg mb-4 p-4 sm:p-8'>
      <div className='flex justify-between items-center mb-4'>
        <h3 className='font-josefinSans font-semibold text-xl sm:text-2xl text-left'>
          {projectInfo[project].title}
        </h3>
        <div className='flex items-center last:mr-0'>
          <Link type='project' link={projectInfo[project].github} icon='github'>
            <Icon icon='github' size={28} />
          </Link>
          <Link type='project' link={projectInfo[project].demo}>
            <Icon icon='link' size={28} />
          </Link>
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
