import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SideBtnWrap, SidebarRoute, SidebarLink} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}> 
            <Icon onClick={toggle}> 
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="donate" onClick={toggle}>Donate</SidebarLink>
                <SidebarLink to="leaderboard" onClick={toggle}>Leaderboard</SidebarLink>
                <SidebarLink to="testimonials" onClick={toggle}>Impact</SidebarLink>
                <SidebarLink to="faqs" onClick={toggle}>How?</SidebarLink>
                <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>

                <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/'>Sign In</SidebarRoute>
            </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
