import Link from "next/link";
import { useRouter } from "next/router";

const name = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h2>Hello! This is {router.query.name} page</h2>
      <Link href="/">Move to '/'</Link>
    </div>
  );
};

export default name;
