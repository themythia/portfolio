import useWindowSize from '../../hooks/useWindowSize';
import ListItem from './ListItem';

const List = () => {
  const { width } = useWindowSize();
  const basis = width <= 350 ? 'basis-full' : 'basis-1/2';
  const technologies = [
    'JavaScript (ES6)',
    'HTML & CSS',
    'React',
    'Redux',
    'TailwindCSS',
    'styled-components',
    'SASS',
    'Git',
    'Figma',
  ];

  return (
    <ul className='bullet flex flex-row flex-wrap w-full ml-4'>
      {technologies.map((tech, index) => (
        <ListItem key={index} basis={basis} text={tech} />
      ))}
    </ul>
  );
};
export default List;
