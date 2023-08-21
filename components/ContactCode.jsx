import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'kartikdevarde.me',
    href: 'https://kartikdeavarde.me',
  },
  {
    social: 'email',
    link: 'mail_me',
    href: 'mailto:kartikdevarde@2612outlook.com',
  },
  {
    social: 'github',
    link: 'Kartikdevarde2601',
    href: 'https://github.com/Kartikdevarde2601',
  },
  {
    social: 'linkedin',
    link: 'KartikDevarde',
    href: 'https://www.linkedin.com/in/kartik-devarde-aab111227',
  },
  {
    social: 'twitter',
    link: 'DevardeKartik',
    href: 'https://www.twitter.com/DevardeKartik',
  },
  {
    social: 'instagram',
    link: 'kartikdevarde',
    href: 'https://www.instagram.com/kartikdevarde',
  },
  {
    social: 'telegram',
    link: 'it_kartik',
    href: 'https://t.me/+91636462643',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
