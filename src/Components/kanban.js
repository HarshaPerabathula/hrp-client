import React, { useState } from "react";
import styled from "styled-components";

const KanbanContainer = styled.div`
  width: 100%;
  height: 200px;
  margin: 100px auto;
  display: flex;
  justify-content: space;
  over-flow: scroll;
`;

const KanbanSection = styled.div`
  width: 200px;
  height: 90%;
  padding: 20px;
  margin: 10px;
  background: grey;
  box-sizing: border-box;
  border: 1px solid red;
`;

const Ticket = styled.div`
  background: red;
  padding: 5px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  margin: 5px;
`;

const Kanban = () => {
  // const [dragItem, setDragItem] = useState(null);
  var item = null;

  const dragStart = (e) => {
    e.target.style.display = "block";
    // setDragItem(e);
    item = e;
    // console.log("item start", item);
  };

  const dragEnd = (e) => {
    e.target.style.display = "none";
    // setDragItem(null);
    // console.log("item End", item);
  };

  const dragOver = (e) => {
    e.preventDefault();
    e.target.style.border = "2px dotted cyan";
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.target.style.border = "none";
    console.log("drag leave", e);
  };

  const dropElement = (e) => {
    // console.log("dragItem", dragItem);
    console.log("item drop", item, e);
    e.target.style.border = "none";
    e.target.childNodes.push(item.target);
    // e.target.childNodes[0].style.display = "none";
  };

  return (
    <KanbanContainer>
      <KanbanSection
        onDragOver={(e) => {
          dragOver(e);
        }}
        onDragEnter={(e) => {
          dragEnter(e);
        }}
        onDragLeave={(e) => {
          dragLeave(e);
        }}
        onDrop={(e) => {
          dropElement(e);
        }}
        // onDropCapture={(e) => {
        //   dropElement(e);
        // }}
        // onDragEnd={(e) => {
        //   dropElement(e);
        // }}
      >
        <Ticket
          onDragStart={(e) => {
            dragStart(e);
          }}
          onDragEnd={(e) => {
            dragEnd(e);
          }}
          draggable
        >
          Apple
        </Ticket>
        <Ticket
          onDragStart={(e) => {
            dragStart(e);
          }}
          onDragEnd={(e) => {
            dragEnd(e);
          }}
          draggable
        >
          Sony
        </Ticket>
        <Ticket
          onDragStart={(e) => {
            dragStart(e);
          }}
          onDragEnd={(e) => {
            dragEnd(e);
          }}
          draggable
        >
          Samsung
        </Ticket>
        <Ticket
          onDragStart={(e) => {
            dragStart(e);
          }}
          onDragEnd={(e) => {
            dragEnd(e);
          }}
          draggable
        >
          Blue Star
        </Ticket>
      </KanbanSection>
      <KanbanSection
        onDragOver={(e) => {
          dragOver(e);
        }}
        onDragEnter={(e) => {
          dragEnter(e);
        }}
        onDragLeave={(e) => {
          dragLeave(e);
        }}
        onDrop={(e) => {
          dropElement(e);
        }}
        // onDropCapture={(e) => {
        //   dropElement(e);
        // }}
      ></KanbanSection>
      <KanbanSection
        onDragOver={(e) => {
          dragOver(e);
        }}
        onDragEnter={(e) => {
          dragEnter(e);
        }}
        onDragLeave={(e) => {
          dragLeave(e);
        }}
        onDrop={(e) => {
          dropElement(e);
        }}
        // onDropCapture={(e) => {
        //   dropElement(e);
        // }}
      ></KanbanSection>
      <KanbanSection
        onDragOver={(e) => {
          dragOver(e);
        }}
        onDragEnter={(e) => {
          dragEnter(e);
        }}
        onDragLeave={(e) => {
          dragLeave(e);
        }}
        onDrop={(e) => {
          dropElement(e);
        }}
        // onDropCapture={(e) => {
        //   dropElement(e);
        // }}
      ></KanbanSection>
    </KanbanContainer>
  );
};

export default Kanban;
