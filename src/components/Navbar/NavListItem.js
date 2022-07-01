const NavListitem = ({ id, text, mobile, setShowMenu }) => {
  const closeMenu = () => {
    // on bigger screens setShowMenu not passed,
    // this check is to not get an error due to it
    if (setShowMenu) setShowMenu(false);
  };
  return (
    <li
      className={
        mobile
          ? 'mb-2'
          : 'mx-2 md:mx-3 hover:text-dark hover:dark:text-light duration-200 hover:underline decoration-4 decoration-accent underline-offset-[16px]'
      }
    >
      <a href={id} onClick={closeMenu}>
        {text}
      </a>
    </li>
  );
};
export default NavListitem;
