import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user }) => {
  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  return (
    <>
      <div className={styles.user}>
        <div>
          <img
            src={user.avatar_url}
            alt={user.login}
            width={50}
            height={50}
          />
          <h3 className={styles.username}>{user.login}</h3>
        </div>
        <div>
          <h3>{user.public_repos} repos</h3>
        </div>
        <div>
          <h3>{user.followers} followers</h3>
        </div>
      </div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div className={styles.contributions}>
        <GitHubCalendar
          username="KartikDevarde2601"
          theme={theme}
          hideColorLegend
          hideMonthLabels
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  try {
    const userRes = await fetch('https://api.github.com/users/KartikDevarde2601');
    const user = await userRes.json();

    const repoRes = await fetch('https://api.github.com/users/KartikDevarde2601/repos?per_page=100');
    if (!repoRes.ok) {
      throw new Error('Failed to fetch repositories');
    }
    let repos = await repoRes.json();

    repos = repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6);

    return {
      props: { title: 'GitHub', repos, user },
      revalidate: 10,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { title: 'GitHub', repos: [], user: {} }, // Provide empty data in case of error
      revalidate: 10,
    };
  }
}


export default GithubPage;
