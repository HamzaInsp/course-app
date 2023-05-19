import Link from "next/link";

async function fetchRepoContents(name) {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await fetch(
    `https://api.github.com/repos/Hamzaali66/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const data = response.json();
  return data;
}

const RepoDirc = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  const dirc = contents.filter((content) => content.type === "file");
  return (
    <>
      <h2>Directories</h2>
      <ul>
        {dirc.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoDirc;
