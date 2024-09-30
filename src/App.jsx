import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [server, setServer] = useState("");
  const checkApi = async () => {
    try {
      const data = await fetch("http://13.60.170.126/");
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
