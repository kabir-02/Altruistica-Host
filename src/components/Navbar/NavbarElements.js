import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background:#fff;
    height:80px;
    display:flex;
    margin-top: -80px;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position:sticky;
    top:0;
    z-index:50;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }

`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height:80px;
    z-index:1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color:#800080;
    justify-self: flex-start;
    cursor:pointer;
    dont-size: 1.5rem;
    display:flex;
    align-items: center;
    margin-left: 24px;
    font-size: 22px;
    font-weight: bold;
    text-decoration: none;


    &:hover{
        transition: all 0.2s ease-in-out;
        color: #301934;
        font-weight:bold;
        text-decoration:none;
    }
`;

export const MobileIcon = styled.div`
    display:none;
    @media screen and (max-width:768px){
        display:block;
        position: absolute;
        top:0;
        right:0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor:pointer;
        color: #800080;
    }
`

export const NavMenu = styled.ul`
    display:flex;
    align-items: center;
    list-style:none;
    text-align:center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display:none;
    }
`
export const NavItem = styled.li`
    height:80px;
`

export const NavLinks = styled(LinkS)`
    color: #800080;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #301934;
    }
    &:hover{
        transition: all 0.2s ease-in-out;
        color: #301934;
        font-weight:bold;
        text-decoration:none;
    }
`;

export const NavBtn= styled.nav`
    display:flex;
    align-items: center;

    @media screeen and (max-width: 768px){
        display:none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #800080;
    white-space: nowrap;
    padding: 10px 22px;
    color: white;
    font-size: 16px;
    outline: none;
    border:none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration:none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #301934;
        color: #fff;
        text-decoration:none;
    }
`;