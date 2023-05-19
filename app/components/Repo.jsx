import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye, } from "react-icons/fa";

async function fetchRepo(name) {
  const response = await fetch(
    `https://api.github.com/repos/Hamzaali66/${name}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const resData = response.json();
  return resData;
}

const Repo = async ({ name }) => {
  const repoData = await fetchRepo(name);
  return (
    <>
      <h2>{repoData.name}</h2>
      <p>{repoData.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span>{repoData.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch />
          <span>{repoData.forks_count}</span>
        </div>
        <div className="card-stat">
          <FaEye />
          <span>{repoData.watchers_count}</span>
        </div>
      </div>
    </>
  );
};

export default Repo;
