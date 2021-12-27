import React, { MouseEventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";
import classNames from 'classnames';
import {useLocation} from 'react-router-dom';

interface IIconButtonProps{
    icon?:          string;
    children?:      React.ReactNode;
    clickHandler?:  MouseEventHandler<HTMLAnchorElement>; 
    route?:         string;
    blue?:          boolean;
    pink?:          boolean;
    isNavButton?:   boolean;
}

const IconButton : React.FunctionComponent<IIconButtonProps> = ({icon, children, clickHandler, route, blue, pink, isNavButton}) => {
    //Put this on a state perhaps?
    const currentRoute = useLocation().pathname;
    
    const buttonBaseStyle = "text-slate-200 h-8 rounded-md text-xs mx-2 flex flex-row justify-center items-center min-w-button px-2 py-1 select-none";
    const buttonStandardColors = "bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-900";
    const buttonPinkColors = "text-white bg-juukebox-pink hover:bg-juukebox-pink-hover active:bg-juukebox-pink-active";
    const buttonBlueColors = "text-white bg-juukebox-blue hover:bg-juukebox-blue-hover active:bg-juukebox-blue-active";
    const navButtonActiveColor = buttonBlueColors;
    
    const buttonContent = (
        <div 
        className={classNames(buttonBaseStyle, {
            [buttonPinkColors]: pink,
            [buttonBlueColors]: blue,
            [buttonStandardColors]: !pink && !blue,
            [navButtonActiveColor]: isNavButton && currentRoute === `/${route}`,
        })}
        >
            {icon ? <img src={icon} alt="" className="mr-2"/> : undefined}
            {children}
        </div>
    );
    
    if(route){
        return(
            <Link 
            to={route ? route: ""}
            onClick={clickHandler}>
                {buttonContent}
            </Link>
        );
    }
    else{
        return (
            <a href="" className="flex flex-row items-center" onClick={(e) => {
                e.preventDefault();
                if(clickHandler) clickHandler(e);
            }}>
                {buttonContent};

            </a>
        );
    }
};

export default IconButton; 