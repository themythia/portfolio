import useWindowSize from '../../hooks/useWindowSize';

const Title = () => {
  const { width } = useWindowSize();

  return (
    <div className='flex items-baseline mt-12 sm:mt-16 animate__animated animate__fadeIn'>
      {width > 360 && (
        <img
          src='/assets/hi.gif'
          alt='Hand wave GIF'
          className='w-8 h-8 mr-4 sm:w-10 sm:h-10'
        />
      )}
      <h1 className='font-josefinSans text-3xl sm:text-5xl'>
        Hi there, I'm <span className='text-accent'>Emir Al</span>.
      </h1>
    </div>
  );
};
export default Title;
