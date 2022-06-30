import List from './List';
import Paragraph from './Paragraph';
import Title from './Title';

const About = () => {
  return (
    <section
      id='about'
      className='w-full h-full flex flex-col justify-center col-span-full sm:col-start-2 sm:col-end-8 md:col-start-3 md:col-end-11 mb-8'
    >
      <Title text='About Me' />
      <Paragraph>
        {`Hello! My name is Emir and I’m a 28 year old student at Anadolu
        University currently studying web design and programming.`}
      </Paragraph>
      <Paragraph>
        {`I’ve always been fascinated with development of websites and
        applications, so I decided to learn how to make them in 2018.`}
      </Paragraph>
      <Paragraph>
        {`Through my studies, I’ve gained a solid understanding of web development
        concepts and have dedicated a lot of my time to apply these concepts to
        real-world scenarios and applications.`}
      </Paragraph>
      <Paragraph>{`A few technologies I’ve been working with recently:`}</Paragraph>
      <List />
    </section>
  );
};
export default About;
