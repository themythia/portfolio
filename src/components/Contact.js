import Icon from './shared/Icon';
import Link from './shared/Link';
import Paragraph from './shared/Paragraph';
import Section from './shared/Section';
import Title from './shared/Title';

const Contact = () => {
  return (
    <Section extraStyle='pb-64'>
      <Title id='contact' text={`Let's get in touch`} />
      <Paragraph>{`Feel free to reach out if you’re looking for a developer, have a question or just want to connect.`}</Paragraph>
      <div className='flex flex-col justify-center items-center mt-8'>
        <div className='flex mb-4'>
          <Link link='https://github.com/themythia' type='contact'>
            <Icon icon='github' twClasses='mr-2 text-2xl sm:text-[32px]' />
            <span className='sm:text-lg group-hover:underline relative bottom-[4px]'>
              GitHub
            </span>
          </Link>
          <Link link='https://linkedin.com/in/emiral' type='contact'>
            <Icon icon='linkedin' twClasses='mr-2 text-2xl sm:text-[32px]' />
            <span className='sm:text-lg group-hover:underline relative bottom-[4px]'>
              LinkedIn
            </span>
          </Link>
        </div>
        <Link link='mailto:al.emir@outlook.com' type='contact'>
          <Icon icon='mail' twClasses='mr-2 text-2xl sm:text-[32px]' />
          <span className='sm:text-lg group-hover:underline relative bottom-[4px]'>
            al.emir@outlook.com
          </span>
        </Link>
      </div>
    </Section>
  );
};
export default Contact;
