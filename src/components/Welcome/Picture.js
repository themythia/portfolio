const Picture = () => {
  return (
    <div className='w-full flex justify-center mt-24 animate__animated delayedFadeIn'>
      <img
        className='w-1/2 max-w-[250px] shadow-md rounded-full border-2 border-light/60 dark:border-dark/60'
        src='/assets/pic.png'
        alt=''
      />
    </div>
  );
};
export default Picture;
