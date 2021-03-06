import React, { useState } from "react";
import ReactDOM from "react-dom";
import Styled from "styled-components";
import logo from "../img/logo.svg";
import { Menu } from "react-feather";
import * as Icon from "react-feather";

const HeaderContainer = Styled.div`

width: 100vw;
height: 125px;

display: flex;
justify-content: center;
align-items: center;
position: fixed;
z-index: 100;
z-index: 2000;

            


`;

const Container = Styled.div`

width: 80vw;
height: 125px;

display: flex;
justify-content: space-between;
align-items: flex-end;


            
@media only screen and (max-width: 800px){
  align-items: center;
}


`;

const Nav = Styled.div`




display: flex;
justify-content: space-between;
backround:;

@media only screen and (max-width: 800px){
  display: none;
}

`;

const NavMobile = Styled.div`




display: none;
justify-content: flex-end;
align-items: center;
backround: red;
width: 100%;
height: 100px;
color: white;
cursor: pointer;

@media only screen and (max-width: 800px){
  display: flex;
}

`;

const NavLink = Styled.a`

color: white;
font-size: 20px;
margin: 0 0 0 50px;
text-decoration: none;
z-index 500;

`;

const Logo = Styled.a`



display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
cursor: pointer;


overflow: hidden;
position: relative;


&:after {
  background: #fff;
  content: "";
  height: 255px;
  left: -125px;
  opacity: .2;
  position: absolute;
  top: -50px;
  transform: rotate(35deg);
  transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  width: 50px;
  z-index: -10;
}

&:hover{

  &:after {
    left: 190%;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }




`;

const Circle = Styled.a`

background: #BCCBFF;
position: absolute;
right: -100px
width: 10px;
height: 10px;
border-radius: 50px;
transition: 0.1s ease;
z-index: 100;
`;

const MobileMenu = Styled.div`

background: #BCCBFF;
position: absolute;
left: 0;
top: 0;
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
transition: 0.1s ease;
z-index: 100;
`;

const Header = () => {
  const [enlarge, setEnlarge] = useState(0);
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    if (enlarge == 0) {
      setEnlarge(enlarge + 100);
      setTimeout(() => {
        setMenu(true);
      }, 200);
    } else {
      setMenu(false);

      setEnlarge(enlarge - 100);
    }

    console.log(enlarge);
  };

  return (
    <HeaderContainer>
      <Container>
        <Logo style={{ zIndex: "500" }} href="#top">
          <img width="100px" src={logo} alt="" />
        </Logo>

        <NavMobile>
          <Icon.Menu
            style={{ zIndex: "500", display: menu ? "none" : "flex" }}
            onClick={handleClick}
          />
          <Icon.X
            style={{ zIndex: "500", display: menu ? "flex" : "none" }}
            onClick={handleClick}
          />
          <Circle
            style={{
              background: "#BCCBFF",
              position: "absolute",

              width: "23px",
              height: "23px",
              borderRadius: "50px",
              transition: "0.5s ease",
              zIndex: "-100",
              transform: "scale(" + enlarge + ")",
            }}
          ></Circle>
        </NavMobile>

        <MobileMenu
          style={{
            display: menu ? "flex" : "none",
          }}
        >
          <NavLink onClick={handleClick} href="#1">
            catalogue
          </NavLink>
          <NavLink onClick={handleClick} href="#about">
            about
          </NavLink>

          <NavLink onClick={handleClick} href="#contact">
            contact
          </NavLink>
        </MobileMenu>

        <Nav>
          <NavLink href="#1">catalogue</NavLink>
          <NavLink href="#about">about</NavLink>

         {/*  <NavLink href="#contact">contact</NavLink> */}
        </Nav>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
