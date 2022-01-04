import React from 'react';
import MenuItem from './MenuItem';
import UserSVG from '../img/NavigationBar/User.svg';
import ProfileSVG from '../img/NavigationBar/Profile.svg';
import LogoutSVG from '../img/NavigationBar/Logout.svg';
import MenuSeparator from './MenuSeparator';
import MenuContainer from './MenuContainer';

function testHandler(){
    //alert("zort");
}

interface IAccountMenuProps {
    toggleHandler?:  () => void;   
}

const AccountMenu: React.FunctionComponent<IAccountMenuProps> = ({toggleHandler}) => {
    return (
        <MenuContainer className="absolute top-20 right-4" toggleHandler={toggleHandler}>
                <MenuItem icon={ProfileSVG} clickHandler={testHandler} route="/profile/userid">Profile</MenuItem>
                <MenuItem clickHandler={testHandler} route="/account">Account</MenuItem>
                <MenuItem clickHandler={testHandler} route="/settings">Settings</MenuItem>
                <MenuSeparator/>
                <MenuItem icon={LogoutSVG} clickHandler={testHandler}>Log Out</MenuItem>
        </MenuContainer>
    )
}

export default AccountMenu
