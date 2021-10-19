import fetch from "isomorphic-unfetch";

const name = ({ user, time }) => {
  const username = user && user.name;
  console.log(user);
  return (
    <div>
      {username}
      {time}
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  console.log(params);
  try {
    const res = await fetch(`https://api.github.com/users/${params.name}`);

    if (res.status === 200) {
      const user = await res.json();
      return { props: { user, time: new Date().toString() } };
    }
    return { props: { time: new Date().toString() } };
  } catch (error) {
    console.log(error);
    return { props: { time: new Date().toString() } };
  }
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { name: "yourcarrot0214" } }],
    fallback: true,
  };
}

export default name;
