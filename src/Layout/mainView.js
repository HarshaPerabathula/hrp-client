import React from "react";
import TopNavbar from "./topNavbar";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Logger from "../Components/Logger.js";
import Board from "../Components/Board";

const MainViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.div`
  margin: 2px;
  flex-grow: 1;
`;

const MainView = () => {
  return (
    <MainViewContainer>
      <Main>
        <TopNavbar></TopNavbar>
        <Routes>
          <Route path="/" element={<Board />}></Route>
          <Route path="/board" element={<Board />}></Route>
          <Route path="/dashboard" element={<p>Dashboard</p>}></Route>
          <Route path="/logger" element={<Logger />}></Route>
          <Route path="/settings" element={<p>Settings</p>}></Route>
        </Routes>
      </Main>
    </MainViewContainer>
  );
};

export default MainView;
