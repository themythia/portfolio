import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Paragraph from './About/Paragraph';
import Title from './About/Title';

const Link = ({ link, icon }) => {
  const icons = {
    github: FiGithub,
    linkedin: FiLinkedin,
    mail: FiMail,
  };
  const text =
    icon === 'github'
      ? 'GitHub'
      : icon === 'linkedin'
      ? 'LinkedIn'
      : icon === 'mail'
      ? 'al.emir@outlook.com'
      : null;
  const Icon = icons[icon];
  return (
    <a
      href={link}
      className='flex items-baseline first:mr-4 text-dark/80 dark:text-light/80 hover:text-dark hover:dark:text-light duration-200 group'
      target='_blank'
      rel='noreferrer'
    >
      <Icon className='mr-2 text-2xl sm:text-[32px]' />
      <span className='sm:text-lg group-hover:underline relative bottom-[4px]'>
        {text}
      </span>
    </a>
  );
};

const Contact = () => {
  return (
    <section className='w-full h-full flex flex-col justify-center col-span-full sm:col-start-2 sm:col-end-8 md:col-start-3 md:col-end-11 pt-28 pb-64'>
      <Title id='contact' text={`Let's get in touch`} />
      <Paragraph>{`Feel free to reach out if you’re looking for a developer, have a question or just want to connect.`}</Paragraph>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex mb-4'>
          <Link icon='github' link='https://github.com/themythia' />
          <Link icon='linkedin' link='https://linkedin.com/in/emiral' />
        </div>
        <Link icon='mail' link='mailto:al.emir@outlook.com' />
      </div>
    </section>
  );
};
export default Contact;
