import { getAbout } from './api/about'
import styles from '../styles/About.module.css'


const AboutPage = ({About}) => {
  return (
    <div className={styles.code}>
      <h3 className={styles.line}><span className={styles.tag}>&lt;h1&gt;</span>A Little Bit About Me <span className={styles.tag}>&lt;/h1&gt;</span></h3>
      <p className={styles.line}><span className={styles.tag}>&lt;p&gt;</span>{About.overview}<span className={styles.tag}>&lt;/p&gt;</span></p>
      <h4 className={styles.line}><span className={styles.tag}>&lt;h4&gt;</span>{About.edutitle}<span className={styles.tag}>&lt;/h4&gt;</span></h4>
      <p className={styles.line}><span className={styles.tag}>&lt;p&gt;</span>{About.eduction}<span className={styles.tag}>&lt;/p&gt;</span></p>
      <h4 className={styles.line}><span className={styles.tag}>&lt;h4&gt;</span>{About.worktitle}<span className={styles.tag}>&lt;/h4&gt;</span></h4>
      <h4 className={styles.line}><span className={styles.tag}>&lt;h4&gt;</span>{About.companyName}<span className={styles.tag}>&lt;/h4&gt;</span></h4>
      <p className={styles.line}><span className={styles.tag}>&lt;p&gt;</span>{About.workone}<span className={styles.tag}>&lt;/p&gt;</span></p>
      <h4 className={styles.line}><span className={styles.tag}>&lt;h4&gt;</span>{About.skilltitle}<span className={styles.tag}>&lt;/h4&gt;</span></h4>
      <p className={styles.line}> <span className={styles.skills}>LanguagesConcepts</span> = ["C/C++", "JavaScript", "Python, "SQL"]</p>
      <p className={styles.line}> <span  className={styles.skills}>Front end</span> = ["HTML", "CSS", "Bootstrap", "RestAPI", "Next.js","React.js"]</p>
      <p className={styles.line}> <span className={styles.skills}>Frontend Library</span> = [ 'Routing', "Redux", "Redux-Sagas", "Formik".]</p>
      <p className={styles.line}> <span className={styles.skills}>Database</span> = ["MySQL", "MongoDB", "Firebase"]</p>
      <p className={styles.line}> <span className={styles.skills}>Core Subjects</span> = ["OOPs", "CN", "OS", "DBMS"] </p>
    </div>
  );
};

export async function getStaticProps() {
  const aboutData = getAbout();
  const About = aboutData[0];
  return {
    props: { title: 'About', About },
  };
}

export default AboutPage;
