import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LeftNavContainer = styled.div`
  position: sticky;
  top: 8px;
`;

const LeftNav = styled.div`
  height: 96vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .nav-options {
    padding: 10px;
    box-shadow: 0px 1px 16px 0px rgb(0 0 0 / 8%),
      0px 3px 1px -2px rgb(0 0 0 / 5%), 0px 6px 16px 0px rgb(0 0 0 / 10%);
    border-radius: 8px;
    width: 80%;
    margin: 10px;
    font-weight: 600px;
    text-decoration: none;
    color: #4f5d75;
  }
`;

// const NavOptions = styled.div`
//   padding: 10px;
//   box-shadow: 0px 1px 16px 0px rgb(0 0 0 / 8%), 0px 3px 1px -2px rgb(0 0 0 / 5%),
//     0px 6px 16px 0px rgb(0 0 0 / 10%);
//   border-radius: 8px;
//   width: 80%;
//   margin: 10px;
//   font-weight: 600px;
// `;

const BannerImage = () => {
  const bannerStyle = {
    width: "80%",
    margin: "20px 0 20px 0",
  };
  return (
    <img
      src="https://app.possibleworks.com/img/pwLogo.3e9169d6.png"
      alt="company-logo"
      style={bannerStyle}
    />
  );
};

const LeftNavbar = () => {
  return (
    <LeftNavContainer>
      <LeftNav>
        <BannerImage></BannerImage>
        {["Board", "Logger", "Dashboard", "Settings"].map((nav) => (
          <Link
            className="nav-options"
            key={nav.toLowerCase()}
            to={nav.toLowerCase()}
          >
            {nav}
          </Link>
        ))}
      </LeftNav>
    </LeftNavContainer>
  );
};

export default LeftNavbar;
