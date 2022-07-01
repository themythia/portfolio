import Title from '../shared/Title';
import List from './List';
import Paragraph from '../shared/Paragraph';
import Section from '../shared/Section';

const About = () => {
  return (
    <Section>
      <Title id='about' text='About Me' />
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
    </Section>
  );
};
export default About;
