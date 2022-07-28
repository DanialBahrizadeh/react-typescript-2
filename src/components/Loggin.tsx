import React from "react";

interface LogginProps {
  email?: string;
  password?: string;
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Loggin: React.FunctionComponent<LogginProps> = (props) => {
  const email = "Danial@gmail.com";
  const password = "test123";
  const login = (event: React.MouseEvent<HTMLButtonElement>): void => {
    if (props.email === email && props.password === password) {
      props.setIsLogin(true);
    }
  };

  const logout = (event: React.MouseEvent<HTMLButtonElement>): void => {
    props.setIsLogin(false);
  };

  return (
    <div>
      <button type="button" onClick={login}>
        Login
      </button>
      <button type="button" onClick={logout}>
        Logout
      </button>
      <h2>
        {props.isLogin
          ? "welcome you succsecfully logged in"
          : "you logout from the website"}
      </h2>
    </div>
  );
};

export default Loggin;
