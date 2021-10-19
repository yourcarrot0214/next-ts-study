import { useState } from "react";
import { useRouter } from "next/router";

const App = () => {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <div>
      <img src="/favicon.ico" alt="favicon" />
    </div>
  );
};

export default App;
