import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtnLink} from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>ALTRUISTICA</NavLogo>
                <MobileIcon onClick ={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
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
