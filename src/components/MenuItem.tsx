import React, {MouseEventHandler} from 'react'
import {Link} from 'react-router-dom'

interface IMenuItemProps {
    children?: React.ReactNode;
    clickHandler?: MouseEventHandler<HTMLAnchorElement>; 
    icon?: string;
    route?: string;
}

const MenuItem: React.FunctionComponent<IMenuItemProps> = ({children, clickHandler, route, icon}) => {
    const itemContent = ( 
    <li className="py-2 px-2 rounded-md hover:bg-zinc-700 active:bg-zinc-900 h-8 flex flex-row">
        {icon && <img src={icon} alt="" className="mr-2"/>}
        {children} 
    </li>
    );
    
    if(route){
        return (
            <Link 
            to={route ? route: ""}
            onClick={clickHandler}>
                {itemContent}
            </Link>
        );
    }
    else{
        return (
            <a href="" onClick={e => {
                e.preventDefault();
                if(clickHandler) clickHandler(e);
            }}>
                {itemContent}
            </a>
        )
    }
}

export default MenuItem;
