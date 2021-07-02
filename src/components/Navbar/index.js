import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavLink, NavBtnLink} from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'><img className="logo-size" src="img/allogo.png"/>ALTRUISTICA</NavLogo>
                <MobileIcon onClick ={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        {console.log(window.location.pathname)}
                        {window.location.pathname==='/'?<NavLinks to="about">About</NavLinks>: <NavLink to="/">About</NavLink>}
                    </NavItem>
                    <NavItem>
                        <NavLinks to="donate">Donate</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="leaderboard">Leaderboard</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="testimonials">Impact</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="faqs">How</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">Contact</NavLinks>
                    </NavItem>
                    <NavBtnLink to="signin">Sign In</NavBtnLink>
                </NavMenu>
                
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar;
