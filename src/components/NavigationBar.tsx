
import LogoSVG from "../img/logo.svg";
import BorderAccentSVG from "../img/NavigationBar/BorderAccent.svg";
import IconButton from "./IconButton";


import UserSVG from '../img/NavigationBar/User.svg';
import AccountMenu from "./AccountMenu";
import MenuToggleMediator from "./MenuToggleMediator";
import NavButtonGroup from "./NavButtonGroup";

interface INavbarProps{
    userId:     number;
    userName:   string;
}

const NavigationBar: React.FunctionComponent<INavbarProps> = ({userId, userName}) => {
    return (
        <div className="z-10">
            <div className="w-full bg-black h-16 flex flex-row items-center justify-between">
                <img src={LogoSVG} className="w-16 h-16 ml-2 mr-4" alt="Juukebox logo"/>
                
                <div className="hidden sm:flex">
                    <NavButtonGroup/>
                </div>

                <div className="mr-2 flex flex-col">
                    <MenuToggleMediator toggler={<IconButton icon={UserSVG}>Account</IconButton>} menu={<AccountMenu/>}/>
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