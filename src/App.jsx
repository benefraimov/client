import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [server, setServer] = useState("");
  const checkApi = async () => {
    try {
      const data = await fetch("https://server.spacode.site");
      const result = await data.json();
      setServer(result.name);
    } catch (error) {
      console.error("error: ", error);
    }
  };

  useEffect(() => {
    checkApi();
  }, []);

  return (
    <>
      <h1>Test Client</h1>
      <p>{server}</p>
    </>
  );
}

export default App;
