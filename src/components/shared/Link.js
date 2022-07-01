const Link = ({ link, type, children }) => {
  const classes = {
    social:
      'sm:mx-2 md:mx-3 hover:text-dark hover:dark:text-light duration-200',
    project:
      'w-10 h-10 flex justify-center items-center mr-4 last:mr-0 text-dark/60 dark:text-light/60 hover:text-dark hover:dark:text-light duration-200',
    contact:
      'flex items-baseline first:mr-4 text-dark/80 dark:text-light/80 hover:text-dark hover:dark:text-light duration-200 group',
  };
  return (
    <a href={link} className={classes[type]} target='_blank' rel='noreferrer'>
      {children}
    </a>
  );
};
export default Link;
