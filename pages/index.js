import Link from "next/link";
import Tomato from "./tomato";

const App = () => {
  return (
    <div>
      <h2>Link to 'tomato' Page</h2>
      <Link href="/tomato" as="토마토">
        <a>Move to 'tomato'</a>
      </Link>
    </div>
  );
};

export default App;
