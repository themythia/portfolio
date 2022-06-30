const ListItem = ({ text }) => (
  <li className='basis-1/2 md:basis-1/3'>{text}</li>
);
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
