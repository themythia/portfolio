const ListItem = ({ id, text, mobile }) => {
  return (
    <li
      className={
        mobile
          ? 'mb-2'
          : 'mx-2 md:mx-3 hover:text-dark hover:dark:text-light duration-200 hover:underline decoration-4 decoration-accent underline-offset-[16px]'
      }
    >
      <a href={id}>{text}</a>
    </li>
  );
};
export default ListItem;
