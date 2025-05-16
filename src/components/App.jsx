import "../scss/App.scss";
import charactersFromApi from "./services/charactersFromApi";
import { useEffect } from "react";

function App() {

useEffect(() => {
    charactersFromApi().then((charactersData) => {
      console.log(charactersData)
    })
  }, [])

  return (
    <div>
    </div>
  );
}

export default App;
