import fetch from "isomorphic-unfetch";

const name = ({ user }) => {
  console.log(user);
  const username = user && user.name;
  return <div>{username}</div>;
};

name.getInitialProps = async ({ query }) => {
  const { name } = query;
  try {
    const res = await fetch(`https://api.github.com/users/${name}`);
    if (res.status === 200) {
      const user = await res.json();
      console.log("username : ", user.name);
      return { props: { user } };
    }
    return { props: {} };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
};

export default name;
