import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/Hamzaali66/repos",
    {
      next: {
        revalidate: 60,
      },
    }
  );

  await new Promise((resolve) => setTimeout(resolve, 1000)); // await for 1 second and show loader

  const data = await response.json();
  return data;
}

export default async function ReposPage() {
  const repos = await fetchRepos();
  return (
    <div className="repos-container">
      <h2>Repositories</h2>
      <ul className="repo-list">
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="repo-details">
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
