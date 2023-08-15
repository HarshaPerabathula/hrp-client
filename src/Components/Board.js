import React from "react";
import styled from "styled-components";
import Kanban from "./kanban";

const BoardContainer = styled.div`
  over-flow: scroll;
`;

const Board = () => {
  return (
    <BoardContainer>
      <Kanban />
    </BoardContainer>
  );
};

export default Board;
