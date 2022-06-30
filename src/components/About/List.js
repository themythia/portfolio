import useWindowSize from '../../hooks/useWindowSize';

const ListItem = ({ text }) => {
  const { width } = useWindowSize();
  return (
    <li className={`md:basis-1/3 ${width <= 350 ? 'basis-full' : 'basis-1/2'}`}>
      {text}
    </li>
  );
};
const List = () => {
  return (
    <ul className='bullet flex flex-row flex-wrap w-full ml-4'>
      <ListItem text={`JavaScript (ES6)`} />
      <ListItem text={`HTML & CSS`} />
      <ListItem text={`React`} />
      <ListItem text={`Redux`} />
      <ListItem text={`TailwindCSS`} />
      <ListItem text={`styled-components`} />
      <ListItem text={`SASS`} />
      <ListItem text={`Git`} />
      <ListItem text={`Figma`} />
    </ul>
  );
};
export default List;
