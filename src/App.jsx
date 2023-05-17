import { createContext, useContext, useState } from "react";
import "./App.css";
import ThemeTumbler from "./ThemeTumbler/ThemeTumbler";
import Users from "./Users/Users";

export const userContext = createContext({
  theme: "light",
  setTheme: () => {},
});

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className="App">
      <userContext.Provider value={{ theme, setTheme }}>
        <div className="App__tumbler">
          <ThemeTumbler />
        </div>
        <div className="App__content">
          <Users />
        </div>
      </userContext.Provider>
    </div>
  );
}

export default App;
