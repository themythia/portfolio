const ListItem = ({ text, basis }) => {
  return <li className={`md:basis-1/3 ${basis}`}>{text}</li>;
};

export default ListItem;
