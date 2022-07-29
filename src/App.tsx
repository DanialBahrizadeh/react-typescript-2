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
import DomRef from "./ref/DomRef";
import MutableRef from "./ref/MutableRef";
import CounterClass from "./components/class/CounterClass";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import List from "./components/generics/List";
import RandomNumber from "./components/restriction/RandomNumber";
import Toast from "./components/templateliterals/Toast";
import CustomButton from "./components/html/Button";
import CustomInput from "./components/html/Input";
import CustomComponent from "./components/html/CustomComponent";
import Text from "./components/polymorphic/Text";
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
  const items = [
    {
      id: 1,
      value: "Danial",
    },
    {
      id: 2,
      value: "Mostafa",
    },
    {
      id: 3,
      value: "Ali",
    },
  ];
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
      <DomRef />
      <MutableRef />
      <CounterClass message="The coutn value is " />
      <Private isLogged={true} Component={Profile} />
      <List items={items} onClick={(item) => console.log(item)} />
      <RandomNumber value={10} isPositive />
      <Toast position="top-left" />
      <CustomButton variant="primary" onClick={() => console.log("clickd")}>
        Primary Button
      </CustomButton>
      <CustomInput type="text" />
      <CustomComponent name="Danial" isLogged />
      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor="someId" size="sm">
        Label
      </Text>
    </div>
  );
};
export default App;
