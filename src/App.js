import Header from "./Components/Header";
import Pages from "./Components/Pages";
import { Home } from "./Components/Home";
import { useState } from "react";

function App() {
  const [showHome, SetShowHome] = useState(true);
  return (
    <div className="App">
      {showHome === false ? (
        <Header SetShowHome={() => SetShowHome(true)} />
      ) : null}
      {showHome === true ? <Home SetShowHome={SetShowHome} /> : null}
      {showHome === false ? <Pages /> : null}
    </div>
  );
}
export default App;
