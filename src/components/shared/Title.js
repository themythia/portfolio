const Title = ({ text, id }) => {
  return (
    <h2
      id={id}
      className='font-josefinSans font-semibold underline decoration-accent decoration-4 underline-offset-4 text-[28px] sm:text-[32px] mb-8'
    >
      {text}
    </h2>
  );
};
export default Title;
