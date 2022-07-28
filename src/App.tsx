import React, { useState } from "react";
import Button from "./components/Button";
import Counter from "./components/Counter";
import Greet from "./components/Greet";
import Input from "./components/Input";
import Loggin from "./components/Loggin";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import PersonNameModel from "./model/PersonNameModel";
import StatusModel from "./model/StatusModel";
import { useDarkMode } from "./context/DarkModeContext";
import Box from "./context/Box";
const App: React.FunctionComponent = () => {
  const personNames: PersonNameModel[] = [
    {
      name: "Danial",
      lastName: "Bahrizadeh",
    },
    {
      name: "Mostafa",
      lastName: "Naseri",
    },
    {
      name: "Alireza",
      lastName: "shogub",
    },
  ];
  const status: StatusModel = StatusModel.loading;

  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setInputValue(target.value);
  };

  const [isLogin, setIsLogin] = useState<boolean>(false);

  const darkMode = useDarkMode();
  return (
    <div className={darkMode.darkMode ? "dark" : "light"}>
      <Greet name="Danial" messageCount={10} isLogged={true} />
      <PersonList personNames={personNames} />
      <Status status={status} />
      <Button handleClick={() => console.log("clicked")} />
      <Input value={inputValue} handleChagne={handleChange} />
      <Loggin
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        email="Danial@gmail.com"
        password="test123"
      />
      <Counter />
      <Box />
      <button
        type="button"
        onClick={darkMode.toggleDarkMode}
        className="dark:bg-violet-700 dark:text-rose-300 bg-cyan-500 text-emerald-700 rounded-lg px-3 py-1 ml-5 my-3"
      >
        Change theme
      </button>
    </div>
  );
};
export default App;
