import React, { useState } from "react";
import styled from "styled-components";
import Textbox from "../Controls/textBox";
import Button from "../Controls/button";

const LoggerContainer = styled.div``;

const LogingDescription = styled.div`
  padding: 2px;
  border: 2px solid black;
`;

const Logger = () => {
  const [description, setDescription] = useState("");
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interval, settingInterval] = useState();
  const [buttonName, setButtonName] = useState("Start");

  const stopWatch = () => {
    if (buttonName === "Start") {
      run();
      settingInterval(setInterval(run, 10));
      setButtonName("Stop");
      return;
    }
    if (description === "") {
      console.log("Description should not be empty");
      return;
    }
    clearInterval(interval);
    setButtonName("Start");
    console.log("time", time);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  var updatedMS = time.ms,
    updatedS = time.s,
    updatedM = time.s,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMS === 100) {
      updatedS++;
      updatedMS = 0;
    }
    updatedMS++;
    return setTime({ ms: updatedMS, s: updatedS, m: updatedM, h: updatedH });
  };

  return (
    <LoggerContainer>
      <LogingDescription>
        {description}
        <Textbox
          placeholder="Description"
          onChange={(e) => {
            setDescription(e);
          }}
          value={description}
        />
        <span>{time.h >= 10 ? time.h : `0${time.h}`}</span>
        &nbsp;&nbsp;:&nbsp;&nbsp;
        <span>{time.m >= 10 ? time.m : `0${time.m}`}</span>
        &nbsp;&nbsp;:&nbsp;&nbsp;
        <span>{time.s >= 10 ? time.s : `0${time.s}`}</span>
        &nbsp;&nbsp;:&nbsp;&nbsp;
        <span>{time.ms >= 10 ? time.ms : `0${time.ms}`}</span>
        <Button text={buttonName} onClick={stopWatch} />
      </LogingDescription>
    </LoggerContainer>
  );
};

export default Logger;
