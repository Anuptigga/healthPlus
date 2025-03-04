import React, { useState } from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  position: relative;
`;

const Logo = styled.a`
  font-size: 24px;
  font-weight: bold;
  color: #009688;
  text-decoration: none;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  color: #757575;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    background-color: #fff;
    position: absolute;
    top: 60px; /* Adjust as per the navbar height */
    left: 0;
    right: 0;
    padding: 10px 20px;
    border: 1px solid #eee;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  }
`;

const NavLink = styled.li`
  a {
    text-decoration: none;
    color: #333;
    font-size: 16px;
    &:hover {
      color: #009688;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: #333;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <NavbarContainer>
      <Logo href="/">Health Plus</Logo>
      <Hamburger onClick={handleToggle}>
        <Bar />
        <Bar />
        <Bar />
      </Hamburger>
      <NavLinks isOpen={isOpen}>
        <NavLink><a href="#">Home</a></NavLink>
        <NavLink><a href="#">Doctors</a></NavLink>
        <NavLink><a href="#">About</a></NavLink>
        <NavLink><a href="#">Contact</a></NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
