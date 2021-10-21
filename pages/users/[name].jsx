import Profile from "../../components/Profile";
import Repositories from "../../components/Repositories";
import fetch from "isomorphic-unfetch";
import css from "styled-jsx/css";

const style = css`
  .user-contents-wrapper {
    display: flex;
    padding: 20px;
  }
`;

const name = ({ user, repos }) => {
  if (!user) return null;

  return (
    <div className="user-contents-wrapper">
      <Profile user={user} />
      <Repositories user={user} repos={repos} />
      <style jsx>{style}</style>
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const { name, page } = query;

  try {
    let user;
    let repos;

    const userRes = await fetch(`https://api.github.com/users/${name}`);
    if (userRes.status === 200) {
      user = await userRes.json();
    }

    const repoRes = await fetch(
      `https://api.github.com/users/${name}/repos?sort=updated&page=${page}&per_page=10`
    );
    if (repoRes.status === 200) {
      repos = await repoRes.json();
    }
    return { props: { user, repos } };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
};

export default name;
