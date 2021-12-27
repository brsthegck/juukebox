
import LogoSVG from "../img/logo.svg";
import BorderAccentSVG from "../img/NavigationBar/BorderAccent.svg";
import IconButton from "./IconButton";

import HomeSVG from '../img/NavigationBar/Home.svg';
import LibrarySVG from '../img/NavigationBar/Library.svg';
import SearchSVG from  '../img/NavigationBar/Search.svg';
import UserSVG from '../img/NavigationBar/User.svg';

interface INavbarProps{
    userId:     number;
    userName:   string;
}

function accountDropdownToggle(): void{
    alert("Toggled!");
}

const NavigationBar: React.FunctionComponent<INavbarProps> = ({userId, userName}) => {


    return (
        <div className="z-10">
            <div className="w-full bg-black h-16 flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                    <img src={LogoSVG} className="w-16 h-16 ml-2 mr-4" alt="Juukebox logo"/>
                    <IconButton icon={HomeSVG} route="home" isNavButton>Home</IconButton>
                    <IconButton icon={LibrarySVG} route="library" isNavButton>Library</IconButton>
                    <IconButton icon={SearchSVG} route="search" isNavButton>Search</IconButton>
                </div>
                <div className="mr-4 flex flex-col">
                    <IconButton icon={UserSVG} clickHandler={accountDropdownToggle}>Account</IconButton>
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <img src={BorderAccentSVG} alt=""/>
                <img src={BorderAccentSVG} className="-scale-x-100" alt=""/>
            </div>
        </div>
    );
};

export default NavigationBar;