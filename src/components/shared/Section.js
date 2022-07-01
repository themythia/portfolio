const Section = ({ children, extraStyle, id }) => {
  return (
    <section
      id={id}
      className={`w-full h-full flex flex-col justify-center col-span-full sm:col-start-2 sm:col-end-8 md:col-start-3 md:col-end-11 py-28 ${extraStyle}`}
    >
      {children}
    </section>
  );
};
export default Section;
