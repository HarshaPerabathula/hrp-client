import React from "react";
import styled from "styled-components";
import Textbox from "../Controls/textBox";
import Button from "../Controls/button";
import { useState } from "react";

const SigninContainer = styled.div`
  min-height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Signin = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const onChange = (value, key) => {
    setCredentials((p) => ({ ...p, [key]: value }));
  };

  return (
    <SigninContainer>
      <Textbox
        placeholder="Email"
        value={credentials.email}
        onChange={(email) => onChange(email, "email")}
      />

      <Textbox
        placeholder="Password"
        value={credentials.password}
        type="password"
        onChange={(password) => onChange(password, "password")}
      />

      <Button text="Submit" />
    </SigninContainer>
  );
};

export default Signin;
